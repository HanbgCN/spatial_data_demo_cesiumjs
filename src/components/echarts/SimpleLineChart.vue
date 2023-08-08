<script setup lang="ts">
import { getRandomString } from '@/utils/tools';
import * as echarts from 'echarts';
import { onMounted } from 'vue';

const domId = getRandomString()

const initEchart = () => {
    const dom = document.getElementById(domId)
    const chart = echarts.init(dom!)

    const option = {
        grid: {
            top: 10,
            right: 0,
            bottom: 20,
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            minInterval: 1,
            splitNumber: 3,
        },
        series: [
            {
                data: [1, 230, 224, 18, 135, 147, 260],
                type: 'line',
                symbol: 'none'
            }
        ]
    }
    option && chart.setOption(option)
}

onMounted(() => {
    initEchart()
})
</script>
<template>
    <div :id="domId" />
</template>