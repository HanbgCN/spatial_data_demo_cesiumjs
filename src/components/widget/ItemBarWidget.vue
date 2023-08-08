<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: () => ''
    },
    value: {
        type: String,
    },
    width: {
        type: Number,
        default: () => 4
    }
})
</script>
<template>
    <div class="flex">
        <div class="font-bold mr-4 text-right" :style="`width: ${props.width}rem`">{{ props.label }}</div>
        <div>
            <span v-if="props.value">{{ props.value }}</span>
            <slot v-else />
        </div>
    </div>
</template>