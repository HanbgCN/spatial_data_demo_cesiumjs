<script setup lang="ts">
import ContainerComp from '@/components/layout/ContainerComp.vue';
import HeaderComp from '@/components/layout/HeaderComp.vue'
import MenuComp from '@/components/layout/MenuComp.vue'

</script>
<template>
  <div class="">
    <HeaderComp class="h-[4rem]" />
    <div class="flex">
      <MenuComp class="w-60 h-[calc(100vh-4rem)]" />
      <ContainerComp class="w-[calc(100%-15rem)]" />
    </div>
  </div>
</template>

