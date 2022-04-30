# 新增页面

页面分为本地路由页面（404、500）和动态路由页面，动态路由页面需要添加到后台数据库中，如果你写了动态路由管理页面，那么你在前台管理页面添加即可。

## 动态路由页面

在数据库根据id与pid的对应关系进行添加各个字段即可，值得注意的就是模板路径需要添加正确。

## 本地路由页面

先在 @/router/basics.router.ts 中增加你需要添加的路由。

**如：新增一个 excel 页面**

```ts
export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/excel',
    name: 'excel',
    component: () => import('/src/views/excel/excel.vue')
  }
]

```

本地路由默认不会显示在侧边栏，他也不属于Layout模板下的页面。他是一个独立模板页面。

## 新增view

新增完路由之后不要忘记在 @/views 文件下 创建对应的文件夹，一般一个路由对应一个文件

## 新增api

最后在(/src/services)文件夹下创建本模块对应的 api 服务。

## 新增组件

在全局的 `@/components` 只会写一些全局的组件，如富文本，各种搜索组件，封装的日期组件等等能被公用的组件。每个页面或者模块特定的业务组件则会写在当前 views 下面。如：`@/views/article/components/xxx.vue`。这样拆分大大减轻了维护成本。

**合适的组件拆分放在合适的位置，提高维护效率，为了拆分而拆分，不分职责模块的乱放是禁忌**

## 新增样式

页面的样式和组件是一个道理，全局的 @/assets/css 放置一下全局公用的样式，并在main.ts引入（请以reset为例），每一个页面的样式就写在当前 views下面，请记住加上scoped 或者命名空间，避免造成全局的样式污染。

```css
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
.xxx-container{
  /* name scoped */
  xxx
}
</style>
```