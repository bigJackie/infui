---
title: 按钮
---

# 按钮

`IButton` 是最基础的交互组件，支持五种视觉变体、五种语义颜色、三种尺寸及加载状态。

## 示例

### 变体

五种视觉变体覆盖不同强调层级。

:::demo
components/button/variant
:::

### 颜色

`color` 属性支持五种语义颜色，可与任意变体组合。

:::demo
components/button/color
:::

### 尺寸

:::demo
components/button/size
:::

### 图标

通过 `prepend` / `append` 插槽在按钮两侧插入图标。

:::demo
components/button/slot
:::

### 图标按钮

`icon-only` 让按钮变为正方形，适合纯图标场景；`rounded` + `icon-only` 可实现 FAB 风格。

:::demo
components/button/icon-only
:::

### 加载中

`loading` 为 `true` 时展示 spinner，同时阻断点击事件。

:::demo
components/button/loading
:::

### 禁用

:::demo
components/button/disabled
:::

### 块级

`block` 让按钮撑满父容器宽度。

:::demo
components/button/block
:::

---

## API

### 属性

| 属性名         | 类型                                                         | 默认值         | 说明                               |
|-------------|------------------------------------------------------------|-------------|----------------------------------|
| `variant`   | `'filled' \| 'outlined' \| 'tonal' \| 'text' \| 'rounded'` | `'filled'`  | 视觉变体                             |
| `color`     | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 语义颜色                             |
| `size`      | `'sm' \| 'md' \| 'lg'`                                     | `'md'`      | 尺寸                               |
| `disabled`  | `boolean`                                                  | `false`     | 禁用，阻断所有交互                        |
| `loading`   | `boolean`                                                  | `false`     | 加载中，显示 spinner，同时视同禁用            |
| `block`     | `boolean`                                                  | `false`     | 宽度撑满父容器                          |
| `icon-only` | `boolean`                                                  | `false`     | 图标按钮模式，宽高相等，无左右 padding          |
| `tag`       | `string`                                                   | `'button'`  | 根元素标签，可传 `'a'` / `'router-link'` |
| `width`     | `'string' \| 'number'`                                     | —           | 宽度，数字自动补 `px`                    |
| `height`    | `'string' \| 'number'`                                     | —           | 高度，数字自动补 `px`                    |


### 事件

| 事件名     | 参数              | 说明                               |
|---------|-----------------|----------------------------------|
| `click` | `e: MouseEvent` | 点击事件，`disabled` / `loading` 时不触发 |

### 插槽

| 插槽名       | 说明                           |
|-----------|------------------------------|
| `default` | 按钮文字内容                       |
| `prepend` | 左侧图标，`loading` 时被 spinner 替换 |
| `append`  | 右侧图标                         |
