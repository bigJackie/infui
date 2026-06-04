---
title: 图标
---

# 图标

`IIcon` 是对 [Phosphor Icons](https://phosphoricons.com) 的薄封装，统一管理尺寸和风格，
颜色默认跟随父级文字色，无需额外配置。

## 安装

```bash
pnpm add @phosphor-icons/vue
```
## 示例

### 基础用法
按需引入图标组件，通过 `is` prop 传入。

:::demo
components/icon/basic
:::

### 尺寸
内置 `xs / sm / md / lg / xl` 五档语义尺寸，也可直接传数字（px）。

:::demo
components/icon/size
:::

### 风格
Phosphor 为每个图标提供六种风格，默认 `regular`。

:::demo
components/icon/weight
:::

### 颜色
默认 `currentColor`，图标色跟随父级文字色自动切换；也可通过 `color` prop 指定颜色。

:::demo
components/icon/color
:::

### 结合其他组件
在 `IListItem` 的 `prepend` slot 中使用，通过 `weight` 联动选中状态。

:::demo
components/icon/in-context
:::


## API

### IIcon 属性

| 属性名      | 类型                                                                | 默认值              | 说明             |
|----------|-------------------------------------------------------------------|------------------|----------------|
| `is`     | `Component`                                                       | —（必填）            | Phosphor 图标组件  |
| `size`   | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number`                  | `'md'`           | 尺寸，传数字时单位为 px  |
| `weight` | `'thin' \| 'light' \| 'regular' \| 'bold' \| 'fill' \| 'duotone'` | `'regular'`      | 图标风格           |
| `color`  | `string`                                                          | `'currentColor'` | 图标颜色，默认跟随父级文字色 |

### 尺寸对照

| size | px  |
|------|-----|
| xs   | 12  |
| sm   | 16  |
| md   | 20  |
| lg   | 24  |
| xl   | 32  |

