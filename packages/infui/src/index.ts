export * from '@inf-ui/components'
export { useGlobalConfig } from './global.ts'
export * from '../../composables'

import type { App } from 'vue'
import * as components from '@inf-ui/components'
export * from '@inf-ui/components'

// 全局注册插件：app.use(InfUI)
export const InfUI = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      // 只注册组件（以 I 开头的对象），跳过 useXxx / type 等导出
      if (name.startsWith('I') && typeof component === 'object' && component !== null) {
        app.component(name, component)
      }
    })
  },
}

export default InfUI
