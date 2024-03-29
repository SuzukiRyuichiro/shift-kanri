import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // [vuestic-ui] Add alias for ~normalize.css.
  resolve: {
    alias: [
      { find: /^~(.*)$/, replacement: '$1' },
      { find: 'components', replacement: '/src/components' },
      { find: 'stores', replacement: '/src/stores' },
    ],
  },
})
