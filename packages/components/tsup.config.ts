import { defineConfig } from 'tsup'
import vue from 'unplugin-vue/esbuild'

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm', 'cjs'],
  dts: false,
  clean: true,
  external: ['vue', '@infui/theme', '@phosphor-icons/vue'],
  esbuildPlugins: [vue()],
})
