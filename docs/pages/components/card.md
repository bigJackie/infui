---
title: 卡片
---

# 卡片

`ICard` 用于承载同一主题的信息块，支持标题、副标题、内容区与底部操作区。

## 示例

### 基础用法

:::demo
components/card/basic
:::

### 样式变体

:::demo
components/card/variants
:::

### 自定义插槽

:::demo
components/card/slots
:::

---

## API

### 属性

| 属性名        | 类型                 | 默认值     | 说明          |
|------------|--------------------|---------|-------------|
| `title`    | `string`           | `''`    | 卡片标题        |
| `subtitle` | `string`           | `''`    | 卡片副标题       |
| `text`     | `string`           | `''`    | 默认正文内容      |
| `outlined` | `boolean`          | `false` | 描边样式        |
| `elevated` | `boolean`          | `false` | 阴影样式        |
| `block`    | `boolean`          | `false` | 低代码场景下铺满父容器 |
| `width`    | `string \| number` | `-`     | 卡片宽度        |
| `height`   | `string \| number` | `-`     | 卡片高度        |

### 插槽

| 插槽名       | 参数 | 说明     |
|-----------|----|--------|
| `default` | -  | 自定义内容区 |
| `header`  | -  | 自定义头部  |
| `footer`  | -  | 自定义底部  |

