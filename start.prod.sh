#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
#  Rosa XOXO — Producción en Ubuntu VPS
#  Uso:   ./start.prod.sh          → levantar / actualizar
#         ./start.prod.sh stop     → detener todo
#         ./start.prod.sh logs     → ver logs en tiempo real
#  Requisitos: node >=20, npm, pm2 (se instala automáticamente)
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

ENV_FILE=".env.local"
API_PORT=3001
STATIC_PORT=4173
BUILD_DIR="dist"
APP_NAME="rosa"

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'
log()  { echo -e "${GREEN}[rosa]${NC} $*"; }
warn() { echo -e "${YELLOW}[warn]${NC} $*"; }
err()  { echo -e "${RED}[error]${NC} $*"; exit 1; }
info() { echo -e "${CYAN}[info]${NC} $*"; }

# ── Comandos secundarios ──────────────────────────────────────────────────────
if [[ "${1:-}" == "stop" ]]; then
  log "Deteniendo procesos PM2 de Rosa..."
  pm2 delete "${APP_NAME}-api" 2>/dev/null || true
  log "Detenido."
  exit 0
fi

if [[ "${1:-}" == "logs" ]]; then
  npx pm2 logs --lines 100
  exit 0
fi

# ── 1. Requisitos ─────────────────────────────────────────────────────────────
NODE_VER=$(node -e "process.stdout.write(process.versions.node.split('.')[0])" 2>/dev/null || echo "0")
(( NODE_VER >= 20 )) || err "Se requiere Node.js >= 20. Versión actual: $(node -v). Instala con: curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt install -y nodejs"

[[ -f "$ENV_FILE" ]] || err "Falta $ENV_FILE. Cópialo de .env.example y rellena tus claves de Stripe."

# Cargar variables (compatible Ubuntu + macOS)
set -o allexport
# shellcheck disable=SC1090
source "$ENV_FILE"
set +o allexport

[[ -z "${STRIPE_SECRET_KEY:-}" ]]     && err "STRIPE_SECRET_KEY no definida en $ENV_FILE"
[[ -z "${STRIPE_WEBHOOK_SECRET:-}" ]] && err "STRIPE_WEBHOOK_SECRET no definida en $ENV_FILE"
[[ -z "${STRIPE_PRICE_MONTHLY:-}" ]]  && err "STRIPE_PRICE_MONTHLY no definida en $ENV_FILE"
[[ -z "${STRIPE_PRICE_ANNUAL:-}" ]]   && err "STRIPE_PRICE_ANNUAL no definida en $ENV_FILE"

# ── 2. Instalar dependencias ──────────────────────────────────────────────────
log "Instalando dependencias..."
npm install

# ── 3. PM2 ───────────────────────────────────────────────────────────────────
if ! command -v pm2 &>/dev/null; then
  warn "PM2 no encontrado, instalando globalmente..."
  npm install -g pm2 --silent
fi

# ── 4. Build optimizado ───────────────────────────────────────────────────────
log "Compilando para producción..."
NODE_ENV=production npx vite build \
  --logLevel warn
log "Bundle listo en ./$BUILD_DIR ($(du -sh "$BUILD_DIR" | cut -f1))"

# ── 5. serve para archivos estáticos ─────────────────────────────────────────
# nginx sirve el dist/ directamente — no necesitamos un proceso Node para esto

# ── 6. Detener instancias previas ─────────────────────────────────────────────
log "Deteniendo instancias anteriores (si las hay)..."
pm2 delete "${APP_NAME}-api" 2>/dev/null || true

# Liberar puertos con fuser (Ubuntu) o lsof (macOS)
if command -v fuser &>/dev/null; then
  fuser -k "${API_PORT}/tcp" 2>/dev/null || true
elif command -v lsof &>/dev/null; then
  lsof -ti tcp:"$API_PORT" 2>/dev/null | xargs kill -9 2>/dev/null || true
fi

# ── 7. Arrancar API con PM2 ───────────────────────────────────────────────────
log "Arrancando API (PM2)..."
pm2 start server.dev.js \
  --name "${APP_NAME}-api" \
  --node-args "--env-file=${ENV_FILE}" \
  --env NODE_ENV=production \
  --max-memory-restart 200M \
  --restart-delay 3000

# ── 8. Guardar estado PM2 ────────────────────────────────────────────────────
pm2 save

# ── 9. Estado final ───────────────────────────────────────────────────────────
echo ""
log "✅ Rosa XOXO en producción"
info "   API      → http://localhost:$API_PORT"
info "   Frontend → nginx sirve dist/ directamente"
info ""
info "   Asegúrate de que /etc/nginx/sites-available/rosasabiabot"
info "   apunta el root al directorio dist/ (ver instrucciones)"
info ""
info "   Comandos útiles:"
info "     ./start.prod.sh logs   → ver logs"
info "     ./start.prod.sh stop   → detener"
info "     pm2 monit              → monitor en tiempo real"

