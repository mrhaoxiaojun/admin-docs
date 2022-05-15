
::: tip TIP
这里提供一些优秀的开源组件，供大家参考使用，如果不需要，可在项目工程中自行删除
:::

## tableLayout

[tableLayout 使用参考文档](/tableLayout/outline)


## 图标

本项目图标推荐使用 antd ui 图标库中图标，并基于此简单封装了a-icon组件，之后还会跟进该组件使其功能更加丰富。如果你在 antd ui 图标库中没有找到需要的图标，可以到 [iconfont.cn](https://www.iconfont.cn/)上选择并生成自己的业务图标库，再进行使用。或者其它 svg 图标网站，下载 svg 并放到文件夹之中就可以了。

::: tip 提示

使用svg图标推荐封装成组件，这里可阅读潘大神 [手摸手，带你优雅的使用 icon](https://juejin.cn/post/6844903517564436493)
:::

### 使用a-icon组件

1. 在[antd ui图标库](https://2x.antdv.com/components/icon-cn)挑选自己需要的图标，复制他的名称。
2. 在模板中引入a-icon组件

```vue
<template>
  <div>
    <a-icon type="PoweroffOutlined" />
  </div>
</template>
<script lang="ts">
  import aIcon from '@/components/aicon/aicon.vue'
  import { defineComponent, watch, computed, onBeforeMount } from "vue"
  export default defineComponent({
    components: {
      aIcon
    },
  })
</script>

```

### 生成图标库代码

个人推荐使用阿里的 [iconfont](https://www.iconfont.cn/) 使用项目或公司创建一个账号，在里面可以创建项目，每个项目使用的开源图表都可以添加进去，每次更新图表直接替换项目中的iconfont文件即可，快捷方便