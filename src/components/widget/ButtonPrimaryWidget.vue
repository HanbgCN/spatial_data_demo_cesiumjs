<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div>
        <el-button color="#2678FF">{{ props.label }}</el-button>
    </div>
</template>