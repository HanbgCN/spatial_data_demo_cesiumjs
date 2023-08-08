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
    <TitleWidget title="台账总览" />
    <div class="w-80 p-4 pt-6 pb-6 bg-stone-200/60 rounded-lg">
        <div class="flex items-center">
            <div class="text-gray-400">创建 / 加入的台账</div>
            <el-button class="ml-auto" type="primary" plain>创建台账</el-button>
        </div>
        <div class="font-bold text-2xl mt-6">
            <span>3</span>
            <span class="ml-1 mr-1">/</span>
            <span>10</span>
        </div>
    </div>
    <TitleWidget class="mt-10" title="台账列表" />

    <el-table :data="tableData" stripe border>
        <el-table-column prop="date" label="序号" align="center" width="180" />
        <el-table-column prop="name" label="名称" align="center" width="180" />
        <el-table-column prop="address" label="拥有者" align="center" />
        <el-table-column prop="address" label="成员" align="center" />
        <el-table-column prop="address" label="作业年" align="center" />
        <el-table-column prop="address" label="创建时间" align="center" />
        <el-table-column label="操作" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="详情" disabled />
                <ButtonTextPrimaryWidget label="编辑" />
                <ButtonTextPrimaryWidget label="删除" @click="handleDelete" />
            </template>
        </el-table-column>
    </el-table>
    <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="10" :total="total" />
</template>