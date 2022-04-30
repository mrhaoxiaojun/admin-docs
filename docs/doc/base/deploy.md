# 构建和发布

## 构建

```shell
# 打包正式环境
npm run build

```

构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

如果需要自定义构建，比如指定 `dist` 目录等，则需要通过 [config](https://vitejs.cn/config/#build-outdir)的 build.outDir 进行配置。

## 线上部署

项目使用histroy路由模式，需要后台做相应配置。比如：当我们进行项目的主页的时候，一切正常，可以访问，但是当我们刷新页面或者直接访问路径的时候就会返回404，那是因为在history模式下，只是动态的通过js操作window.history来改变浏览器地址栏里的路径，并没有发起http请求，但是当我直接在浏览器里输入这个地址的时候，就一定要对服务器发起http请求，但是这个目标在服务器上又不存在，所以会返回404，怎么解决呢？我们现在可以把所有请求都转发到 "localhost:8080/bank/page/index.html"上就可以了。

nginx配置

```ts
server {
  listen  8080;
  server_name 0.0.0.0;
  location /h5 {
    root C:/base;
    index index.html;
    //下面这个是history配置关键
    try_files $uri $uri/ /h5/index.html;
  }
  location @router {
    rewrite ^.*$ /index.html last;
  }
}
```

apache配置

```shell
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /bank/page/index.html [L]
</IfModule>
```

## 路由前缀

有的时候我们的项目不一定会放在根目录，可能会在域名后加上路由前缀以示区分，这时候前端需要做一些配置支持。

情况一：放在根目录（前端无需配置）

```shell
www.abc.com/user/login
```

情况二：放在某一目录下 （前端需要配置）

```shell
www.abc.com/adm（前缀）/user/login
```

以上述 adm 前缀为例，需要做如下配置：

vite.config.ts

```ts
export default defineConfig({
  base: '/adm/',
})
```

@/router/index.ts

```ts
const router = createRouter({
  history: createWebHistory('/adm/'),
  routes: constantRouterMap
})
```

其中 `vite.config.ts` 配置部分为了能够访问到文件资源，不配置会导致css、js、图片引用路径错误。 `router/index.ts` 配置为了路由能够匹配的到。