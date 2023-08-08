import { computed } from 'vue';
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        default: () => ''
    },
    rows: {
        type: Number,
        default: () => 1
    }
})
const style = computed(() => {
    return {
        width: props.width,
        '-webkit-line-clamp': props.rows
    }
})
</script>
<template>
    <div class="-text-box" :style="style">{{ props.text }}</div>
</template>

<style>
.-text-box {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>