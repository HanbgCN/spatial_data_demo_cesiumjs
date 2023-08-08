<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const fileName = ref(null)

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
</script>
<template>
    <TitleWidget :title="route.meta.label as string" />
    <div class="flex">
        <div class="font-bold mb-4">最近编辑的文件</div>
        <ButtonTextPrimaryWidget class="ml-auto" label="查看更多" />
    </div>
    <div class="flex mb-6">
        <div v-for="item in 2" class="mr-16">
            <div class="p-3 mb-2 bg-gray-200/50 rounded-lg">
                <div class="h-30 w-34 mb-2 bg-sky-300 rounded-lg"></div>
                <div class="flex justify-center">
                    <ButtonTextPrimaryWidget class="mr-3" label="查看" />
                    <ButtonTextPrimaryWidget label="下载" />
                </div>
            </div>
            <div class="text-center">合肥市高新区...doc</div>
        </div>
    </div>

    <div class="font-bold mb-4">上传文件</div>
    <el-upload class="mb-4 border-none rounded-lg" drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
        <div class="font-bold text-lg italic text-blue-600 mb-3">选择文件</div>
        <div class="text-gray-400">支持word、excel、ppt、tiff</div>
    </el-upload>
    <div class="font-bold mb-2">我的文件</div>
    <el-input v-model="fileName" class="!w-70 h-9 mb-4" placeholder="请输入你需要搜索的文件">
        <template #prefix>
            <el-icon class="el-input__icon">
                <search />
            </el-icon>
        </template>
    </el-input>
    <el-table :data="tableData" stripe border>
        <el-table-column prop="date" label="序号" align="center" width="180" />
        <el-table-column prop="name" label="名称" align="center" width="180" />
        <el-table-column prop="address" label="位置" align="center" />
        <el-table-column prop="address" label="拥有者" align="center" />
        <el-table-column prop="address" label="文件大小" align="center" />
        <el-table-column label="操作" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="查看" disabled />
                <ButtonTextPrimaryWidget label="下载" />
                <ButtonTextPrimaryWidget label="删除" />
            </template>
        </el-table-column>
    </el-table>
    <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="3" :total="20" />
</template>

<style scoped>
::v-deep .el-upload-dragger {
    border: none;
    background-color: rgba(229, 231, 235, .5);
    border-radius: .5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}
</style>