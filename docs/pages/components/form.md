---
title: 表单
---

# 表单

`IForm` 提供统一提交入口和规则校验能力，适合作为输入组件的容器。

## 示例

### 基础用法

:::demo
components/form/basic
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `Record<string, unknown>` | `{}` | 表单模型（支持 `v-model`） |
| `rules` | `Record<string, FormRule[]>` | `{}` | 字段校验规则 |
| `disabled` | `boolean` | `false` | 禁用整个表单 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: Record<string, unknown>` | 模型变更 |
| `validate` | `{ valid, errors }` | 校验完成 |
| `submit` | `{ valid, model, errors }` | 提交时触发 |
| `reset` | — | 重置时触发 |

### 暴露方法

| 方法名 | 说明 |
| --- | --- |
| `validate()` | 手动触发校验 |
| `reset()` | 重置模型和错误 |

### FormRule

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `required` | `boolean` | 是否必填 |
| `message` | `string` | 错误消息 |
| `validator` | `(value, model) => boolean \| string \| Promise<boolean \| string>` | 自定义校验器 |

