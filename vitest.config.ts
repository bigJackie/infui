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
      'inf-ui': resolve(__dirname, './packages/infui/src/index.ts'),
      '@infui/components': resolve(__dirname, './packages/components/src/index.ts'),
    },
  },
})
