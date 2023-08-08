<script setup lang="ts">
import type { Route } from '../../types/Route';
import { useRouter, useRoute } from 'vue-router';
import { computed, type CSSProperties } from 'vue';
const props = defineProps({
    route: {
        type: Object as () => Route,
        default: () => ({} as Route)
    }
})
const router = useRouter()
const route = useRoute()
const handleClick = () => {
    router.push(props.route.path)
}
const style = computed(() => {
    if (route.path === props.route.path)
        return {
            color: 'var(--color-text-func)',
            fontWeight: 'bold'
        }
    return {}
})
</script>
<template>
    <div class="p-2 pt-4 pb-1 flex justify-center" :style="style as CSSProperties">
        <div class="mr-1 cursor-pointer" @click="handleClick">{{ props.route.icon }}</div>
        <div class="text-base cursor-pointer" @click="handleClick">{{ props.route.meta.label }}</div>
    </div>
</template>