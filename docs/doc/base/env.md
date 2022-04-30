# 环境变量

vue3-antd-admin 是基于 `vite` 来进行构建的，所有的环境变量配置都是基础vite来实现和控制的。
[官方文档](https://vitejs.cn/guide/env-and-mode.html)

```shell
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

加载的环境变量也会通过 import.meta.env 暴露给客户端源码。

为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这个文件中：

```shell
DB_PASSWORD=foobar
VITE_SOME_KEY=123
```

## 构建相关

除了一些写在.env的环境变量之外，还有一些构建和部署相关的变量都是需要在vite.config.js中配置的。

你可以通过 `import.meta.env.MODE` 来执行判断环境，来设置不同的参数。

默认情况下，开发服务器 (dev 命令) 运行在 development (开发) 模式，而 build 以及 serve 命令则运行在 production (生产) 模式。

你可能希望有一个 “staging” (预发布|预上线) 模式，它应该具有类似于生产的行为，但环境变量与生产环境略有不同。
你可以通过传递 --mode 选项标志来覆盖命令使用的默认模式。例如，如果你想为我们假设的 staging 模式构建应用：

```shell
vite build --mode staging
```

为了使应用实现预期行为，我们还需要一个 `.env.staging` 文件：

```shell
# .env.staging
NODE_ENV=production
VITE_APP_TITLE=My App (staging)
```

现在，你的 staging 应用应该具有类似于生产的行为，但显示的标题与生产环境不同。