---
title: 消息条
---

# 消息条

`ISnackBar` 用于轻量反馈提示，支持自动关闭、动作按钮、语义色和位置控制。

## 示例

### 基础用法

:::demo
components/snack-bar/basic
:::

### 位置

:::demo
components/snack-bar/location
:::

### 队列服务

通过 `useSnackBarService()` 推送消息队列，并在应用根部挂载一个 `ISnackBarHost` 统一消费。

:::demo
components/snack-bar/queue-service
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 显示开关（支持 `v-model`） |
| `text` | `string` | — | 提示文本 |
| `tone` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 语义风格 |
| `location` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-center'` | 显示位置 |
| `timeout` | `number` | `3000` | 自动关闭时间（ms） |
| `actionLabel` | `string` | `''` | 动作按钮文案 |
| `closable` | `boolean` | `true` | 显示关闭按钮 |
| `persistent` | `boolean` | `false` | 禁止自动和手动关闭 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |
| `offset` | `number` | `0` | 堆叠偏移量（通常由 `ISnackBarHost` 内部控制） |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 开关变化 |
| `action` | — | 点击动作按钮 |
| `timeout` | — | 自动关闭时触发 |
| `close` | — | 手动关闭时触发 |

### 服务 API

| API | 说明 |
| --- | --- |
| `useSnackBarService(scope?).show(options)` | 推送一条消息到指定作用域队列 |
| `useSnackBarService(scope?).success/warning/error/info(text)` | 快捷推送语义消息 |
| `useSnackBarService(scope?).dismiss(id?)` | 移除当前或指定消息 |
| `useSnackBarService(scope?).clear()` | 清空指定作用域队列 |
| `ISnackBarHost` | 队列宿主组件，通常挂在应用根节点，可通过 `scope` 绑定队列 |

### ISnackBarHost 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `scope` | `string` | `'default'` | 绑定消息作用域 |
| `max` | `number` | `1` | 同时显示的最大消息数 |
| `gap` | `number` | `56` | 堆叠间距（px） |




