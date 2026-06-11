---
title: 遮罩层
---

# 遮罩层

`IOverlay` 提供基础遮罩能力，负责显示层级、背景点击关闭、Esc 关闭等行为，
适合作为 `IDialog`、抽屉或自定义浮层的底层容器。

## 示例

### 基础用法

:::demo
components/overlay/basic
:::

### Persistent 模式

`persistent` 开启后，点击遮罩或按 `Esc` 不会关闭，只能由业务手动控制。

:::demo
components/overlay/persistent
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值     | 说明 |
| --- | --- |---------| --- |
| `modelValue` | `boolean` | `false` | 控制显示/隐藏（支持 `v-model`） |
| `persistent` | `boolean` | `false` | 点击遮罩或 Esc 时阻止关闭 |
| `scrim` | `boolean` | `true`  | 是否显示半透明遮罩背景 |
| `closeOnEsc` | `boolean` | `true`  | 是否监听 Esc 关闭 |
| `zIndex` | `number` | `301`   | 根层级 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 开关状态变化 |
| `click:outside` | `e: MouseEvent` | 点击遮罩触发 |
| `escape` | `e: KeyboardEvent` | 按下 Esc 触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 遮罩上的内容区 |

