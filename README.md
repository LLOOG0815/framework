# 欢迎使用 React Router！

一个现代的、生产就绪的模板，用于使用 React Router 构建全栈 React 应用程序。

[![在 StackBlitz 中打开](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## 特性

- 🚀 服务端渲染
- ⚡️ 模块热替换 (HMR)
- 📦 资源打包和优化
- 🔄 数据加载和变更
- 🔒 默认使用 TypeScript
- 🎉 使用 TailwindCSS 进行样式设计
- 📖 [React Router 文档](https://reactrouter.com/)

## 快速开始

### 安装

安装依赖：

```bash
npm install
```

### 开发

启动带有 HMR 的开发服务器：

```bash
npm run dev
```

您的应用程序将在 http://localhost:5173 可访问。

## 为生产环境构建

创建生产构建：

```bash
npm run build
```

## 部署

### Docker 部署

使用 Docker 构建和运行：

```bash
docker build -t my-app .

# 运行容器
docker run -p 3000:3000 my-app
```

容器化的应用程序可以部署到任何支持 Docker 的平台，包括：

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### 自定义部署

如果您熟悉部署 Node 应用程序，内置的应用服务器已准备好用于生产环境。

确保部署 `npm run build` 的输出

```
├── package.json
├── package-lock.json (或 pnpm-lock.yaml 或 bun.lockb)
├── build/
│   ├── client/    # 静态资源
│   └── server/    # 服务端代码
```

## 样式

此模板已为您配置好了 Tailwind CSS，可提供简单的默认起始体验。您可以使用任何您喜欢的 CSS 框架。

---

使用 ❤️ 构建，基于 React Router。
