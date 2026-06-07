export interface CardProps {
  /** 卡片标题 */
  title?: string
  /** 卡片副标题 */
  subtitle?: string
  /** 卡片正文（未使用默认插槽时展示） */
  text?: string
  /** 是否展示描边样式 */
  outlined?: boolean
  /** 是否展示阴影样式 */
  elevated?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
  /** 卡片宽度 */
  width?: string | number
  /** 卡片高度 */
  height?: string | number
}

