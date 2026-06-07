# 组件工作区（components）

所有 UI 组件源码工作区。

## 目录职责

- Vue 组件与 hooks：`src/`
- 组件总导出：`src/index.ts`
- 共享工具：`src/shared/`

## 构建

```bash
cd /Users/wangxinrui/WebstormProjects/infui
pnpm -C packages/components run build
```

## 维护建议

- 公共 API 变更后同步更新 `src/index.ts`
- 组件行为变更后同步补充 `test/components/*.test.ts`


