# 和服务端进行交互

## 前端请求流程

在 vue3-antd-admin 中，一个完整的前端 UI 交互到服务端处理流程是这样的：

1. UI 组件交互操作；
2. 调用统一管理的 api service 请求函数；
3. 使用封装的 request.js 发送请求；
4. 获取服务端返回；
5. 更新 data；

从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 @/services/modules 文件夹中，并且按照功能进行拆分模块，如：

```shell
services/modules/
  login.js
  ...
```

## request.ts

其中，`@/services/axios-interceptors.ts` 是基于 [axios ()](https://github.com/axios/axios)的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等 它封装了全局 `request拦截器`、`response拦截器`、`统一的错误处理`、`统一做了超时处理`、`baseURL`设置等。

## 一个请求示例

```ts
// services/modules/login.ts
import request from '@/services/axios-interceptors'
import { AxiosResponse } from 'axios'
import { LoginFrom } from '@/types/views/login'
import { ResponseData } from '@/types/api/public'
import { LoginSuccess, UserInfo, RouterData } from '@/types/api/login'
import url from '../url'

type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

/**
 * @desc: 登录
 * @param { Object } data 输入的账号密码
 */
export const login = (data: LoginFrom): ConfigType<LoginSuccess> => {
  return request({
    url: url.login,
    method: 'post',
    data
  })
}

// views/example/list
import { onMounted } from 'vue'
import * as api from '@/services/modules/login'
export default {
  setup: {
    const list = ref<any>()
    const listLoading = ref<boolean>(true)
    onMounted(() => {
      api.login(params).then(e => {
        ....
      }).catch(err => {
        ...
      })
    })
  }
}

```

## 设置多个 baseURL

我们可以通过[环境变量](https://vitejs.cn/guide/env-and-mode.html)设置多个baseURL，从而请求不同的 api 地址。

```shell
# .env.development
VITE_APP_BASE_API = '/dev-api' #注入本地 api 的根路径
VITE_APP_BASE_API2 = '/dev-api2' #注入本地 api2 的根路径

```

之后根据环境变量创建axios实例，让它具有不同的baseURL。

```ts
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

const service2 = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API2, // api2 的 base_url
  timeout: 5000 // request timeout
})

```

或者

```ts
export const fetchList = (params: any) : ConfigType<TableList> => {
  return request({
    url: baseUrl + '/article/list',
    method: 'get',
    params,
    baseURL: 'xxxx' // 直接通过覆盖的方式
  })
}
```