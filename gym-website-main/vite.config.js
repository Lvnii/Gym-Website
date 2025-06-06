// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional, sets the frontend port
    proxy: {
      '/api': {
        target: 'http://localhost:5100',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
