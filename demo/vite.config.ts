import { join, resolve } from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // },
  resolve: {
    alias: [
      {
        find: /^@dummy\/(.+)$/,
        replacement: join(__dirname, '..', '$1', 'src'),
      },
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
})
