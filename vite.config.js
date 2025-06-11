// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/rapidshyp': {
        target: 'https://api.rapidshyp.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/rapidshyp/, ''),
        logLevel: 'debug',
      },
    },
  },
});