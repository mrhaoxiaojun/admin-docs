# 图表

管理后台图表也是常见得需求。这里图表推荐 AntV g2，功能齐全，支持typeScript，社区 demo 也丰富[官网](https://g2.antv.vision/zh)

:::tip
echarts也非常不错，这里只是以g2 举例，并未集成到框架内
:::

## 安装

### 通过npm安装

```shell
npm install @antv/g2 --save
```

成功安装完成之后，即可使用 `import` 或 `require` 进行引用。

```ts
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'c1',
  width: 600,
  height: 300,
})

```

### 浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源

```js
<!-- 引入在线资源，选择你需要的 g2 版本以替换 version 变量 -->
<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"></script>

<!-- 引入本地脚本 -->
<script src="./g2.js"></script>

```

使用 script 标签引入 G2 资源时，挂载在 window 上的变量名为 G2，所以在上述实例中需要加上 G2 的前缀。如下：

```ts
const chart = new G2.Chart({
  /* your options */
});

```

## 开始使用

**1. 创建 div 容器** 在绘图前我们需要为 G2 准备一个 DOM 容器：

```html
<div id="container"></div>

```

**2. 编写图表绘制代码** 创建 div 容器后，我们就可以进行简单的图表绘制：

1. new Chart() 创建 Chart 图表对象，指定图表所在的容器 id、图表的宽高、边距等信息；
2. chart.data() 载入图表数据源；
3. 使用图形语法进行图表的绘制；
4. chart.render() 渲染图表。

```ts
import { Chart } from '@antv/g2';

const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
]
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
})

chart.data(data);
chart.scale('sales', {
  nice: true,
})

chart.tooltip({
  showMarkers: false
})
chart.interaction('active-region')

chart.interval().position('year*sales')

chart.render()

```

题外话： ECharts 的可配置项真心多，大家使用的时候可能要花一点时间了解它的 api 的 [![图表](http://www.lelebk.com/docs/img/chart.jpg)](http://www.lelebk.com/docs/img/chart.jpg)

**3. 图表容器被销毁时**
在图表容器被销毁时，总是应调用 `chart.destroy()` 以销毁实例释放资源，避免内存泄漏

## 在组合式API中的注意事项

在setup中，直接 `new chart` 可能dom节点没有初始化完成，存在id节点找不到的错误，这里应该在nextTick中进行初始化

```ts
import { defineComponent, ref, onMounted, nextTick, reactive, watch } from 'vue'
export default defineComponent({
  setup () {
    let company: any = {}
    nextTick(() => {
      // curveChart为折线图的封装函数
      company = curveChart('container')
    })
    // 监听筛选变化
    watch(selectForm, () => { 
      workList().then (e => {
        const data = e.data.data
        company.changeData(data.company || [])
      })
    })
  }
})
```