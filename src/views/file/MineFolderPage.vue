<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useToggle } from "@vueuse/core";
import DialogCreateFolderVue from './Dialog/DialogCreateFolder.vue';

const route = useRoute()
const [createVisible, setCreateVisible] = useToggle(false)

const percentage = ref(9)
const stateColor = computed(() => {
    if (percentage.value < 25) {
        return '#10b981'
    } else if (percentage.value < 50) {
        return '#84cc16'
    } else if (percentage.value < 75) {
        return '#f59e0b'
    } else if (percentage.value < 90) {
        return '#f43f5e'
    } else {
        return '#dc2626'
    }
})
</script>
<template>
    <div class="flex">
        <TitleWidget :title="route.meta.label as string" />
        <ButtonPrimaryWidget class="ml-auto transform translate-y-2" label="添加文件夹" @click="setCreateVisible(true)" />
    </div>
    <div class="mb-4">已使用空间 1024.55MB (需要更多空间？)</div>
    <el-progress class="mb-2" :text-inside="true" :stroke-width="18" :percentage="percentage" :color="stateColor" />
    <div class="flex mb-6">
        <div class="ml-auto">2048MB</div>
    </div>

    <div class="grid grid-cols-5 grid-rows-2 gap-x-20 gap-y-10 h-[55vh]">
        <div v-for="item in 10">
            <div class="h-[83%] rounded-lg p-3 bg-gray-200/50 mb-2"></div>
            <div class="text-center">影像文件夹</div>
        </div>
    </div>
    <el-pagination class="justify-end mt-8" background layout="total, prev, pager, next" :page-size="3" :total="20" />

    <DialogCreateFolderVue v-if="createVisible" v-model="createVisible" @cancel="setCreateVisible(false)" />
</template>