<script setup lang="ts">
import SimpleLineChart from '@/components/echarts/SimpleLineChart.vue';
import TagWidget from '@/components/widget/TagWidget.vue';
import TextBarWidget from '@/components/widget/TextBarWidget.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const typeList = ref([
    {
        label: 'tiff',
        value: true
    },
    {
        label: 'word',
        value: true
    },
    {
        label: 'pdf',
        value: true
    },
])
const levelList = ref([
    {
        label: '公开',
        value: true
    },
    {
        label: '密码',
        value: true
    },
    {
        label: '指定用户',
        value: true
    },
])
const targetList = ref([
    {
        label: '招聘组',
        value: true
    }, {
        label: '新闻组',
        value: true
    }, {
        label: '技术组',
        value: true
    },
])

const fileName = ref(null)
const longText = '描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是'
</script>
<template>
    <TitleWidget :title="route.meta.label as string" />
    <div class="flex">
        <div class="w-40">
            <div class="font-bold mb-3">文件类型</div>
            <el-checkbox class="!block ml-4" v-for="item in typeList" :key="item.label" v-model="item.value"
                :label="item.label" />

            <div class="font-bold mb-3 mt-2">访问级别</div>
            <el-checkbox class="!block ml-4" v-for="item in levelList" :key="item.label" v-model="item.value"
                :label="item.label" />

            <div class="font-bold mb-3 mt-2">目标用户</div>
            <el-checkbox class="!block ml-4" v-for="item in targetList" :key="item.label" v-model="item.value"
                :label="item.label" />
        </div>
        <div class="w-[100%]">
            <div class="h-9 mb-6 flex items-center">
                <el-input v-model="fileName" class="!w-70 h-9" placeholder="请输入你需要搜索的内容">
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <search />
                        </el-icon>
                    </template>
                </el-input>
                <!-- <div class="ml-auto">hanbg</div> -->
            </div>
            <div class="flex px-4 py-3 mb-6 border-1 border-gray-300 rounded-lg" v-for="item in 3">
                <div class="bg-orange-200 w-30 h-40 rounded-lg mr-4" />
                <div class="w-[calc(100%-10rem-10rem-11rem)] flex flex-col justify-between">
                    <div class="flex font-bold">
                        <div class="mr-3">水利部1号指示文件</div>
                        <TagWidget label="指示文件" color="purple" />
                        <TagWidget label="公开" color="green" />
                    </div>
                    <div class="flex text-gray-500/80">
                        <div>张三上传</div>
                        <div>·</div>
                        <div>三个月前</div>
                    </div>
                    <TextBarWidget :rows="2" :text="longText" />
                    <div class="flex text-gray-400/80">
                        <div class="mr-6 bg-gray-300 rounded-lg px-3">100M</div>
                        <div>安徽省六安市</div>
                    </div>
                </div>
                <el-divider class="!h-40 !border-l-2 !mx-4" direction="vertical" />
                <div class="w-80">
                    <div class="font-bold mb-2">下载：1000</div>
                    <SimpleLineChart class="h-[calc(100%-2rem)]" />
                </div>
            </div>
            <el-pagination class="justify-end mt-4" background layout="total, prev, pager, next" :page-size="3"
                :total="20" />
        </div>
    </div>
</template>