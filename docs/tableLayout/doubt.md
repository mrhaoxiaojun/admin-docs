# 使用答疑

## 列表展示字段过多怎么

对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 scroll.x 配合使用。

> 若列头与内容不对齐或出现列重复，请指定固定列的宽度 width。如果指定 width 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x。

示例

```vue
<template>
  <div class="company__container">
    <tableLayout
      ref="table"
      :columns="columns"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :scroll="{x: 1800}"
      :get="firmlist"
    >
      <template #change>
        <span>查看</span>
      </template>
      <template #handle="item">
        <a @click="edit(item.value.text.id)">编辑</a>
        <a-divider type="vertical" />
        <a>管理</a>
        <a-divider type="vertical" />
        <a @click="through(item.value.text.id)">通过</a>
        <a-divider type="vertical" />
        <a @click="reject(item.value.text.id)">驳回</a>
      </template>
    </tableLayout>
  </div>
</template>
<script lang="ts">
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
	setup () {
  	const columns: ColumnProps[] = [ 
      { title: '序号', dataIndex: 'id', width: 90 },
      { title: '用户名', dataIndex: 'username', width: 90 },
      { title: '公司名', dataIndex: 'company_name', width: 290 },
      { title: '访问', dataIndex: 'job_visit_num', width: 90 },
      { title: '用户组', dataIndex: 'service_name' },
      { title: '到期天数', dataIndex: 'term_days', width: 90 },
      { title: '来源', dataIndex: 'source', width: 90 },
      { title: '登录时间', dataIndex: 'last_login_time' },
      { title: '注册时间', dataIndex: 'created_at' },
      { title: '业务员', dataIndex: 'salesman_id', width: 90 },
      { title: '变更记录', slots: { customRender: 'change' }, width: 90 },
      { title: '状态', dataIndex: 'status', width: 90 },
      { title: '操作', slots: { customRender: 'handle' }, width: 200, fixed:'right' }
    ]
    retuen { columns }
  }
})
</script>

```

## 前端id值展现与接口返回不一致

id后台返回值大于9007199254740991(number类型)会导致前端失去精度，因为id最大表示范围为9007199254740991，大于这个范围需要后台把id从number转为string​

## 一个输入项需是并列两个值怎么办

方案一：需要拆分成两个输入项，给这个两个输入项进行命名，rules两项设置为必填项，其效果与一项两值是一样的 方案二：要拆分成两个输入项，第二项formItem的title设置为空("")，rules两项设置为必填项，可适当改变第二项的长度，为其更加贴合设计稿 如果产品觉得不满足需求，那只能自定义表单了​

## select选项需要后台获取怎么办

在使用select组件时options[]需要后台返回，这里提供两个解决思路，目前采用方案二，如果觉得欠妥大家可以评论留言，当评论方案得到大多开发者点赞认可时，将会作出修改​

方案一：在页面setup函数中的onBeforeMount生命周期函数中，调取后台选项接口，此时后台把筛选、添加、编辑的全部选项返回，前端依次循环判断key值放入对应的formItem 方案二：前端配置select异步获取选项的接口，页面打开去调用该接口，后台把选项返回，前端自动载入，[示例](https://jiale.yuque.com/staff-xt6vt5/skpsgx/exl9sx#tnUWN)