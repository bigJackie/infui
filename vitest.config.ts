import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['test/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@jackiew/inf-ui': resolve(__dirname, './packages/infui/src/index.ts'),
      '@inf-ui/components': resolve(__dirname, './packages/components/src/index.ts'),
      '@inf-ui/composables': resolve(__dirname, './packages/composables/index.ts'),
    },
  },
})
