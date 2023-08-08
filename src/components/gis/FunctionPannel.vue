<script setup lang="ts">
import { DEFAULT_ALTITUDE, MOVE_FAST, PROVIDER_TYPE, getWMSLayer, getWMTSLayer } from '@/utils/gis';
import type { ImageryLayer, WebMapServiceImageryProvider, WebMapTileServiceImageryProvider } from 'cesium';
import { ref, computed, toRaw } from 'vue';
import * as Cesium from 'cesium';
import { getWFSUrl } from '../../utils/gis';

interface Layer {
    layerName: string,
    name: string,
    type: PROVIDER_TYPE,
    longitude: number,
    latitude: number,
    heightTimes: number
}

const layerList = [
    {
        name: '无人机1号',
        layerName: 'demo:wurenji1',
        type: PROVIDER_TYPE.WMTS,
        longitude: 109.7662,
        latitude: 18.4264,
        heightTimes: 1
    },
    {
        name: '无人机2号',
        layerName: 'demo:无人机2号',
        type: PROVIDER_TYPE.WMTS,
        longitude: 109.7742,
        latitude: 18.4398,
        heightTimes: 1
    },
    {
        name: '海南省三亚市吉阳区',
        layerName: 'demo:海南省三亚市吉阳区',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.6711,
        latitude: 18.3761,
        heightTimes: 5
    },
    {
        name: '天涯去除育才和点',
        layerName: 'demo:天涯去除育才和点',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.4859,
        latitude: 18.2416,
        heightTimes: 5
    },
    {
        name: '海南省三亚市天涯区',
        layerName: 'demo:海南省三亚市天涯区',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.4978,
        latitude: 18.2776,
        heightTimes: 5
    },
    {
        name: '海南省三亚市崖州区',
        layerName: 'demo:海南省三亚市崖州区',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.0094,
        latitude: 18.3620,
        heightTimes: 5
    },
    {
        name: '海南省三亚市海棠区',
        layerName: 'demo:海南省三亚市海棠区',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.6868,
        latitude: 18.2497,
        heightTimes: 5
    },
    {
        name: '海南省育才生态保护区',
        layerName: 'demo:海南省育才生态保护区',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.1833,
        latitude: 18.4970,
        heightTimes: 5,
    },
    {
        name: '育才区域',
        layerName: 'demo:育才区域',
        type: PROVIDER_TYPE.WFS,
        longitude: 109.1831,
        latitude: 18.4977,
        heightTimes: 5
    }
]

let WFSDataSource;

const selectedLayer = ref('')

const addLoading = ref(false)
const collapse = ref(true)

const serverMap = new Map<string, WebMapServiceImageryProvider | WebMapTileServiceImageryProvider>
const layerMap = ref(new Map<string, ImageryLayer | Cesium.DataSource>())

const layers = computed(() => {
    const names = Array.from(layerMap.value.keys())
    const list: Layer[] = []
    names.forEach(layerName => {
        const layerItem = layerList.find(layer => layer.layerName === layerName)
        layerItem && list.push(layerItem)
    })
    return list
})

const freeLayerList = computed(() => layerList.filter(layer => !layers.value.find(_layer => layer.layerName === _layer.layerName)))

const handleAdd = async () => {
    const layerName = selectedLayer.value
    if (layerMap.value.get(layerName)) return

    const layerItem = layerList.find(layer => layer.layerName === selectedLayer.value)
    if (!layerItem) return

    let provider
    let WFSUrl
    let layer: Cesium.DataSource | ImageryLayer
    addLoading.value = true
    switch (layerItem.type) {
        case PROVIDER_TYPE.WMS:
            provider = getWMSLayer(layerName)
            !serverMap.get(layerName) && serverMap.set(layerName, provider)
            layer = window.viewer.imageryLayers.addImageryProvider(provider)
            layerMap.value.set(layerName, layer)
            selectedLayer.value = ''
            addLoading.value = false
            break;
        case PROVIDER_TYPE.WMTS:
            provider = getWMTSLayer(layerName)
            !serverMap.get(layerName) && serverMap.set(layerName, provider)
            layer = window.viewer.imageryLayers.addImageryProvider(provider)
            layerMap.value.set(layerName, layer)
            selectedLayer.value = ''
            addLoading.value = false
            break;
        case PROVIDER_TYPE.WFS:
            WFSUrl = getWFSUrl(layerItem.layerName)
            WFSDataSource = new Cesium.GeoJsonDataSource()
            await WFSDataSource.load(WFSUrl, {
                stroke: Cesium.Color.YELLOW,
                fill: Cesium.Color.YELLOW.withAlpha(0.5),
                strokeWidth: 3
            })
            layer = await window.viewer.dataSources.add(WFSDataSource)
            layerMap.value.set(layerName, layer)
            selectedLayer.value = ''
            addLoading.value = false
            break;
        default:
            console.log("error! no type matched!")
            addLoading.value = false
            break;
    }
}

const handleView = (layerItem: Layer) => {
    window.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(layerItem.longitude, layerItem.latitude, layerItem.heightTimes * DEFAULT_ALTITUDE),
        duration: MOVE_FAST
    })
}

const handleRemove = (layerItem: Layer) => {
    const layerName = layerItem.layerName
    const layer = toRaw(layerMap.value).get(layerName)
    if (layer) {
        try {
            window.viewer.dataSources.remove(layer as Cesium.DataSource)
            window.viewer.imageryLayers.remove(layer as ImageryLayer)
        } catch (err) {
            console.log('oops! remove err', err)
        }
        layerMap.value.delete(layerName)
    }
}
</script>

<template>
    <div class="fixed right-1 bottom-30 h-80">
        <el-icon :size="30" color="white" class="absolute -left-6 top-[50%] cursor-pointer"
            :class="collapse ? '!hidden' : ''">
            <CaretRight @click="collapse = !collapse" />
        </el-icon>
        <el-icon :size="30" color="white" class="absolute -left-0 top-[50%] cursor-pointer"
            :class="collapse ? '' : '!hidden'">
            <CaretLeft @click="collapse = !collapse" />
        </el-icon>
        <div class="bg-white bg-opacity-40 px-4 pt-4 rounded-md" :class="collapse ? 'hidden' : ''">
            <div class="flex items-center mb-2">
                <el-select v-model="selectedLayer" class="mr-2 w-[16rem]" placeholder="请选择图层" size="middle">
                    <el-option v-for="item in freeLayerList" :key="item.layerName" :label="item.name"
                        :value="item.layerName" />
                </el-select>
                <el-button class="w-[8rem]" @click="handleAdd" type="primary" :loading="addLoading">添加</el-button>
            </div>

            <div class="h-58 overflow-y-auto pr-2">
                <div class="flex items-center pb-2" v-for="layer in layers" :key="layer.name">
                    <div
                        class="bg-white px-4 py-1 rounded-md w-[16rem] overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {{
                            layer.name }}</div>
                    <el-button type="info" class="ml-2" @click="handleView(layer)">查看</el-button>
                    <el-button type="danger" class="!ml-2" @click="handleRemove(layer)">移除</el-button>
                </div>
            </div>

        </div>
    </div>
</template>