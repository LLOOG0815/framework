# LLOOG CLI

创建自定义框架的 CLI 工具。

## 安装

```bash
npm install -g lloog-cli
```

## 使用方法

```bash
lloog_cli create
```

### 选项

- `-o, --output <dir>` - 输出目录（默认: `./framework`）

## 示例

```bash
# 使用默认输出目录 ./framework
lloog_cli create

# 指定自定义输出目录
lloog_cli create -o myFramework
```

运行命令后：
1. 选择要创建的框架（React 或 Vue）
2. 输入输出目录（默认 `./framework`）
3. 等待框架创建完成

## 相关链接

- GitHub: https://github.com/LLOOG0815/framework
