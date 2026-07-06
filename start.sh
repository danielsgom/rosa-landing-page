#!/usr/bin/env bash
set -e

FRONTEND_PORT=5173
API_PORT=3001

# ── Kill any process occupying the required ports ─────────────────────────────
kill_port() {
  local port=$1
  local pids
  pids=$(lsof -ti tcp:"$port" 2>/dev/null || true)
  if [ -n "$pids" ]; then
    echo "  [kill] Liberando puerto $port (PID: $pids)"
    echo "$pids" | xargs kill -9 2>/dev/null || true
    sleep 0.5
  else
    echo "  [ok]   Puerto $port libre"
  fi
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Rosa VIP — Arrancando entorno de desarrollo"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "▶ Comprobando puertos..."
kill_port $API_PORT
kill_port $FRONTEND_PORT
echo ""

# ── Start API server in background ────────────────────────────────────────────
echo "▶ Arrancando API server (puerto $API_PORT)..."
node --env-file=.env.local server.dev.js &
API_PID=$!
echo "  PID: $API_PID"
sleep 1

# ── Verify API is up ──────────────────────────────────────────────────────────
if ! kill -0 "$API_PID" 2>/dev/null; then
  echo "  [error] El servidor API no pudo arrancar. Revisa los logs."
  exit 1
fi
echo "  [ok]   API lista en http://localhost:$API_PORT"
echo ""

# ── Start Vite frontend in foreground ─────────────────────────────────────────
echo "▶ Arrancando frontend Vite (puerto $FRONTEND_PORT)..."
echo ""

# On exit (Ctrl+C) kill the API process too
cleanup() {
  echo ""
  echo "▶ Deteniendo servidores..."
  kill "$API_PID" 2>/dev/null || true
  echo "  [ok]   Servidores parados"
  exit 0
}
trap cleanup INT TERM

npm run dev
