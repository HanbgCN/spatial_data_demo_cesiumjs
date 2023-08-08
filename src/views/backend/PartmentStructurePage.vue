<script setup lang="ts">
import TitleWidget from '@/components/widget/TitleWidget.vue'
import StructureCell from '@/components/structure/StructureCell.vue';
import { useRoute } from 'vue-router';
const route = useRoute()

</script>
<template>
    <TitleWidget :title="route.meta.label as string" />
    <div class="p-8 flex items-center">
        <div class="mr-20">
            <StructureCell title="郑州黄委" value1="张三" value2="10个" />
        </div>
        <div class="mr-20">
            <StructureCell class="mb-12" title="招聘部" value1="杨幂" value2="10个" />
            <StructureCell class="mb-12" title="新闻部" value1="胡歌" value2="10个" />
            <StructureCell class="mb-12" title="技术部" value1="雷军" value2="10个" />
            <StructureCell title="实施部" value1="李雪健" value2="10个" />
        </div>
        <div>
            <StructureCell class="mb-12" title="网络安全组" value1="胡雅" label2="组员数：" value2="10个" />
            <StructureCell class="mb-12" title="开发组" value1="李彦宏" label2="组员数：" value2="10个" />
            <StructureCell title="测试组" value1="张四" label2="组员数：" value2="10个" />
        </div>
    </div>
</template>