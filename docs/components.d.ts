import type {
  IApp,
  IHeader,
  IAside,
  IContainer,
  IMain,
  IFooter,
  IList,
  IListItem,
  IListGroup,
  IIcon,
  IButton,
} from '@jackiew/inf-ui'
import type LayoutPreview from './.vitepress/theme/components/LayoutPreview.vue'
import type DemoBlock from './.vitepress/theme/components/DemoBlock.vue'

declare module 'vue' {
  export interface GlobalComponents {
    IApp: typeof IApp
    IHeader: typeof IHeader
    IAside: typeof IAside
    IContainer: typeof IContainer
    IMain: typeof IMain
    IFooter: typeof IFooter
    IList: typeof IList
    IListItem: typeof IListItem
    IListGroup: typeof IListGroup
    IIcon: typeof IIcon
    IButton: typeof IButton
    LayoutPreview: typeof LayoutPreview
    DemoBlock: typeof DemoBlock
  }
}

export {}
