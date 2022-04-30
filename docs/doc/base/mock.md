# 模拟数据

数据交互是前端开发中必不可少一环，目前使用mockJs进行数据模拟，但带来遍历的的同时也带来的弊端，在控制台无法清楚看到http请求，且会拦截所有的请求。

是否使用mock数据，可以在全局配置(src/config/setting.config.ts)中设置 **mockOnlineData**

后面考虑使用nodeJs的koa2框架做为后端数据源，这样保证了每次交互都是一个条真实的http请求


<!-- ## 添加新数据

git克隆下来的纯前端项目不包含node服务端代码，启动前端项目之所以能够访问基础接口，是因为前端设置了vite代理进行了跨域请求。当然你可以去克隆[node服务端代码 ()](https://github.com/llyyayx/admin-nodeServe)，本地运行 `npm run start` 启动，此时修改前端代理只本地服务端端口 `127.0.0.1:服务端端口`

**克隆服务端并启动**

```shell
// 克隆代码
git clone git@github.com:llyyayx/admin-nodeServe.git

// 进入项目文件夹
cd admin-nodeServe

// 安装软件包
npm install

// 运行
npm run start

```

**修改前端代理**

```ts
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:服务端端口',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/api')
    }
  }
}

```

**添加数据**

进入 `router/index.js` 添加

```ts
// 以登陆为例
router.post('/login', async (ctx, next) => {
  const { userName, userPwd } =  ctx.request.body
  if (userName === 'admin' && userPwd === '123456') {
    ctx.body = {
      code: 200,
      token: 'Token123456',
      message: '登陆成功'
    }
  } else {
    ctx.body = {
      code: 101,
      message: '账号或密码错误'
    }
  }
})

```

## 修改服务端端口号

进入 `bin/www` 修改

```shell
// 修改8011即可
var port = normalizePort(process.env.PORT || '8011');

```

## 多个server

目前项目只启动了一个后端服务，当然你也可以有自己其它的服务或者代理接口。可以一部分接口走这个服务，另一些接口走另一个服务。只需要将它们分别设置不同的的baseURL即可。
之后根据设置的 url 规则在 vite.config.ts 中配置多个 proxy 。
[相关文档()](https://vitejs.cn/config/#server-proxy)

## Swagger

在公司的项目中通常使用 [swagger ()](https://swagger.io/)， 由后端来模拟业务数据。 `swagger` 是一个 REST APIs 文档生成工具，它从代码注释中自动生成文档，可以跨平台，开源，支持大部分语言，社区好，总之非常不错，强烈推荐。

## 说明

模拟数据只手动配置了一些假的数据，没有在node端配置数据库相关的数据源，毕竟之后终究还是要更换成后端人员的接口，这里只是为了保证前端程序能够跑起来。使用node提供数据也可以保证数据的灵活性。 -->