import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import DemoBlock from './components/DemoBlock.vue'
import HomePage from './components/HomePage.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import LayoutPreview from './components/LayoutPreview.vue'
import { InfUI } from '@jackiew/inf-ui'
import './styles/overrides.scss'
import '@inf-ui/theme/src/index.scss'
import 'virtual:inf.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(InfUI)
    app.component('DemoBlock', DemoBlock)
    app.component('HomePage', HomePage)
    app.component('NotFoundPage', NotFoundPage)
    app.component('LayoutPreview', LayoutPreview)
  },
} satisfies Theme
