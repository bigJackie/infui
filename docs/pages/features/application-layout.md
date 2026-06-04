---
title: 应用布局
---

# 应用布局

`INF-UI` 通过 `IApp` `IHeader` `IAside` `IContainer` `IMain` `IFooter`
六个组件自由组合，覆盖常见的 PC 和移动端布局, 快速构建应用页面。

## 组件职责

| 组件           | 职责                                       |
|--------------|------------------------------------------|
| `IApp`       | 根容器，提供主题上下文                              |
| `IContainer` | 布局容器，通过 `app` `vertical` `absolute` 控制行为 |
| `IHeader`    | 顶部导航栏                                    |
| `IMain`      | 主内容区，负责内部滚动和 elevation 联动                |
| `IAside`     | 侧边栏，支持 mini / float 模式                   |
| `IFooter`    | 底部，支持 `fixed` 固定                         |

## 常见布局

### 桌面端布局

#### 布局 1：Header 全宽 · Footer 局部（overflow）
Aside 和右侧内容并排，Footer 只在内容区底部。
:::demo
components/application/layout_1
:::

#### 布局 2：Header 全宽 · Footer 全宽（overflow）
Footer 横跨整个底部，包括 Aside 下方。
:::demo
components/application/layout_2
:::

#### 布局 3：Aside 全高 · Header 右侧 · Footer 局部
Aside 从顶到底，Header 和 Footer 仅在右侧内容区顶部。
:::demo
components/application/layout_3
:::

#### 布局 4：Aside 全高 · Header 右侧 · Footer 全宽
Header 在右侧内容区顶部，Footer 横跨整个底部。
:::demo
components/application/layout_4
:::

### 移动端布局
#### Aside 浮层模式
移动端 Aside 以 `float` 模式渲染，不占据文档流，点击触发展开/收起。
:::demo
components/application/layout_mobile
:::

### Footer Fixed 变体
以上所有布局的 Footer 均支持 ⁠fixed 属性，固定在视口底部：
```vue
<IFooter fixed>© 2026 inf-ui</IFooter>
```

## 应用布局 API

### IApp 属性

| 属性名   | 类型                  | 默认值       | 说明                     |
|-------|---------------------|-----------|------------------------|
| theme | `'light' \| 'dark'` | `'light'` | 初始主题，优先读取 localStorage |

### IApp 插槽

| 插槽名     | 说明        |
|---------|-----------|
| default | 布局组件根容器内容 |

### IApp 提供（provide）

| key         | 类型                       | 说明   |
|-------------|--------------------------|------|
| theme       | `Ref<'light' \| 'dark'>` | 当前主题 |
| toggleTheme | `() => void`             | 切换主题 |

---

### IHeader 属性

| 属性名    | 类型       | 默认值  | 说明                                             |
|--------|----------|------|------------------------------------------------|
| height | `number` | `64` | 顶部导航栏高度（px），同时注入 `--i-header-height` 到 `:root` |

### IHeader 插槽

| 插槽名     | 说明                  |
|---------|---------------------|
| left    | 左侧区域，常放 Logo / 汉堡按钮 |
| default | 中间区域，常放导航链接         |
| right   | 右侧区域，常放操作按钮         |

---

### IAside 属性

| 属性名       | 类型        | 默认值     | 说明                 |
|-----------|-----------|---------|--------------------|
| width     | `number`  | `256`   | 展开时侧边栏宽度（px）       |
| miniWidth | `number`  | `64`    | 收起时侧边栏宽度（px）       |
| mini      | `boolean` | `false` | 是否初始为收起状态          |
| float     | `boolean` | `false` | 浮层模式，不占据文档流，常用于移动端 |

### IAside 插槽

| 插槽名     | 说明              |
|---------|-----------------|
| header  | 侧边栏顶部，有内容时显示分割线 |
| default | 侧边栏主体内容         |
| footer  | 侧边栏底部，有内容时显示分割线 |

### IAside 暴露（expose）

| 名称     | 类型             | 说明      |
|--------|----------------|---------|
| isMini | `Ref<boolean>` | 当前是否收起  |
| toggle | `() => void`   | 切换收起/展开 |
| open   | `() => void`   | 展开      |
| close  | `() => void`   | 收起      |

### IAside 事件

| 事件名           | 参数               | 说明                          |
|---------------|------------------|-----------------------------|
| `update:mini` | `value: boolean` | mini 状态变化，支持 `v-model:mini` |
| `change`      | `value: boolean` | mini 状态变化回调                 |

---

### IContainer 属性

| 属性名      | 类型        | 默认值     | 说明                                |
|----------|-----------|---------|-----------------------------------|
| vertical | `boolean` | `false` | 内部子元素垂直排列（flex-direction: column） |
| app      | `boolean` | `false` | 填满剩余空间，作为主布局容器                    |
| absolute | `boolean` | `false` | 绝对定位填满父容器，用于嵌套子布局                 |

### IContainer 插槽

| 插槽名     | 说明     |
|---------|--------|
| default | 布局容器内容 |

---

### IMain 插槽

| 插槽名     | 说明                               |
|---------|----------------------------------|
| default | 主内容区，支持内部滚动并联动 IHeader elevation |

---

### IFooter 属性

| 属性名    | 类型        | 默认值     | 说明                                         |
|--------|-----------|---------|--------------------------------------------|
| height | `number`  | `48`    | 底部高度（px）                                   |
| fixed  | `boolean` | `false` | 固定在视口底部，同时注入 `--i-footer-height` 到 `:root` |

### IFooter 插槽

| 插槽名     | 说明   |
|---------|------|
| default | 底部内容 |

---

