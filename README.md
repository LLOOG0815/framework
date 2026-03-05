# vue

这个模板应该能帮助你开始使用 Vue 3 和 Vite 进行开发。

## 推荐的 IDE 设置

[VS Code](https://code.visualstudio.com/) + [Vue (官方)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## 推荐的浏览器设置

- 基于 Chromium 的浏览器（Chrome、Edge、Brave 等）：
  - [Vue.js 开发工具](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [在 Chrome 开发者工具中开启自定义对象格式化器](http://bit.ly/object-formatters)

## TypeScript 中 `.vue` 导入的类型支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们使用 `vue-tsc` 替换 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来让 TypeScript 语言服务识别 `.vue` 类型。

## 自定义配置

请参阅 [Vite 配置参考](https://vite.dev/config/)。

## 项目设置

```sh
pnpm install
```

### 编译和热重载以进行开发

```sh
pnpm dev
```

### 类型检查、编译和压缩以用于生产

```sh
pnpm build
```

### 使用 [ESLint](https://eslint.org/) 进行代码检查

```sh
pnpm lint
```