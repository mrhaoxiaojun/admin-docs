# 开箱即用 🎁 看这里！

一篇文章迅速使用 `vue3` + `TypeScript` + `Vite`的中后台框架, 该框架代码极简只需要简单配置即可 0 门槛使用，请按照下面说明操作。

## 安装下载

```shell
# 克隆项目
git clone https://github.com/mrhaoxiaojun/vue3-antd-admin.git

# 进入项目目录
cd vue3-antd-admin

# 安装依赖
npm install

# 本地开发 启动项目
npm run dev
```

如果依赖包下载太慢，请切换至国内镜像源

```shell
# 设置淘宝镜像代理
npm install --registry=https://registry.npm.taobao.org

```

至此前端项目启动完成，你可以进行页面开发了，但是如果你想添加页面或者进行自己项目的 api 调用，你需要切换到自己项目 api 地址上去，请阅读步骤二。

## 接口配置

操作完第一步你的前端页面已经可以正常访问打开了，但是这里项目依赖 api 默认是本科mock数据，你需要提供如下必须的接口与设置代理到自己 api 地址上。


::: warning 我们前端自己动手丰衣足食

如果你暂时不能得到后台人员的支持，可以使用框架提供mock支持，这样会更方便，有兴趣的可以自己用node搭个服务来支持
:::

**必需的接口**

所有必须接口配置在 `@/services/modules/login.ts` 中，你可以修改必须接口的 url，但是尽量不要去修改接口 ts 类型规范！

`?` 表示可选字段

### **1. 登陆接口**

[post]

url

```shell
/login
```

接口规范

```ts
// 提交给后台的数据格式
export type LoginFrom = {
  username: string | undefined;
  password: string | undefined;
};
// 要求后台返回的数据格式
export type LoginSuccess = {
  code: number;
  message: string;
  data?: T;
  token: string;
};

```

返回数据示例

```js
// 登陆失败
{code: 101, message: "账号或密码错误"}
// 登陆成功
{code: 200, token: "Token123456", message: "登陆成功"}

```

### **2. 获取用户信息接口**

[get]

url

```shell
/info

```

接口规范

```ts
// 提交给后台的数据格式
无，header中token验证身份
// 要求后台返回的数据格式
export type UserInfo = {
  code: number,
  message: string,
  data?: T,
  info: {
    // token
    token: string,
    // 用户名
    name: string,
    // 头像
    avatar: string,
    // 权限
    roles: string[],
  }
}

```

返回数据示例

```ts
{
  code: 200
  info: {name: "请相信光", avatar: "https://img2.baidu.com/it/u=1342701199,2079596281&fm=26&fmt=auto&gp=0.jpg",…}
  message: "信息返回成功"
}

```

### **3. 菜单接口**

用户动态设置路由页面

[get]

url

```shell
/menu
```

接口规范

```ts
// 提交给后台的数据格式
无，header中token验证身份
// 要求后台返回的数据格式
export type RouterData = {
  code: number,
  message: string,
  data: [
    {
       // 菜单id
      id: number,
      // 路由地址
      path: string,
      // 菜单名称
      name: string,
      // 相对于views文件夹的模板文件的相对位置
      component: string,
      // 路由名称 (必须唯一)
      key: string,
      // 重定向地址
      redirect?: string,
      // 菜单图标
      icon?: string,
      // 菜单子集，页面级无需配置
      children?: RouterObj[],
      // 父级id
      pid?: number,
      // 是否隐藏页面/菜单，默认false不隐藏
      hidden?: boolean,
      // 是否缓存页面，默认false不缓存
      keepAlive?: boolean
    }
  ]
}

```

返回数据示例

```json
{
    "code": 200,
    "data": [
        {
            "id": 1,
            "pid": 0,
            "name": "基础模板",
            "path": "/",
            "redirect": "/element/icon",
            "component": "BasicLayout",
            "icon": "AppleOutlined",
            "key": "layout",
            "children": [
                {
                    "id": 2,
                    "pid": 1,
                    "name": "好用组件",
                    "path": "/element",
                    "redirect": "/element/icon",
                    "component": "RouteView",
                    "icon": "ChromeOutlined",
                    "key": "element",
                    "children": [
                        {
                            "id": 10,
                            "pid": 2,
                            "name": "图标组件",
                            "path": "/element/icon",
                            "redirect": "",
                            "component": "/element/icon",
                            "icon": "",
                            "key": "el_icon",
                            "keepAlive": true
                        },
                        {
                            "id": 11,
                            "pid": 2,
                            "name": "表格组件",
                            "path": "/element/table",
                            "redirect": "",
                            "component": "/element/table",
                            "icon": "",
                            "key": "el_table"
                        },
                        {
                            "id": 12,
                            "pid": 2,
                            "name": "详情",
                            "path": "/element/detail",
                            "redirect": "",
                            "component": "/element/detail",
                            "icon": "",
                            "key": "detail",
                            "hidden": true
                        }
                    ]
                },
                {
                    "id": 3,
                    "pid": 1,
                    "name": "合作打赏",
                    "path": "/team",
                    "redirect": "/team/optionc",
                    "component": "RouteView",
                    "icon": "WechatOutlined",
                    "key": "team",
                    "children": [
                        {
                            "id": 12,
                            "pid": 3,
                            "name": "加入维护",
                            "path": "/team/join",
                            "redirect": "",
                            "component": "/team/join",
                            "icon": "",
                            "key": "join"
                        },
                        {
                            "id": 13,
                            "pid": 3,
                            "name": "赞助支持",
                            "path": "/team/sponsor",
                            "redirect": "",
                            "component": "/team/sponsor",
                            "icon": "",
                            "key": "sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "pid": 0,
            "name": "更新日志",
            "path": "/update",
            "redirect": "/update/issue",
            "component": "BasicLayout",
            "icon": "AppleOutlined",
            "key": "lan",
            "children": [
                {
                    "id": 14,
                    "pid": 4,
                    "name": "现存问题",
                    "path": "/update/issue",
                    "redirect": "",
                    "component": "/update/issue",
                    "icon": "",
                    "key": "issue",
                    "keepAlive": true
                },
                {
                    "id": 15,
                    "pid": 4,
                    "name": "更新记录",
                    "path": "/update/log",
                    "redirect": "",
                    "component": "/update/log",
                    "icon": "",
                    "key": "log"
                }
            ]
        }
    ],
    "message": "信息返回成功"
}

```

### **4. 退出登录接口**

[post]

url

```shell
/logout
```

接口规范

```ts
export interface ResponseData<T = any> {
  code: number,
  message: string,
  data?: T
}

```

返回数据示例

```ts
{
  code: 200,
  message: '退出成功'
}

```

后台需要按照要求提供如上四个必须接口。

## 设置前端转发

vite.congfig.ts

```ts
server: {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8010',  // 修改成实际后台地址
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}

```

凡是前缀带api的就转发，并剔除api。例如：/api/user/list，则实际转发为：target配置项地址 + /user/list

前缀配置：.env.development 和 .env.production

```shell
VITE_REQUEST_BASE_URL = /api
// 你可以根据后台要求修改，例如:
VITE_REQUEST_BASE_URL = /api/admin/v1
// 实际访问为（配置proxy时）：target配置项地址 + /admin/v1/user/list

```

实际VITE_REQUEST_BASE_URL的/api会被转发规则剔除，如果不设置转发 `proxy` /api转发, api前缀则不会被剔除。

**如果你想深入了解框架内部运行逻辑，请继续阅读剩余文章。**
