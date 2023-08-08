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
        <ButtonPrimaryWidget class="ml-auto transform translate-y-2" label="新增分组" />
    </div>
    <el-table :data="tableData" stripe border>
        <el-table-column prop="date" label="序号" align="center" width="180" />
        <el-table-column prop="name" label="分组名称" align="center" width="180" />
        <el-table-column prop="address" label="分组描述" align="center" />
        <el-table-column prop="address" label="用户列表" align="center" />
        <el-table-column prop="address" label="创建时间" align="center" />
        <el-table-column prop="address" label="更新时间" align="center" />
        <el-table-column label="操作" align="center" width="320">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="权限维护" disabled />
                <ButtonTextPrimaryWidget label="用户维护" />
                <ButtonTextPrimaryWidget label="编辑分组" @click="handleDelete" />
                <ButtonTextPrimaryWidget label="删除" @click="handleDelete" />
            </template>
        </el-table-column>
    </el-table>
    <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="10" :total="total" />
</template>