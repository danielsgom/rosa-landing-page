#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
#  Rosa XOXO — Producción local optimizada
#  Uso: ./start.prod.sh
#  Requisitos: node >=20, npm, puerto 3001 y 4173 libres
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

ENV_FILE=".env.local"
API_PORT=3001
STATIC_PORT=4173
BUILD_DIR="dist"

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'

log()  { echo -e "${GREEN}[prod]${NC} $*"; }
warn() { echo -e "${YELLOW}[warn]${NC} $*"; }
err()  { echo -e "${RED}[error]${NC} $*"; exit 1; }

# ── 1. Env ────────────────────────────────────────────────────────────────────
[[ -f "$ENV_FILE" ]] || err "Falta $ENV_FILE. Cópialo de .env.example y rellénalo."
export $(grep -v '^#' "$ENV_FILE" | grep -v '^$' | xargs)

[[ -z "${STRIPE_SECRET_KEY:-}" ]]    && err "STRIPE_SECRET_KEY no definida en $ENV_FILE"
[[ -z "${STRIPE_WEBHOOK_SECRET:-}" ]] && err "STRIPE_WEBHOOK_SECRET no definida en $ENV_FILE"
[[ -z "${STRIPE_PRICE_MONTHLY:-}" ]] && err "STRIPE_PRICE_MONTHLY no definida en $ENV_FILE"
[[ -z "${STRIPE_PRICE_ANNUAL:-}" ]]  && err "STRIPE_PRICE_ANNUAL no definida en $ENV_FILE"

# ── 2. Liberar puertos ────────────────────────────────────────────────────────
log "Liberando puertos $API_PORT y $STATIC_PORT..."
lsof -ti tcp:$API_PORT,$STATIC_PORT 2>/dev/null | xargs kill -9 2>/dev/null || true

# ── 3. Build ──────────────────────────────────────────────────────────────────
log "Compilando app (producción)..."
NODE_ENV=production npx vite build \
  --minify esbuild \
  --logLevel warn

log "Bundle generado en ./$BUILD_DIR"

# ── 4. API server ─────────────────────────────────────────────────────────────
log "Arrancando API en puerto $API_PORT..."
NODE_ENV=production node --env-file="$ENV_FILE" server.dev.js > /tmp/rosa-api.log 2>&1 &
API_PID=$!

# Esperar a que la API esté lista (máx 5 s)
for i in {1..10}; do
  curl -sf "http://localhost:$API_PORT/health" >/dev/null 2>&1 && break
  sleep 0.5
done

# ── 5. Static file server ─────────────────────────────────────────────────────
# Instalar 'serve' si no está disponible
if ! command -v serve &>/dev/null; then
  warn "'serve' no encontrado, instalando globalmente..."
  npm install -g serve --silent
fi

log "Sirviendo frontend en http://localhost:$STATIC_PORT"
log "API en http://localhost:$API_PORT"
log ""
log "Pulsa Ctrl+C para detener."

# Servir con caché de activos (1 año para hashed assets, no-cache para index.html)
serve "$BUILD_DIR" \
  --listen $STATIC_PORT \
  --no-clipboard \
  --single \
  --cors \
  --config '{"headers":[{"source":"/**/*.@(js|css|jpg|jpeg|png|svg|woff2)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]},{"source":"/index.html","headers":[{"key":"Cache-Control","value":"no-cache, no-store, must-revalidate"}]}]}' &
STATIC_PID=$!

# ── 6. Cleanup ────────────────────────────────────────────────────────────────
trap "log 'Deteniendo...'; kill $API_PID $STATIC_PID 2>/dev/null; exit 0" INT TERM

wait $STATIC_PID
