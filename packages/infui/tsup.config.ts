import { defineConfig } from 'tsup'
import { copyFileSync } from 'fs'
import vue from 'unplugin-vue/esbuild'

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    external: ['vue', '@phosphor-icons/vue'],
    noExternal: ['@infui/components'],
    esbuildPlugins: [vue()],
    onSuccess: async () => {
      // build 完成后把 theme CSS 复制进 dist
      copyFileSync('../theme/dist/index.css', 'dist/style.css')
      console.log('✅ style.css → dist/style.css')
    },
  },
])
