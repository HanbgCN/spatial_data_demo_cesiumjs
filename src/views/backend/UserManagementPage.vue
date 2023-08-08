<script setup lang="ts">
import ButtonPrimaryWidget from '@/components/widget/ButtonPrimaryWidget.vue';
import ButtonTextPrimaryWidget from '@/components/widget/ButtonTextPrimaryWidget.vue';
import TitleWidget from '@/components/widget/TitleWidget.vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: '研发组',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: '研发组',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: '研发组',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: '研发组',
    },
]

const handleDelete = async () => { console.log('trigger') }
const total = 100
</script>
<template>
    <div class="flex">
        <TitleWidget :title="route.meta.label as string" />
        <ButtonPrimaryWidget class="ml-auto transform translate-y-2" label="添加用户" />
    </div>
    <el-table :data="tableData" stripe border>
        <el-table-column prop="date" label="ID" align="center" width="180" />
        <el-table-column prop="name" label="姓名" align="center" width="180" />
        <el-table-column prop="address" label="用户名" align="center" />
        <el-table-column prop="address" label="职位" align="center" />
        <el-table-column prop="address" label="部门" align="center" />
        <el-table-column prop="address" label="邮箱" align="center" />
        <el-table-column prop="address" label="电话" align="center" />
        <el-table-column prop="address" label="最后登录" align="center" />
        <el-table-column prop="address" label="访问次数" align="center" />
        <el-table-column label="操作" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="锁定" disabled />
                <ButtonTextPrimaryWidget label="编辑" />
                <ButtonTextPrimaryWidget label="删除" @click="handleDelete" />
            </template>
        </el-table-column>
    </el-table>
    <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="10" :total="total" />
</template>