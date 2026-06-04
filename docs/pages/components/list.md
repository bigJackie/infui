---
title: 列表
---

# 列表

`IList` `IListItem` `IListGroup` 三个组件自由组合，支持纯展示、单选、多选、嵌套分组等场景。

## 组件职责

| 组件           | 职责                                 |
|--------------|------------------------------------|
| `IList`      | 列表根容器，管理选中状态，提供 `v-model` 支持       |
| `IListItem`  | 列表条目，支持 `title` / `subtitle` 及插槽扩展 |
| `IListGroup` | 可折叠分组，支持嵌套、`singleGroup` 协调        |

## 示例
### 基础用法
最简用法，直接传 `title` prop 渲染条目。

:::demo 
components/list/basic
:::

### 两行列表
`subtitle` prop 渲染副标题，适合消息列表、联系人列表等场景。

:::demo
components/list/subtitle
:::

### 前 / 后插槽扩展
通过 `prepend` / `append` 插槽在条目两侧插入图标、角标等内容。

:::demo
components/list/prepend-append
:::

## 单选

传入 `v-model` 开启选中模式，`mandatory` 保证始终有一项被选中。

:::demo
components/list/selection
:::

## 多选

添加 `multiple` prop 切换为多选模式，`mandatory` 时至少保留一项选中。

:::demo
components/list/multiple
:::

## 嵌套列表

`IListGroup` 支持多级嵌套，配合 `single-group` 可限制同级只展开一个分组。

:::demo
components/list/nested
:::

## 手风琴（singleGroup）

`single-group` 控制同级 `IListGroup` 互斥展开；`independent` 让某个分组脱离协调，始终独立控制。

:::demo
components/list/single-group
:::

## 禁用状态

支持 item 级别和 group 级别的禁用。

:::demo
components/list/disabled
:::

---

## API

### IList 属性

| 属性名           | 类型                   | 默认值     | 说明                        |
|---------------|----------------------|---------|---------------------------|
| `modelValue`  | `string \| string[]` | —       | 当前选中值，支持 `v-model`        |
| `multiple`    | `boolean`            | `false` | 多选模式                      |
| `mandatory`   | `boolean`            | `false` | 强制保留选中：单选至少一项，多选至少一项      |
| `singleGroup` | `boolean`            | `false` | 同级 `IListGroup` 同时只允许展开一个 |

### IList 事件

| 事件名                 | 参数                          | 说明                  |
|---------------------|-----------------------------|---------------------|
| `update:modelValue` | `value: string \| string[]` | 选中状态变化，配合 `v-model` |

### IList 插槽

| 插槽名     | 说明                            |
|---------|-------------------------------|
| default | 放置 `IListItem` / `IListGroup` |

---

### IListItem 属性

| 属性名        | 类型        | 默认值     | 说明                                      |
|------------|-----------|---------|-----------------------------------------|
| `value`    | `string`  | —       | 选中追踪 key，有值时参与 `IList` 的选中逻辑            |
| `title`    | `string`  | —       | 主标题，与 `default` slot 二选一                |
| `subtitle` | `string`  | —       | 副标题，显示在主标题下方                            |
| `disabled` | `boolean` | `false` | 禁用，阻断所有交互                               |
| `active`   | `boolean` | `false` | 强制激活态，不依赖 `value` 选中机制                  |
| `tag`      | `string`  | `'li'`  | 根元素标签，对接路由时可传 `'a'` / `'router-link'` 等 |

### IListItem 插槽

| 插槽名       | 说明                                    |
|-----------|---------------------------------------|
| `default` | 主内容区，优先级高于 `title` / `subtitle` props |
| `prepend` | 左侧区域，常放图标、头像                          |
| `append`  | 右侧区域，常放角标、操作按钮                        |

---

### IListGroup 属性

| 属性名           | 类型        | 默认值     | 说明                                     |
|---------------|-----------|---------|----------------------------------------|
| `title`       | `string`  | —       | 分组标题，与 `title` slot 二选一                |
| `defaultOpen` | `boolean` | `false` | 初始是否展开                                 |
| `disabled`    | `boolean` | `false` | 禁用，header 不可点击                         |
| `independent` | `boolean` | `false` | 独立模式，不参与父级 `singleGroup` 协调，始终自主控制展开状态 |

### IListGroup 插槽

| 插槽名       | 说明                                    |
|-----------|---------------------------------------|
| `default` | 分组内容，放置 `IListItem` / 嵌套 `IListGroup` |
| `title`   | 自定义标题区，优先级高于 `title` prop             |
| `prepend` | header 左侧区域，常放图标                      |
| `arrow`   | 自定义展开箭头，默认为 CSS 三角                    |

