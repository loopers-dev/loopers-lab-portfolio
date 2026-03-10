import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // === LOCAL IMAGE CACHE HEADERS (commented out - using Cloudinary) ===
    // === Uncomment when reverting to local /4k-earth/ images ===
    // {
    //   name: 'static-cache-headers',
    //   configureServer(server) {
    //     server.middlewares.use((req, res, next) => {
    //       if (req.url?.includes('/4k-earth/')) {
    //         res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    //       }
    //       next();
    //     });
    //   },
    // },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
