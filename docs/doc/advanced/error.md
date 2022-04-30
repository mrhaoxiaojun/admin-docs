# 错误处理

## 页面

404

页面级的错误处理由 vue-router 统一处理，所有匹配不到正确路由的页面都会进 404页面。

```ts
{ path: '/:pathMatch(.*)*', redirect: '/404' }
```

::: warning 

注意事项 这里有一个需要非常注意的地方就是 404 页面一定要最后加载，如果放在 constantRoutes 一同声明了 404 ，后面的所有页面都会被拦截到404
:::
401

在@/permission.js做了权限控制，所有没有权限进入该路由的用户都会被重定向到 401页面。

## 请求

项目里所有的请求都会走 `@/services/axios-interceptors.ts` 里面创建的的 axios 实例，它统一做了错误处理。
你可以在service.interceptors.response.use 拦截器之中根据自己的实际业务统一针对不同的状态码或者根据自定义 code 来做错误处理。如：

```ts
request.interceptors.response.use(response => {
  if (response.data.code === 200) {
    return response
  } else if (response.data.code === -401) {
    // 登录失效
    storage.remove('token')
    router.push({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } })
    return Promise.reject(response)
  } else {
    return Promise.reject(response)
  }
}, errorHandler)

```

因为所有请求返回的是promise，所以你也可以对每一个请求通过catch 错误，从而进行单独的处理

```ts
getInfo()
  .then(res => {})
  .catch(err => {
    xxxx
  })
```