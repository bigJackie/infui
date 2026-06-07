# 聚合包工作区（infui）

面向使用方的最终包：`@jackiew/inf-ui`。

## 目录职责

- 聚合导出 components 与 composables
- 提供插件安装入口（`InfUI.install`）
- 提供样式入口（`./style`）

## 构建

```bash
cd /Users/wangxinrui/WebstormProjects/infui
pnpm -C packages/infui run build
```

## 维护建议

- 组件导出变更后同步检查 `src/index.ts`
- 保持 install 过滤逻辑严格，避免误注册非组件导出


