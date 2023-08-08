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
    <div class="flex justify-between h-70">
        <div class="border-1 border-gray-300 rounded-lg p-3 w-[25%]">
            <TitleWidget :icon="false" title="生产力" />
        </div>
        <div class="border-1 border-gray-300 rounded-lg p-3 w-[calc(75%-1rem)]">
            <div class="flex">
                <TitleWidget :icon="false" title="部门员工" />
                <ButtonPrimaryWidget class="ml-auto transform translate-y-2" label="一级部门" />
            </div>
        </div>
    </div>
    <div class="border-1 border-gray-300 rounded-lg p-3 mt-5">
        <div class="flex">
            <TitleWidget :icon="false" :title="route.meta.label as string" />
            <ButtonPrimaryWidget class="ml-auto transform translate-y-2" label="添加部门" />
        </div>
        <el-table :data="tableData" stripe border>
            <el-table-column prop="date" label="序号" align="center" width="180" />
            <el-table-column prop="name" label="部门名称" align="center" width="180" />
            <el-table-column prop="address" label="负责人" align="center" />
            <el-table-column prop="address" label="上级" align="center" />
            <el-table-column prop="address" label="下级/人数" align="center" />
            <el-table-column label="操作" align="center" width="320">
                <template v-slot="{ row }">
                    <ButtonTextPrimaryWidget label="详情" disabled />
                    <ButtonTextPrimaryWidget label="编辑" />
                    <ButtonTextPrimaryWidget label="删除" @click="handleDelete" />
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="10"
            :total="total" />
    </div>
</template>