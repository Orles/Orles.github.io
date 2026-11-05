import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src/resources'),
      // Vite работает с корнем в _site, поэтому /src/... указывает на исходники
      '/src': resolve(import.meta.dirname, 'src'),
    },
  },

  server: {
    hmr: {
      // Чтобы не конфликтовать с другим запущенным проектом на этом шаблоне
      port: 24679,
    },
  },
});
