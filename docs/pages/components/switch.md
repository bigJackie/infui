---
title: 开关
---

# 开关

`ISwitch` 用于表达启用/关闭状态，适合设置面板中的布尔切换。

## 示例

### 基础用法

:::demo
components/switch/basic
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 开关状态（支持 `v-model`） |
| `label` | `string` | — | 标签文本 |
| `disabled` | `boolean` | `false` | 禁用 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 开关状态变化 |
| `change` | `value: boolean` | 变更回调 |

