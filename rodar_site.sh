#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# SORAIA — Concierge Empresarial · Protótipo
# Inicia um servidor local para exibir o site ao cliente.
# Uso:  ./rodar_site.sh   →  abre em http://localhost:8080
# ─────────────────────────────────────────────────────────────
PORT="${1:-8080}"
cd "$(dirname "$0")"

if lsof -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1 \
   || (command -v ss >/dev/null && ss -ltn 2>/dev/null | grep -q ":$PORT "); then
  echo "⚠️  A porta $PORT já está em uso."
  read -rp "Abrir em outra porta? Informe (padrão 8090): " ALT
  PORT="${ALT:-8090}"
fi

echo "🜂  SORAIA — Concierge Empresarial"
echo "─────────────────────────────────────────────"
echo "✔ Servidor iniciado em:  http://localhost:$PORT"
echo "  Sença de detalhes: Ctrl+C para encerrar."
echo "─────────────────────────────────────────────"
echo "💡 Fica aberto enquanto o terminal estiver ativo."

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "http://localhost:$PORT" >/dev/null 2>&1 &
elif command -v open >/dev/null 2>&1; then
  open "http://localhost:$PORT" >/dev/null 2>&1 &
fi

python3 -m http.server "$PORT" --directory .
