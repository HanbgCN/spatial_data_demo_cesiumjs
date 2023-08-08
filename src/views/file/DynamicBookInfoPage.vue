<script setup lang="ts">
import ItemBarWidget from '@/components/widget/ItemBarWidget.vue';
import ButtonTextPrimaryWidget from '@/components/widget/ButtonTextPrimaryWidget.vue';

const tableData = [
    {
        date: '1',
        name: 'Tom',
        address: '研发组',
    },
    {
        date: '2',
        name: 'Tom',
        address: '研发组',
    },
    {
        date: '3',
        name: 'Tom',
        address: '研发组',
    },
    {
        date: '4',
        name: 'Tom',
        address: '研发组',
    },
]
</script>
<template>
    <TitleWidget class="mt-4" title="黄河流域（片）部批生产建设项目水土保持监管动态台账" />
    <ItemBarWidget class="mb-2" :width="5" label="监管事项：" value="在建部批生产建设项目水土保持监督检查" />
    <ItemBarWidget class="mb-2" :width="5" label="工作要求：" value="在建部批生产建设项目水土保持监督检查" />
    <ItemBarWidget class="mb-2" :width="5" label="拥有者：" value="在建部批生产建设项目水土保持监督检查" />
    <ItemBarWidget class="mb-2" :width="5" label="成员：">
        <div class="flex items-center">
            <div class="mr-4">李四、王五</div>
            <ButtonTextPrimaryWidget class="transform -translate-y-2px" font-size="15px" label="邀请协作？" />
        </div>
    </ItemBarWidget>
    <ItemBarWidget class="mb-2" :width="5" label="作业年：" value="在建部批生产建设项目水土保持监督检查" />
    <ItemBarWidget class="mb-6" :width="5" label="备注：" value="在建部批生产建设项目水土保持监督检查" />

    <div class="flex items-end mb-4">
        <TitleWidget class="mt-4" title="台账明细" />
        <ButtonPrimaryWidget class="ml-auto" label="添加明细" @click="setCreateVisible(true)" />
    </div>
    <el-table :data="tableData" stripe border>
        <el-table-column prop="date" label="序号" align="center" width="60" />
        <el-table-column prop="name" label="监管事项" align="center" width="100" />
        <el-table-column prop="address" label="承担单位或部门" align="center" />
        <el-table-column label="1月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="上传？" />
            </template>
        </el-table-column>
        <el-table-column label="2月" align="center">
            <template v-slot="{ row }">
                <div>16日印发检查意见</div>
            </template>
        </el-table-column>
        <el-table-column label="3月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="上传？" />
            </template>
        </el-table-column>
        <el-table-column label="4月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="5月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="6月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="7月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="8月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="9月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="10月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="11月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column label="12月" align="center">
            <template v-slot="{ row }">
                <ButtonTextPrimaryWidget label="检查意见" />
            </template>
        </el-table-column>
        <el-table-column prop="address" label="备注" align="center" />
    </el-table>
    <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="3" :total="20" />
</template>