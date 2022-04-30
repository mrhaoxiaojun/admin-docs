# 内置插槽

## operationMore

用于追加默认操作栏按钮，返回该行数据

### 示例

```vue
<template>
  <tableLayout :columns="columns">
    <template #operationMore="item">
      <a-divider type="vertical" />
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>更多</a>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="editPassword(item)">
              <a>修改密码</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
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
    return { columns }
  }
})
</script> 

```

## button

筛选表单下方按钮插槽，可用于追加表格上方的按钮，不返回数据

### 示例

```vue
<template>
  <tableLayout :columns="columns">
    <template v-slot:button>
        <a-button type="primary" class="batch">批量删除</a-button>
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
    return { columns }
  }
})
</script> 
```