# 配置项

前言：tableLayout支持antd table的原有配置，可以访问[antd官网 (opens new window)](https://2x.antdv.com/components/table-cn#API)查看原有配置项，文本的配置项是对antd table二次封装所产生的补充。本文示例demo[👉快戳 (opens new window)](http://www.lelebk.com/)[账号密码:admin/123456]

## 基础项

### columns `必填`

设置列表表头，配置项与antd table的columns保持一致，在涉及特定的string类型的时候需要设置columns类型为ColumnProps[]

#### 1、类型

`any[] || ColumnProps[]`

#### 2、示例

```vue
<template>
  <tableLayout :columns="columns" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    return { columns }
  }
})
</script>

```

#### 3、字段

| **参数**                   | **说明**                                   | **类型**                             | **默认值**                                  |
| ------------------------ | ---------------------------------------- | ---------------------------------- | ---------------------------------------- |
| title 必填                 | 列头显示文字                                   | string                             | slot                                     |
| dataIndex 可选             | 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法           | string                             | -                                        |
| fixed 可选                 | 列是否固定                                    | boolean                            | string('left' 'right')                   |
| width 可选                 | 列宽度                                      | string                             | number                                   |
| slots 可选                 | 使用 columns 时，可以通过该属性配置支持 slot 的属性，插槽     | object                             | -                                        |
| align 可选                 | 设置列内容的对齐方式                               | 'left'                             | 'right'                                  |
| ellipsis 可选              | 超过宽度将自动省略，暂不支持和排序筛选一起使用                  | boolean                            | false                                    |
| colSpan 可选               | 表头列合并,设置为 0 时，不渲染                        | number                             | -                                        |
| defaultFilteredValue 可选  | 默认筛选值                                    | string[]                           | -                                        |
| filterDropdown 可选        | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互          | VNode                              | v-slot                                   |
| filterDropdownVisible 可选 | 用于控制自定义筛选菜单是否可见                          | boolean                            | -                                        |
| filtered 可选              | 标识数据是否经过过滤，筛选图标会高亮                       | boolean                            | false                                    |
| filteredValue 可选         | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组    | string[]                           | -                                        |
| filterIcon 可选            | 自定义 filter 图标                            | VNode                              | ({filtered: boolean, column: Column}) => vNode |
| filterMultiple 可选        | 是否多选                                     | boolean                            | true                                     |
| filters 可选               | 表头的筛选菜单项                                 | object[]                           | -                                        |
| customRender 可选          | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并 | Function({text, record, index}) {} | v-slot                                   |
| sorter 可选                | 排序函数，本地排序使用一个函数(参考 [Array.sort (opens new window)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)的 compareFunction)，需要服务端排序可设为 true | Function                           | boolean                                  |
| sortOrder 可选             | 排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false | boolean                            | string                                   |
| sortDirections 可选        | 支持的排序方式，取值为 'ascend' 'descend'           | Array                              | ['ascend', 'descend']                    |
| customCell 可选            | 设置单元格属性                                  | Function(record, rowIndex)         | -                                        |
| customHeaderCell 可选      | 设置头部单元格属性                                | Function(column)                   | -                                        |

#### 4、自定义列插槽

场景：如某一列需要展示为图片

```vue
<template>
  <tableLayout :columns="columns">
  	<template v-slot:license="item">
    	<a-image
      	:width="48"
        style="cursor: pointer;"
        src="https://alicdn.antdv.com/vue.png"
    	/>
  	</template>
  </tableLayout>
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', slots: { customRender: 'license' } }
    ]
    return { columns }
  }
})
</script> 

```

注意tableLayout组件内自定义插槽之间名称不能重复，自定义插槽与内置插槽名称不能重复

#### 5、特别注意

当设置的字段类型为特定字符串类型的时候，必须设置columns类型为ColumnProps[]

```ts
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns: ColumnProps[] = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', fixed:'right', slots: { customRender: 'handle' } }
    ]
    return { columns }
  }
})
</script> 

```

可以看到使用fixed项，fixed数据类型为boolean | 'left' | 'right'，'left'和'right'为特定的字符串类型，如果不设置ColumnProps[]，fixed：'right'会被推断为string，不符合antd规定的数据类型

### get `必填`

数据接口，列表展示前获取数据的api，在页面加载完毕前tableLayout会去调用该配置项配置的接口，从而把列表数据展现出来

#### 1、请求类型

`GET`

#### 2、类型

`GetData`

```ts
type GetData = (x?: any) => Promise<AxiosResponse<TableList>>

```

#### 3、返回值

`TableList`

```ts
interface TableList extends ResponseData {
  total: number,
  current: number,
  pageSize: number,
  data: []
}

// 基础返回信息
interface ResponseData<T = any> {
  code: number,
  message: string,
  data?: T
}

```

#### 4、示例

```vue
<template>
  <tableLayout :columns="columns" :get="getData" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { getData } from '@/api/table'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    return { columns, getData }
  }
})
</script> 

```

getData示例

```ts
<script lang="ts">
import request from '../request'
export const getData = (params: any): ConfigType<TableList> => {
  return request({
    url: '/table',
    method: 'get',
    params
  })
}
</script> 

```

### add `可选`

数据接口，列表添加数据的api，添加表单确认提交后调用该配置项配置的接口，不配置该接口将隐藏添加按钮

#### 1、请求类型

`POST`

#### 2、类型

`SetData`

```ts
type SetData = (x?: any) => Promise<AxiosResponse<ResponseData>>

```

#### 3、默认值

`undefined`

#### 4、返回值

`ResponseData`

```ts
interface ResponseData<T = any> {
  code: number,
  message: string,
  data?: T
}

```

#### 5、示例

```vue
<template>
  <tableLayout :columns="columns" :add="addData" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { addData } from '@/api/table'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    return { columns, addData }
  }
})
</script> 

```

addData与[getData](http://www.lelebk.com/docs/table-layout/disposition.html#get-%E5%BF%85%E5%A1%AB)示例一致

### editData `可选`

数据接口，编辑前获取编辑数据的api，点击编辑按钮调用该配置项配置的接口，不配置改接口编辑数据将使用当前行数据

#### 1、请求类型

`GET`

#### 2、类型

`EditData`

```ts
type EditData = (x?: any) => Promise<AxiosResponse<{
  code: number,
  message: string,
  data: any
}>>

```

#### 3、默认值

`undefined`

#### 4、返回值

```ts
interface result {
  code: number,
  message: string,
  data: any
}

```

#### 5、示例

```vue
<template>
  <tableLayout :columns="columns" :editData="editGetData" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { editGetData } from '@/api/table'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    return { columns, editGetData }
  }
})
</script> 

```

editGetData与[getData](http://www.lelebk.com/docs/table-layout/disposition.html#get-%E5%BF%85%E5%A1%AB)示例一致

#### 6、注意事项

该接口返回值必须包含编辑主键（默认为id，最终需要看是否配置editKey）

### edit `可选`

数据接口，列表编辑数据的api，编辑表单确认提交后调用该配置项配置的接口，不配置该接口将隐藏编辑按钮，注意add与del配置项都不填写时默认的操作栏将被隐藏

#### 1、请求类型

`POST`

#### 2、类型

`SetData`

```ts
type SetData = (x?: any) => Promise<AxiosResponse<ResponseData>>

```

#### 3、默认值

`undefined`

#### 4、返回值

`ResponseData`

```ts
interface ResponseData<T = any> {
  code: number,
  message: string,
  data?: T
}

```

#### 5、示例

```vue
<template>
  <tableLayout :columns="columns" :edit="editData" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { editData } from '@/api/table'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    return { columns, editData }
  }
})
</script> 

```

editData与[getData](http://www.lelebk.com/docs/table-layout/disposition.html#get-%E5%BF%85%E5%A1%AB)示例一致

### del `可选`

数据接口，列表删除数据的api，删除操作确认后调用该配置项配置的接口，不配置该接口将隐藏删除按钮，注意add与del配置项都不填写时默认的操作栏将被隐藏

#### 1、请求类型

`POST`

#### 2、类型

`SetData`

```ts
type SetData = (x?: any) => Promise<AxiosResponse<ResponseData>>

```

#### 3、默认值

`undefined`

#### 4、返回值

`ResponseData`

```ts
interface ResponseData<T = any> {
  code: number,
  message: string,
  data?: T
}

```

#### 5、示例

```vue
<template>
  <tableLayout :columns="columns" :del="delData" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { delData } from '@/api/table'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    return { columns, delData }
  }
})
</script> 

```

delData与[getData](http://www.lelebk.com/docs/table-layout/disposition.html#get-%E5%BF%85%E5%A1%AB)示例一致

### options `可选`

有些时候下拉框、多选框、单选框(筛选/添加/编辑)是从后端返回的，需要将接口配置到该项，onMounted生命周期内调用该接口，筛选、添加、编辑表单配置项内有optionKey字段的会自动与返回数据进行匹配赋值

#### 1、请求类型

`GET`

#### 2、类型

`OptionsData`

```ts
type OptionsData = () => Promise<AxiosResponse<{
  code: number,
  message: string,
  data: any
}>>

```

#### 3、默认值

`undefined`

#### 4、示例

```vue
<template>
  <tableLayout :columns="columns" :selectItem="selectItem" :options="options" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { options } from '@/api/table'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    const selectItem = ref([
      {title: '行业', key: 'industry', type: 'select', options: [], optionKey: 'industry'}
    ])
    return { columns, options, selectItem }
  }
})
</script> 

```

#### 5、注意事项

需要通过接口动态设置多选项的，配置项必须为ref([])响应值

### rowkey `可选`

列表编辑、删除的唯一标识(主键)

#### 1、类型

`string`

#### 2、默认值

`id`

### formItem `可选`

列表添加、编辑表单配置项。配置项内容共同作用两个表单，配置项可以选择内置好的数据录入组件。注意如果使用中发现数据录入组件无法满足录入要求，可以自定义表单

#### 1、类型

`FormItem[]`

```ts
interface FormItem {
  title: string,
  key: string,
  type: string,
  options?: any[],
  itemWidth?: string,
  defaultVal?: any,
  labelCol?: number,
  upload?: UploadFun,
  slotName?: string,
  optionKey?: string
}

```

#### 2、默认值

`undefined`

#### 3、示例

```vue
<template>
  <tableLayout :columns="columns" :formItem="formItem" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    const formItem = [
      { title: '标签名', key: 'name', type: 'input' },
      { title: '序号', key: 'content', type: 'input' },
      { title: '备注', key: 'content', type: 'textarea', itemWidth: 'calc(100% - 20px)',           labelCol: 3 },
    ]
    return { columns, formItem }
  }
})
</script> 

```

#### 4、字段

| **参数**        | **说明**                                   | **类型**              | **默认值**    |
| ------------- | ---------------------------------------- | ------------------- | ---------- |
| title 必填      | 各项标题                                     | string              | -          |
| key 必填        | 数据键                                      | string              | -          |
| type 必填       | 数据录入组件名称 (详见type字段)                      | string              | -          |
| labelCol 可选   | 标题占比，最大24，该值变大则录入组件变短                    | number              | 6          |
| itemWidth 可选  | 数据录入项宽度 (标题宽度 + 组件宽度)                    | string              | 50% - 20px |
| defaultVal 可选 | 表单初始值，一般用于筛选、添加，编辑无效                     | any                 | -          |
| upload 可选     | 图片上传组件专用，图片上传的接口函数。type='upload'时需要且必须设置-post | UploadFun(post请求类型) | -          |
| options 可选    | 选择性录入组件的选择选项，与type对应关系详见type字段           | any[]               | -          |
| optionKey 可选  | 多选选项远程接口key值，需要设置[options](http://www.lelebk.com/docs/table-layout/disposition.html#ELJP7)接口项 | string              | -          |
| slotName 可选   | 表单插槽名称，type='slot'必填，否则不需填               | string              | -          |
| disabled 可选   | 禁用输入项 [true为禁用]                          | boolean             | false      |

#### 5、字段类型补充

`UploadFun`

```ts
interface UploadData extends ResponseData  {
  url: string
}

type UploadFun = (x?: any) => Promise<AxiosResponse<UploadData>>

```

#### 6、type

| **值**       | **录入组件**                                 | **options**                              | **输出值类型** |
| ----------- | ---------------------------------------- | ---------------------------------------- | --------- |
| input       | 输入框                                      | 不可设置                                     | string    |
| select      | 选择器(下拉框)                                 | [ { label: 选项名, value: 选项值 } ] 必填        | string    |
| datePicker  | 日期选择框                                    | 不可设置                                     | string    |
| rangePicker | 日期范围选择器                                  | 不可设置                                     | array     |
| textarea    | 多行文本输入框                                  | 不可设置                                     | string    |
| treeSelect  | 树形选择器， [antd treeData(opens new window)](https://2x.antdv.com/components/tree-select-cn#API) | [ {label: 选项名,value: 选项值,selectable: 是否可选 (可选),disabled: 是否禁用 (可选),disableCheckbox: 禁掉checkbox (可选),children: [嵌套{ label, value }]} ] 必填 | array     |
| number      | 数值输入框                                    | 不可设置                                     | number    |
| switch      | 开关                                       | 不可设置                                     | boolean   |
| radio       | 单选框                                      | [{ label: 选项名, value: 选项值 }] 必填          | string    |
| checkbox    | 多选框                                      | [{ label: 选项名, value: 选项值 }] 必填          | array     |
| password    | 密码框                                      | 不可设置                                     | string    |
| upload      | 图片上传，必须设置upload项                         | 不可设置                                     | string    |
| uploadFile  | 文件上传，必须设置upload项                         | 不可设置                                     | string    |
| slot        | 自定义表单插槽，必须设置slotName，`slot是作用域插槽`，返回的数据格式：data: { formData: {}, key: string }，返回数据的目的就是能够让我们绑定表单值，使得插槽中输入的数据仍作用于tableLayout。详细示例如下 | 不可设置                                     | -         |

#### 7、自定义表单插槽

```vue
<template>
  <tableLayout :columns="columns" :formItem="formItem">
    <template v-slot:custom="data">
      // 双向绑定数据到表单内部，使其表单的规则验证与数据提交仍包含插槽输入的数据！
      <a-input v-model:value="data.formData[data.key]" />
    </template>
  </tableLayout>
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    const formItem = [
      { title: '标签名', key: 'name', type: 'input' },
      { title: '序号', key: 'content', type: 'input' },
      { title: '表单插槽', key: 'formnet', type: 'slot', slotName: 'custom' },
    ]
    return { columns, formItem }
  }
})
</script> 

```

注意tableLayout组件内自定义插槽之间名称不能重复，自定义插槽与内置插槽名称不能重复，比如筛选、添加、编辑的slotName不能重复

#### 8、optionKey与options接口的关系

```ts
// options接口返回数据如下
Response data {
    code: 200,
    data: {
      industry: [
        { title:'儿童服装', value: 1 },
        { title:'风险投资', value: 2 },
        { title:'资本投资', value: 3 },
        { title:'房地产', value: 4 },
        { title:'军工产品', value: 5 }
      ],
      cat: [
        { label: '奥迪', value: 'aodi' },
        { label: '宝马', value: 'baoma' },
        { label: '沃尔沃', value: 'oero' },
        { label: '丰田', value: 'fengt' },
        { label: '本田', value: 'bent' }
      ]
    },
    message: '编辑成功'
}

// 筛选配置项
 const selectItem = ref([
   { title: '行业', key: 'industry', type: 'select', options: [], optionKey: 'industry'}
 ])
 
  selectItem[0]['options'] = Response.data.data[selectItem[0]['optionKey']]
 
// 也就是，多选项数据接口返回的数据键与optionKey相匹配，匹配到的接口项就会赋值给options，只不过这一匹配过程是组件内来完成的，开发者只需配置无需关注

```

#### 9、特别注意

如果tableLayout现有的数据录入封装无法满足需求，可自定义这类表单。通过隐藏默认操作按钮，自定义插槽创建新的操作按钮，通过事件打开自定义表单

### selectItem `可选`

列表筛选表单配置项，配置项与配置方式与formItem一致(详情见formItem)，不配置该项将隐藏筛选表单

#### 1、类型

`FormItem[]` 详见[formItem **↑**](http://www.lelebk.com/docs/table-layout/disposition.html#formitem-%E5%8F%AF%E9%80%89)

#### 2、默认值

`undefined`

#### 3、示例

```vue
<template>
  <tableLayout :columns="columns" :selectItem="selectItem" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    const selectItem = [
      { title: '姓名', key: 'name', type: 'input', itemWidth: '290px' }, 
      { title: '年龄', key: 'age', type: 'number', itemWidth: '290px', defaultVal: 20 },
      { title: '住址', key: 'addr', type: 'input', itemWidth: '290px' }
    ]
    return { columns, selectItem }
  }
})
</script> 

```

#### 4、字段

详见[formItem](http://www.lelebk.com/docs/table-layout/disposition.html#formitem-%E5%8F%AF%E9%80%89)

### rules `可选`

添加、编辑表单的规则，该配置项共同作用于添加和编辑表单

#### 1、类型

`object`

#### 2、默认值

`undefined`

#### 3、示例

```vue
<template>
  <tableLayout :columns="columns" :rules="rules" />
<template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
export default defineComponent({
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    const rules = {
      name: [{required: true, message: '请输入姓名', trigger: 'change'}],
      age: [{required: true, message: '请输入年龄', trigger: 'change',type:'number'}],
      addr: [{required: true, message: '请输入地址', trigger: 'change'}],
      phone: [{required: true, message: '请输入手机号', trigger: 'change'}],
      industry: [{required: true, message: '请输入行业', trigger: 'change',type:'string'}],
      wealth: [{required: true, message: '请输入净资产', trigger: 'change',type:'number'}]
    }
    return { columns, rules }
  }
})
</script> 

```

#### 4、字段

| **参数**     | **说明**                                   | **类型**                                  | **默认值**  |
| ---------- | ---------------------------------------- | --------------------------------------- | -------- |
| trigger    | 校验触发的时机                                  | 'blur'                                  | 'change' |
| enum       | 枚举类型                                     | string                                  | -        |
| len        | 字段长度                                     | number                                  | -        |
| max        | 最大长度                                     | number                                  | -        |
| message    | 校验文案                                     | string                                  | -        |
| min        | 最小长度                                     | number                                  | -        |
| pattern    | 正则表达式校验                                  | RegExp                                  | -        |
| required   | 是否必选                                     | boolean                                 | false    |
| transform  | 校验前转换字段值                                 | function(value) => transformedValue:any | -        |
| type       | 内建校验类型，[可选项(opens new window)](https://github.com/yiminghe/async-validator#type) | string                                  | 'string' |
| validator  | 自定义校验（注意，[callback 必须被调用 (opens new window)](https://github.com/ant-design/ant-design/issues/5155)） | function(rule, value, callback)         | -        |
| whitespace | 必选时，空格是否会被视为错误                           | boolean                                 | false    |

更多高级用法可研究 [async-validator(opens new window)](https://github.com/yiminghe/async-validator)

#### 5、type

```sh
string、number、boolean、method、regexp、integer、float、array、object、enum、date、url、hex、email、any

```

#### 6、特别注意

规则的type属性默认值是string，如果是number类型的数据记得不要用默认值

### page `可选`

列表分页是否展示，该项默认true，如果设置为false列表将没有分页功能

#### 1、类型

`boolean`

#### 2、默认值

`true`

### operationWidth `可选`

列表默认操作栏宽度，该项默认值为200（注意200=200px）

#### 1、类型

`number`

#### 2、默认值

`200`

### operationShow `可选`

列表默认操作显示隐藏配置项

#### 1、类型

`boolean`

#### 2、默认值

`true`

## 扩展项

### addItem `可选`

添加表单配置项，该项存在时在添加表单优先采用该配置，与formItem同时存在时添加表单采用addItem，配置项格式与formItem一致

#### 1、类型

`FormItem[]` 详见[formItem](http://www.lelebk.com/docs/table-layout/disposition.html#formitem-%E5%8F%AF%E9%80%89)

#### 2、默认值

`undefined`

#### 3、字段

详见[formItem](http://www.lelebk.com/docs/table-layout/disposition.html#formitem-%E5%8F%AF%E9%80%89)

### editItem `可选`

编辑表单配置项，该项存在时在编辑表单优先采用该配置，与formItem同时存在时编辑表单采用editItem，配置项格式与formItem一致

#### 1、类型

`FormItem[]` 详见[formItem](http://www.lelebk.com/docs/table-layout/disposition.html#formitem-%E5%8F%AF%E9%80%89)

#### 2、默认值

`undefined`

#### 3、字段

详见[formItem](http://www.lelebk.com/docs/table-layout/disposition.html#formitem-%E5%8F%AF%E9%80%89)

### editKey `可选`

编辑唯一标识(主键)，编辑表单优先采用editKey做为编辑唯一标识，与rowKey同时存在时编辑表单采用editKey，配置项格式与formItem一致

#### 1、类型

`string`

#### 2、默认值

`undefined`

### delKey `可选`

删除唯一标识(主键)，删除表单优先采用delKey做为删除唯一标识，与rowKey同时存在时删除数据采用delKey

#### 1、类型

`string`

#### 2、默认值

`undefined`

### addRules `可选`

添加表单规则，添加表单优先采用addRules做为规则，与rules同时存在时采用addRules做为添加表单规则，配置项格式与rules一致

#### 1、类型

`object`

#### 2、默认值

`undefined`

#### 3、字段

详见[rules](http://www.lelebk.com/docs/table-layout/disposition.html#rules-%E5%8F%AF%E9%80%89)

### editRules `可选`

编辑表单规则，编辑表单优先采用editRules做为规则，与rules同时存在时采用editRules做为编辑表单规则，配置项格式与rules一致

#### 1、类型

`object`

#### 2、默认值

`undefined`

#### 3、字段

详见[rules](http://www.lelebk.com/docs/table-layout/disposition.html#rules-%E5%8F%AF%E9%80%89)

### params `可选`

在查询接口(get)上添加固定参数，适用如需要通过id参数查询列表的场景

#### 1、类型

`object`

#### 2、默认值

`undefined`

#### 3、示例

```vue
<template>
  <tableLayout :params="{ id: 123 }"></tableLayout>
</template>
// http://localhost:3000/api/table?current=1&pageSize=10&id=123
// 链接id参数会默认一直插入

```

动态赋值请在onBeforeMount生命周期函数内进行

```vue
<template>
  <tableLayout :params="query"></tableLayout>
</template>
<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, ref, reactive, onBeforeMount } from 'vue'
export default defineComponent({
	const query: any = reactive({})
  const route = useRoute()
  onBeforeMount(() => {
    query.id = route.query.id
  })
  return { query }
})
</script>

```

### addToData `可选`

为添加表单追加额外数据，适用如需要通过id参数添加数据的场景

#### 1、类型

`object`

#### 2、默认值

`{}`

#### 3、示例

```vue
<template>
  <tableLayout :formItem="formItem" :add="addData" :addToData="query" />
</template>
<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, ref, reactive, onBeforeMount } from 'vue'
import { addData } from '@/api/table'
export default defineComponent({
	const query: any = reactive({})
  const route = useRoute()
  onBeforeMount(() => {
    query.pid = route.query.id
  })
  const formItem = ref([
      { title: '展位号', key: 'sort', type: 'number' },
      { title: '企业名称', key: 'name', type: 'input' },
    ])
  return { formItem, addData, query }
})
</script>

// 此时的添加数据包为: { sort: 1, name: '测试', pid: 100 }
```