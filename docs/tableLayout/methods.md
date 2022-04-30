# 内置方法

## defaultAdd

打开添加弹框，无需参数

### 参数

无

### 示例

```vue
<template>
  <tableLayout :columns="columns" ref="table" />
<template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import tableLayout from '@/components/tableLayout/tableLayout.vue'
export default defineComponent({
  components: {
    tableLayout
  },
  setup () {
    const columns = [ 
      { title: '序号', dataIndex: 'id' }, { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' }
    ]
    const table = ref(null)
    onMounted(() => {
      table.value.defaultAdd()
    })
    return { columns, table }
  }
})
</script> 

```

## defaultEdit

打开编辑弹框，需要参数

### 参数

编辑行行数据对象

### 示例

```vue
<template>
  <tableLayout :columns="columns" ref="table">
    <template #handle="item">
        <a @click="listEdit(item.value)">编辑</a>
  	</template>
  </tableLayout>
<template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import tableLayout from '@/components/tableLayout/tableLayout.vue'
export default defineComponent({
  components: {
    tableLayout
  },
  setup () {
    const columns: ColumnProps[] = [ 
      { title: '序号', dataIndex: 'id' }, 
      { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' },
      { title: '操作', slots: { customRender: 'handle' }, width: 240, fixed:'right' }
    ]
    const table = ref(null)
    // 打开编辑窗口 (e = {text: 行数据})
    const listEdit = (e: any) => {
      table.value.defaultEdit(e)
    }
    return { columns, table, listEdit }
  }
})
</script> 

```

## getData

获取列表数据，可用于刷新重载，无需参数

### 参数

无

### 示例

详见[defaultAdd](http://www.lelebk.com/docs/table-layout/methods.html#defaultadd)

## defaultDel

删除数据，需要参数

### 参数

删除行行数据对象

### 示例

```vue
<template>
  <tableLayout :columns="columns" ref="table">
    <template #handle="item">
        <a @click="listDel(item.value)">删除</a>
  	</template>
  </tableLayout>
<template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import tableLayout from '@/components/tableLayout/tableLayout.vue'
export default defineComponent({
  components: {
    tableLayout
  },
  setup () {
    const columns: ColumnProps[] = [ 
      { title: '序号', dataIndex: 'id' }, 
      { title: '编号', dataIndex: 'idx' },
      { title: '名称', dataIndex: 'name' },
      { title: '操作', slots: { customRender: 'handle' }, width: 240, fixed:'right' }
    ]
    const table = ref(null)
    // 删除方法 (e = {text: 行数据})
    const listDel = (e: any) => {
      table.value.defaultDel(e)
    }
    return { columns, table, listEdit }
  }
})
</script> 
```