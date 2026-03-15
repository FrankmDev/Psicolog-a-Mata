#!/bin/bash
# Script para matar procesos huérfanos de Astro

echo "Buscando procesos de Astro..."

# Matar procesos de astro dev
astro_pids=$(ps aux | grep "astro dev" | grep -v grep | awk '{print $2}')
if [ -n "$astro_pids" ]; then
    echo "Matando procesos de Astro: $astro_pids"
    kill -9 $astro_pids 2>/dev/null
fi

# Matar procesos de esbuild
esbuild_pids=$(ps aux | grep "esbuild" | grep -v grep | awk '{print $2}')
if [ -n "$esbuild_pids" ]; then
    echo "Matando procesos de esbuild: $esbuild_pids"
    kill -9 $esbuild_pids 2>/dev/null
fi

# Matar procesos de bun relacionados con astro
bun_pids=$(ps aux | grep "bun.*astro" | grep -v grep | awk '{print $2}')
if [ -n "$bun_pids" ]; then
    echo "Matando procesos de bun: $bun_pids"
    kill -9 $bun_pids 2>/dev/null
fi

# Limpiar caché
echo "Limpiando caché..."
rm -rf .astro node_modules/.vite node_modules/.astro 2>/dev/null

echo "Listo. Puerto 4321 liberado."
echo ""
echo "Verificando puerto 4321:"
lsof -i :4321 2>/dev/null || echo "Puerto 4321 está libre"
