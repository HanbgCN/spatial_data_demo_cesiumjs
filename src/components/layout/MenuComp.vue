<script setup lang="ts">
import { adminRoutes } from '@/router/admin'
import MenuItem from './MenuItem.vue';
import { useRouter } from 'vue-router';
import type { Route } from '@/types/Route';
const router = useRouter()

const handleClick = (route: Route) => {
    router.push(route.path)
}
</script>
<template>
    <div class="border-r-1 border-gray-300">
        <div v-for="routeList in adminRoutes" :key="routeList.name">
            <div v-if="routeList.meta.label" class="p-2 pt-4 pb-1 flex justify-center font-bold text-base cursor-pointer"
                @click="handleClick(routeList as unknown as Route)">
                {{
                    routeList.meta.label }}</div>
            <MenuItem v-for="route in routeList?.children ?? []" :key="route.name" :route="route" class="w-[100%]" />
        </div>
    </div>
</template>