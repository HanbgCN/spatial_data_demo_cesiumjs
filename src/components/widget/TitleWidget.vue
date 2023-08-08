<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: Boolean,
        default: () => true
    }
})
</script>
<template>
    <div class="flex items-center mb-6">
        <div v-if="icon" class="_icon w-1.4 h-7 mr-3 bg-indigo-600" />
        <div class="text-xl font-bold italic">{{ props.title }}</div>
    </div>
</template>