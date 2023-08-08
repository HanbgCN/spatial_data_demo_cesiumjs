<script setup lang="ts">
import ItemBarWidget from '@/components/widget/ItemBarWidget.vue';

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    label1: {
        type: String,
        default: () => '负责人：'
    },
    value1: {
        type: String,
        required: true
    },
    label2: {
        type: String,
        default: () => '下属单位：'
    },
    value2: {
        type: String,
        required: true
    },
})
</script>
<template>
    <div class="w-50 bg-gray-300/40 rounded-xl p-4 flex flex-col items-center">
        <div class="font-bold text-lg mb-2">{{ props.title }}</div>
        <ItemBarWidget class="mb-2" :width="5" :label="props.label1" :value="props.value1" />
        <ItemBarWidget class="mb-2" :width="5" :label="props.label2" :value="props.value2" />
    </div>
</template>