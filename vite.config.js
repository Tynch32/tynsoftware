import { defineConfig } from 'vite';
import remix from '@remix-run/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [remix(), react()],
});
