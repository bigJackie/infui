import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createHighlighter } from 'shiki'
import type { Plugin } from 'vite'

let highlighter: Awaited<ReturnType<typeof createHighlighter>>

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['catppuccin-latte', 'catppuccin-mocha'],
      langs: ['vue', 'ts', 'bash', 'scss'],
    })
  }
  return highlighter
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const EXAMPLES_DIR = resolve(__dirname, '../../examples')

function injectScriptSetup(code: string, imports: string[]): string {
  const scriptBlock = `<script setup>\n${imports.join('\n')}\n</script>`

  // 已有 <script setup>，直接往里插 import
  if (code.includes('<script setup>')) {
    return code.replace('<script setup>', `<script setup>\n${imports.join('\n')}`)
  }

  // 有 frontmatter，注入到 frontmatter 之后
  const frontmatterRE = /^(---\n[\s\S]*?\n---\n)/
  if (frontmatterRE.test(code)) {
    return code.replace(frontmatterRE, `$1\n${scriptBlock}\n`)
  }

  // 没有 frontmatter，直接放开头
  return `${scriptBlock}\n\n${code}`
}

export function demoPlugin(): Plugin {
  return {
    name: 'inf-ui:demo',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return null

      const demoRE = /:::demo\s+([^\n:][^\n]*?)\s*:::|:::demo\s*\n([^\n]+)\n:::/g
      if (!demoRE.test(code)) return null
      demoRE.lastIndex = 0

      const hl = await getHighlighter()
      const imports: string[] = []
      let counter = 0

      // replace 不支持 async，先收集所有 match 再统一处理
      const matches: { full: string; filePath: string }[] = []
      let m: RegExpExecArray | null
      while ((m = demoRE.exec(code)) !== null) {
        matches.push({
          full: m[0],
          filePath: (m[1] ?? m[2]).trim(),
        })
      }

      let transformed = code

      for (const { full, filePath } of matches) {
        const fullPath = resolve(EXAMPLES_DIR, `${filePath}.vue`)

        if (!existsSync(fullPath)) {
          console.warn(`[demo plugin] 文件不存在: ${fullPath}`)
          transformed = transformed.replace(
            full,
            `<div class="demo-error">⚠️ 示例不存在：${filePath}.vue</div>`,
          )
          continue
        }

        const source = readFileSync(fullPath, 'utf-8')
        const compName = `InfDemo${counter++}`
        imports.push(`import ${compName} from '@examples/${filePath}.vue'`)

        // 高亮 → encode，DemoBlock 收到的是带样式的 HTML 字符串
        const highlighted = hl.codeToHtml(source, {
          lang: 'vue',
          themes: {
            light: 'catppuccin-latte',
            dark: 'catppuccin-mocha',
          },
        })

        transformed = transformed.replace(
          full,
          `<DemoBlock source="${encodeURIComponent(source)}" highlighted="${encodeURIComponent(highlighted)}"><${compName} /></DemoBlock>`,
        )
      }

      if (!imports.length) {
        return null
      }

      return injectScriptSetup(transformed, imports)
    },
  }
}
