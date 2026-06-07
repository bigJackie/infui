---
title: 快速开始
---

# 快速开始

本文档用于快速启动 InfUI monorepo 开发环境，并说明常用命令。

## 环境要求

- Node.js 20+
- pnpm 9+

## 安装依赖

```bash
cd /Users/wangxinrui/WebstormProjects/infui
pnpm install
```

## 常用命令

```bash
cd /Users/wangxinrui/WebstormProjects/infui
pnpm -s test --run
pnpm -s build
pnpm docs:dev
```

## 按 workspace 执行

```bash
cd /Users/wangxinrui/WebstormProjects/infui
pnpm -C packages/components run build
pnpm -C packages/composables run build
pnpm -C packages/infui run build
pnpm -C packages/theme run build
pnpm -C docs run dev
```
