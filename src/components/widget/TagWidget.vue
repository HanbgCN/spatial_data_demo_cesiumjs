<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';


type Color = 'green' | 'purple' | string
const props = defineProps({
    label: {
        required: true,
        type: String
    },
    color: {
        type: String as PropType<Color>,
        default: () => 'green'
    },
})
const colorMap = new Map()
colorMap.set('green', '#059669')
colorMap.set('purple', '#7c3aed')
const style = computed(() => {
    return {
        color: colorMap.get(props.color) ?? props.color
    }
})
</script>
<template>
    <div class="mr-3 bg-gray-300/30 rounded-full px-3" :style="style">{{ props.label }}</div>
</template>