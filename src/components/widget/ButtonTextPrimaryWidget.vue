<script setup lang="ts">
import { computed } from 'vue';
const emit = defineEmits(['click'])
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default: () => false,
    },
    fontSize: {
        type: String,
        default: () => '0.9rem'
    }
})
const defaultColor = 'var(--color-text-func)';
const disabledColor = '#ccc !important'
const color = computed(() => props.disabled ? disabledColor : defaultColor)
const fontWeight = 'bold'

const handleClick = () => {
    !props.disabled && emit('click')
}
</script>
<template>
    <div class="mr-2 inline-block" @click="handleClick">
        <el-button link type="primary" :disabled="props.disabled" :style="{ color, fontWeight, fontSize }">{{
            props.label
        }}</el-button>
    </div>
</template>
