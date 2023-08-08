<script setup lang="ts">
import { ref } from 'vue'
const title = ref('黄委水土保持综合管理平台')
</script>

<template>
    <div class="bg-slate-600 pl-6 pr-6 flex items-center text-white">
        <div class="icon mr-2">icon</div>
        <div class="text-xl font-semibold">{{ title }}</div>

        <div class="ml-auto icon mr-2">icon</div>
        <div class="text-base font-semibold">账户设置</div>

        <RouterLink class="ml-4 text-base font-semibold cursor-pointer" to="/gis/index">ThreeDemo</RouterLink>
        
        <div class="icon ml-6 mr-2">icon</div>
        <div class="text-base font-semibold">登出</div>
    </div>
</template>
