<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { gisRoutePaths } from '@/router/gis'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn

const route = useRoute()
</script>

<template>
  <el-config-provider :locale="locale">
    <template v-if="gisRoutePaths.includes(route.path)">
      <RouterView />
    </template>
    <template v-else>
      <RouterView />
    </template>
  </el-config-provider>
</template>
