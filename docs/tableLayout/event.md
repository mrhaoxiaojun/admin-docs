# 事件钩子

## 事件列表

| **事件名称**    | **说明**   | **回调参数**             |
| ----------- | -------- | -------------------- |
| editOpen    | 编辑窗口打开回调 | function(data: 编辑数据) |
| addOpen     | 添加窗口打开回调 | function()           |
| editSuccess | 编辑提交成功回调 | function()           |
| addSuccess  | 添加提交成功回调 | function()           |

## 使用示例

```vue
<template>
  <tableLayout
    @editOpen="editOpen"
    @addOpen="addOpen"
    @editSuccess="editSuccess"
    @addSuccess="addSuccess"
  />
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
    
    // 事件钩子
    const editOpen = (data: any) => {
      console.log('编辑弹框打开，并但会编辑数据')
      console.log(data)
    }

    const addOpen = () => {
      console.log('添加弹框打开，无数据')
    }

    const editSuccess = () => {
      console.log('编辑提交成功，无数据')
    }

    const addSuccess = () => {
      console.log('添加提交成功，无数据')
    }
    
    return { columns, editOpen, addOpen, editSuccess, addSuccess }
    
  }
})
</script> 
```