<script setup lang="ts">
import FunctionPannel from '@/components/gis/FunctionPannel.vue';
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import '@/assets/cesium.css'
import { onMounted } from 'vue';
// import { getWFSUrl } from '@/utils/gis';

defineProps<{
    msg: string
}>()

let viewer: Cesium.Viewer;

const entityMap = new Map<string, Cesium.Entity>()

const initCesium = async (url?: string) => {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDlkZTE3Mi02NDE3LTRlYWUtYTY4Ny1mODY1OWFiOWVmYTMiLCJpZCI6MTI2NTg4LCJpYXQiOjE2Nzc1NTYwNjF9.Jw6N8A3aQYf2SZLeurH1H5sx1ghh4-azXVBA9-xOqag'
    let baseLayerProvider;
    if (url) {
        baseLayerProvider = new Cesium.ArcGisMapServerImageryProvider({
            url
        })
    }
    viewer = new Cesium.Viewer('cesiumContainer', Object.assign({
        animation: false, // 动画调控组件 - default: true
        timeline: false, // 时间轴  - default: true
        baseLayerPicker: false, // 地图源选择组件
        homeButton: false,
        sceneModePicker: false,
        geocoder: false,
        creditContainer: document.createElement('div'),
        navigationHelpButton: false,
    }, baseLayerProvider && {
        imageryProvider: baseLayerProvider
    },))
    const selectionIndicator = new Cesium.SelectionIndicator('cesiumContainer', viewer.scene);
    window.viewer = viewer
    window.selectionIndicator = selectionIndicator
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(116.390055, 39.916345, 5000)
    })
    viewer.infoBox.viewModel.showInfo = false;


    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    handler.setInputAction(function (click: any) {
        const pickedObject = viewer.scene.pick(click.position)
        let entity: Cesium.Entity;
        if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
            entity = pickedObject.id
            if (!entityMap.get(entity.id)) {
                entityMap.set(entity.id, entity)
            }
            if (entity.polygon) {
                entity.polygon.material = new Cesium.ColorMaterialProperty(Cesium.Color.RED.withAlpha(0.5))
                entity.polygon.outlineColor = new Cesium.ConstantProperty(Cesium.Color.RED.withAlpha(0.5))
            }
            entity.polyline && (entity.polyline.material = new Cesium.ColorMaterialProperty(Cesium.Color.RED.withAlpha(0.5)))
            // entity.point && (entity.point.color = new Cesium.ColorMaterialProperty(Cesium.Color.RED))
        }
        const entities = Array.from(entityMap.values())
        entities.forEach(_entity => {
            if (_entity.id !== entity.id) {
                if (_entity.polygon) {
                    _entity.polygon.material = new Cesium.ColorMaterialProperty(Cesium.Color.YELLOW.withAlpha(0.5))
                    _entity.polygon.outlineColor = new Cesium.ConstantProperty(Cesium.Color.YELLOW.withAlpha(0.5))
                }
                _entity.polyline && (_entity.polyline.material = new Cesium.ColorMaterialProperty(Cesium.Color.YELLOW.withAlpha(0.5)))
            }
        })
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

    // 创建WFS数据源
    // var wfsDataSource = new Cesium.GeoJsonDataSource();
    // const wfsUrl = getWFSUrl('sf:archsites')
    // await wfsDataSource.load(wfsUrl, {
    //     stroke: Cesium.Color.YELLOW,
    //     fill: Cesium.Color.YELLOW.withAlpha(0.5),
    //     strokeWidth: 3
    // })
    // const entities = wfsDataSource.entities.values
    // entities.forEach(entity => {
    //     if (entity.position) {
    //         entity.point = {
    //             color: new Cesium.ColorMaterialProperty(Cesium.Color.RED),
    //             pixelSize: new Cesium.ConstantProperty(10),
    //             outlineColor: new Cesium.ColorMaterialProperty(Cesium.Color.RED),
    //             outlineWidth: new Cesium.ConstantProperty(2)
    //         }
    //     }
    //     if (entity.point) {
    //         entity.point.color = new Cesium.ColorMaterialProperty(Cesium.Color.RED);
    //         entity.point.pixelSize = new Cesium.ConstantProperty(10);
    //         entity.point.outlineColor = new Cesium.ColorMaterialProperty(Cesium.Color.RED);
    //         entity.point.outlineWidth = new Cesium.ConstantProperty(2);
    //     }
    // })

    // 添加WFS数据源到场景中
    // viewer.dataSources.add(wfsDataSource);
}

onMounted(() => {
    // const url = 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
    // initCesium(url)
    initCesium()
    // try {
    //     initCesium()
    // }
    // catch (err) {
    //     console.log("🚀 ~ file: ThreeDView.vue:43 ~ onMounted ~ err:", err)
    //     const url = 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
    //     initCesium(url)
    // }
})
</script>

<template>
    <div class="">
        <div id="cesiumContainer" class="h-[100vh]"></div>
        <FunctionPannel />
    </div>
</template>
