# 组合式函数工作区（composables）

可复用的 Vue 组合式函数。

## 目录职责

- 公共导出入口：`index.ts`
- 当前示例能力：`useBreakpoint`

## 构建

```bash
cd /Users/wangxinrui/WebstormProjects/infui
pnpm -C packages/composables run build
```

## 维护建议

- 在 Vue 运行时假设内尽量保持通用
- 公共 composable 统一从 `index.ts` 导出


