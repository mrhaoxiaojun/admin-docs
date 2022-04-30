

## 前言 :tada: 

坚持制定好的统一的代码规范。

无论团队人数多少，代码应该同出一门。

如果你想要为这个规范做贡献或觉得有不合理的地方，请及时提出讨论修正，联系人（haoxiaojun@cnpc.cn）。

## 工具使用
:::tip
高能预警

请仔细阅读（最佳原则 --> vue开发）部分，剩余部分70%应该是常见规范，且已经成为很多人的书写习惯
:::

### eslint

***下面规范虽然很多，但是相信大家80%都见过且也是这么遵循的，不要有压力，我们有eslint，我们强制使用eslint来规范大家的开发规范***

**vscode**配置

1、安装 eslint 插件

2、文件 > 首选项 > 设置（在用户设置中填写如下配置：）

**eslint.autoFixOnSave** 用来进行保存时自动格式化，但是默认只支持 javascript .js 文件。 

**eslint.validate** 用来配置作用的文件类型

```sh
"eslint.autoFixOnSave": true,
"eslint.validate": [
"javascript",
"javascriptreact",
{
"language": "html",
"autoFix": true
},
{
"language": "vue",
"autoFix": true
}
```

至此使用**vscode，control+s后自动eslint格式化**（但是react并不买账，只有vue可以）

### 版本管理工具

- IDE自带git启用
- 命令行 cmd、shell、git base、Cmder（推荐，支持git-base写法、可分屏，完美）、ConsoleZ、iTerm2（仅mac系统）
- sourceTree 图形化界面管理（推荐、方便对比）

根据自己喜好选择（建议Cmder配合sourceTree）

### IDE

Visual Studio Code（推荐）、Atom、WebStorm、sublime text3

## 通用规范

### 1、文件/资源命名

在 web 项目中，用减号（-）来分隔文件名，例如：order-detail-view.js。确保文件命名总是以字母开头而不是数字。

> 项目命名

全部采用小写方式， 以中划线分隔，或驼峰。

例：my-project-name，abc-bs，abcSdk……

> 目录命名

参照项目命名规则；

例：js, css, images,views…

> 组件命名

组件请务必大字母开头

例：Header，Menu，Topbar...

> JS文件命名

参照项目命名规则。

例：account-model.js

> CSS,LESS文件命名

参照项目命名规则。

例：retina-sprites.scss

> HTML文件命名

参照项目命名规则。

例：error-report.html

### 2、协议

不要指定引入资源所带的具体协议。

当引入图片或其他媒体文件，还有样式和脚本时，URL 所指向的具体路径，不要指定协议部分（http:, https:），除非这两者协议都不可用。这样在请求资源协议无法确定时好用，而且能节约文件大小

```sh
//不推荐
<script src="http://cdn.com/foundation.min.js"></script>
//推荐
<script src="//cdn.com/foundation.min.js"></script>
```

### 3、文本缩进

一次缩进两个空格。

### 4、注释

写注释时一定要注意：写明代码的作用，重要的地方一定记得写注释

#### 4.1  单行注释

说明：单行注释以两个斜线开始，以行尾结束

```js
 // 调用了一个函数
setTitle();
var maxCount = 10; // 设置最大量
```

#### 4.2  多行注释

```js
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/

```

#### 4.3  函数注释

```js
/** 开始，注此处两个星
* 以星号开头，紧跟一个空格，第一行为函数说明
* @param {类型} 参数 单独类型的参数
* @param {[类型|类型|类型]} 参数 多种类型的参数
* @param {类型} [可选参数] 参数 可选参数用[]包起来
* @return {类型} 说明
* @author 作者 创建时间 
* @update 作者 创建时间 
* @example 举例（如果需要）
*/
```

## vue3.0 开发风格 :sun_with_face: :point_left:

:::tip

Vue开发风格官方推荐[Vue3.x风格指南](https://v3.cn.vuejs.org/style-guide/)


**注意：**

组件命名：可使用index.vue或者大写字母开头定义组件名称（大驼峰命名法）  
文件夹命名：小写开头(小驼峰命名法)

:::

### 推荐

**这里推荐全部使用Vue3.x 的风格指南作为我们的代码格式要求**

### TS

这里强调一下TS在Vue中开发中尽量不要使用any大法


## 以下内容为Vue2.x历史版本规范要求:arrow_down::arrow_down::arrow_down:

### ---------------------


:::warning

以下内容为Vue2.x历史版本规范要求，新版本可不做参考
---------------------------------------------------------------------------:arrow_down::arrow_down::arrow_down::arrow_down:
:::

## vue2.0 开发风格 :first_quarter_moon_with_face:

:::tip

Vue开发风格官方推荐[Vue2.x风格指南](https://cn.vuejs.org/v2/style-guide/)



**注意：**

组件命名：可使用index.vue或者大写字母开头定义组件名称（大驼峰命名法）  
文件夹命名：小写开头(小驼峰命名法)
:::

### 1、基于vue-cli2x结构化规范
```sh
├── index.html                      入口页面
├── build                           构建脚本目录
│   ├── build-server.js                 运行本地构建服务器，可以访问构后的页面
│   ├── build.js                        生产环境构建脚本
│   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动
│   ├── dev-server.js                   运行本地开发服务器
│   ├── utils.js                        构建相关工具方法
│   ├── webpack.base.conf.js            wabpack基础配置
│   ├── webpack.dev.conf.js             wabpack开发环境配置
│   └── webpack.prod.conf.js            wabpack生产环境配置
├── config                          项目配置
│   ├── dev.env.js                      开发环境变量
│   ├── index.js                        项目配置文件
│   ├── prod.env.js                     生产环境变量
│   └── test.env.js                     测试环境变量
├── mock                            mock数据目录
│   └── hello.js
├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
├── src                             项目源码目录
│   ├── main.js                         入口js文件
│   ├── App.vue                         根组件
│   ├── components                      公共组件目录
│   │   └── title.vue
│   ├── assets                          资源目录，这里的资源会被wabpack构建
│   │   ├── css                         公共样式文件目录
│   │   ├── js                          公共js文件目录
│   │   └── img                      图片存放目录
│   ├── routes                          前端路由
│   │   └── index.js
│   ├── store                           应用级数据（state）
│   │   └── index.js
│   └── views                           页面目录
│       ├── hello.vue
│       └── notfound.vue
├── static                          纯静态资源，不会被wabpack构建。
│── .gitignore.js                  提交代码时候需要配置的忽略提交的代码目录
│── README.md               展示项目基本用法功能的说明性文件
```
### 2、vue文件方法声明顺序

```js
- components   
- props    
- data     
- created
- mounted
- activited
- update
- beforeRouteUpdate
- metods   
- filter
- computed
- watch
```

### 3、强制要求

1. 组件名为多个单词

组件名应该始终是多个单词的，根组件 App 除外。

```js
// 反例：
export default {
 name: 'Todo',
 // ...
}
// 正例
export default {
 name: 'TodoItem',
 // ...
}

```

2. 组件数据

组件的 data 必须是一个函数。

当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。

```js
// 正例
// In a .vue file
export default {
 data () {
 return {
 foo: 'bar'
 }
 }
}
// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
 data: {
 foo: 'bar'
 }
})

// 反例
export default {
 data: {
 foo: 'bar'
 }
}

```

3. Prop定义

Prop 定义应该尽量详细。

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

```js
// 正例
props: {
 status: String
}
// 更好的做法！
props: {
 status: {
   type: String,
   required: true,
   default:"",
   ...
 }
}

// 反例
// 这样做只有开发原型系统时可以接受
props: ['status']
```

4. 为v-for设置键值

总是用 key 配合 v-for。

在组件上*总是*必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。

```js
// 正例
<ul>
 <li
 v-for="todo in todos"
 :key="todo.id"
 >
 {{ todo.text }}
 </li>
</ul>

// 反例
<ul>
 <li v-for="todo in todos">
 {{ todo.text }}
 </li>
</ul>

```

5.避免 v-if 和 v-for 用在一起

永远不要把 v-if 和 v-for 同时用在同一个元素上。

一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

为了避免渲染本应该被隐藏的列表 (比如`v-for="user in users" v-if="shouldShowUsers`")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。

```html
// 正例
<ul v-if="shouldShowUsers">
 <li
 v-for="user in users"
 :key="user.id"
 >
 {{ user.name }}
 </li>
</ul>

// 反例
<ul>
 <li
 v-for="user in users"
 v-if="shouldShowUsers"
 :key="user.id"
 >
 {{ user.name }}
 </li>
</ul>

```

### 4、强烈推荐（增强可读性）

1. 组件文件

只要有能够拼接文件的构建系统，就把每个组件单独分成文件。
当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

```js
// 正例
components/
|- TodoList.vue
|- TodoItem.vue

// 反例
Vue.component('TodoList', {
 // ...
})
Vue.component('TodoItem', {
 // ...
})

```

2. 单文件组件文件的大小写

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)

```js
// 正例
components/
|- MyComponent.vue
// 反例
components/
|- myComponent.vue
|- mycomponent.vue

```

3. 基础组件名

应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

```js
// 正例
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
// 反例
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue

```

4. 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```js
// 正例
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue

// 反例
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue

```

5. 模板中的组件名大小写
总是 PascalCase 的

```js
// 正例
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>
// 反例
<!-- 在单文件组件和字符串模板中 -->
<mycomponent/>
<!-- 在单文件组件和字符串模板中 -->
<myComponent/>
```

6. 多个特性的元素

多个特性的元素应该分多行撰写，每个特性一行。

```js
// 正例
<img
  src="[https://vuejs.org/images/logo.png](https://vuejs.org/images/logo.png)"
  alt="Vue Logo"
/>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>

// 反例
<img src="[https://vuejs.org/images/logo.png](https://vuejs.org/images/logo.png)" alt="Vue Logo">
<MyComponent foo="a"  bar="b" baz="c"/>


```

7. 带引号的特性值
非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。
在 HTML 中不带空格的特性值是可以没有引号的，但这样做常常导致带空格的特征值被回避，导致其可读性变差。

```html
// 正例
<AppSidebar :style="{ width: sidebarWidth + 'px' }"/>

// 反例
<AppSidebar :style={width:sidebarWidth+'px'}/>

```

1. 指令缩写

都用指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:)

```html
// 正例
<input
 @input="onInput"
 @focus="onFocus"
/>

// 反例
<input
 v-bind:value="newTodoText"
 :placeholder="newTodoInstructions"
/>
```

### 5、推荐单文件组件元素的顺序

\1. 单文件组件的顶级元素的顺序

单文件组件应该总是让template 、script 和 style 标签的顺序保持一致。且 style 要放在最后，因为另外两个标签至少要有一个。

```html
// 正例
<!-- ComponentA.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

```

### 6、谨慎使用 (有潜在危险的模式)

1. 没有在 v-if/v-if-else/v-else 中使用 key

如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 div 元素)。

```html
// 正例
<div
 v-if="error"
 key="search-status"
>
  错误：{{ error }}
</div>
<div
 v-else
 key="search-results"
>
 {{ results }}
</div>

// 反例
<div v-if="error">
 错误：{{ error }}
</div>
<div v-else>
 {{ results }}
</div>
```

2. scoped 中的元素选择器
元素选择器应该避免在 scoped 中出现。
在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

```js
// 正例
<template>
 <button class="btn btn-close">X</button>
</template>
 
<style scoped>
.btn-close {
 background-color: red;
}
</style>

// 反例
<template>
 <button>X</button>
</template>
 
<style scoped>
button {
 background-color: red;
}
</style>

```

3. 隐性的父子组件通信

应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。

```js
// 正例
Vue.component('TodoItem', {
 props: {
 todo: {
 type: Object,
 required: true
 }
 },
 template: `
 <input
 :value="todo.text"
 @input="$emit('input', $event.target.value)"
 >
 `
})

// 反例
Vue.component('TodoItem', {
 props: {
 todo: {
 type: Object,
 required: true
 }
 },
 methods: {
 removeTodo () {
 var vm = this
 vm.$parent.todos = vm.$parent.todos.filter(function (todo) {
 return todo.id !== vm.todo.id
 })
 }
 },
 template: `
 <span>
 {{ todo.text }}
 <button @click="removeTodo">
 X
 </button>
 </span>
 `
})
```