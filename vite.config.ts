import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { getAllRoutes } from './src/utils/prerenderRoutes';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  ssgOptions: {
    includedRoutes: () => getAllRoutes(),
    formatting: 'none',
  },
});
