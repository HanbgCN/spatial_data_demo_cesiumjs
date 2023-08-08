<script setup lang="ts">
import { BEI_JING_LAT, BEI_JING_LON, BEI_JING_LON_LAT } from '@/utils/constant';
import type { PolygonHierarchy } from 'cesium';
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted, version } from 'vue'
import { RouterView } from 'vue-router';

defineProps<{
  msg: string
}>()

const initCesium = async () => {
  // Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDlkZTE3Mi02NDE3LTRlYWUtYTY4Ny1mODY1OWFiOWVmYTMiLCJpZCI6MTI2NTg4LCJpYXQiOjE2Nzc1NTYwNjF9.Jw6N8A3aQYf2SZLeurH1H5sx1ghh4-azXVBA9-xOqag'

  // const layerEarthAtNight = new Cesium.IonImageryProvider({ assetId: 3812 })

  const viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, // 动画调控组件 - default: true
    timeline: false, // 时间轴  - default: true
    baseLayerPicker: true, // 地图源选择组件
    // terrainProvider: new Cesium.CesiumTerrainProvider({
    //   url: Cesium.IonResource.fromAssetId(1)
    // })
    creditContainer: document.createElement('div'),
    navigationHelpButton: false
  })

  // 时间控制
  // viewer.clock.shouldAnimate = true
  // viewer.clock.multiplier = 1000 // 时间流逝倍数
  // const start = Cesium.JulianDate.fromIso8601('2023-03-14')
  // const end = Cesium.JulianDate.fromIso8601('2023-03-15')
  // viewer.timeline.zoomTo(start, end)

  // 加载文字
  const textEntity = viewer.entities.add({
    id: 'hamburger',
    position: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 400),
    label: {
      text: 'hamburger',
      font: '50px Helvetica',
      fillColor: Cesium.Color.SKYBLUE
    },
    description: `<div>hanbg_move_forward</div>`
  })

  // 鼠标事件处理
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction(function (movement: any) {
    console.log("🚀 ~ file: ThreeDView.vue:42 ~ movement:", movement)
    const pickedObject = viewer.scene.pick(movement.position)
    if (Cesium.defined(pickedObject) && (pickedObject.id.id === 'hamburger')) {
      console.log("🚀 ~ file: ThreeDView.vue:65 ~ viewer.infoBox.frame:", viewer.infoBox.frame)
      viewer.selectedEntity = textEntity
      console.log("🚀 ~ file: ThreeDView.vue:48 ~ textEntity:", viewer.selectedEntity === textEntity)

      // const position = viewer.scene.pickPosition(movement.position)
      // if (Cesium.defined(position)) {
      //   const message = textEntity.label?.text
      //   viewer.entities.add({
      //     position,
      //     description: message,
      //     billboard: {
      //       width: 32,
      //       height: 32
      //     }
      //   })
      // }
      // alert('欢迎点击Hamburger')
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  // const redPolygon = viewer.entities.add({
  //   polygon: {
  //     hierarchy: new Cesium.ConstantProperty(Cesium.Cartesian3.fromDegreesArray([116.39, 39.91, 116.39, 39.915, 116.395, 39.91])), // 此处api有所更新
  //     material: Cesium.Color.RED,
  //     extrudedHeight: 200
  //   }
  // })

  // const tileset = viewer.scene.primitives.add(
  //   new Cesium.Cesium3DTileset({
  //     // url: Cesium.IonResource.fromAssetId(96188)
  //     url: Cesium.IonResource.fromAssetId(75343)
  //   })
  // )
  // tileset.style = new Cesium.Cesium3DTileStyle({
  //   // color: "color('blue', 0.5)",
  //   // show: true,
  //   color: {
  //     conditions: [
  //       ['${Height} >= 300', 'rgba(45, 0, 75, 0.5)'],
  //       ['${Height} >= 200', 'rgba(102, 71, 151, 1)'],
  //       ['${Height} >= 100', 'rgba(170, 162, 204, 1)'],
  //       ['${Height} >= 50', 'rgba(224, 226, 238, 1)'],
  //       ['${Height} >= 25', 'rgba(252, 230, 200, 1)'],
  //       ['${Height} >= 10', 'rgba(248, 176, 87, 1)'],
  //       ['${Height} >= 5', 'rgba(198, 106, 11, 1)'],
  //       ['true', 'rgba(127, 59, 8, 1)'],
  //     ]
  //   },
  //   show: '${Height} >= 0'
  // })
  // viewer.camera.setView({
  //   // destination: Cesium.Cartesian3.fromDegrees(121.49, 31.23, 3000),
  //   destination: new Cesium.Cartesian3(1333597.2917, -4667718.2462, 4147626.3447),
  //   orientation: {
  //     heading: 0,
  //     pitch: -90,
  //     roll: 0,
  //   }
  // })

  // viewer.scene.globe.terrainProvider === viewer.terrainProvider
  // console.log("🚀 ~ file: ThreeDView.vue:28 ~ setTimeout ~ viewer.scene.globe.terrainProvider === viewer.terrainProvider:", viewer.scene.globe.terrainProvider === viewer.terrainProvider)

  // const imageLayers = viewer.imageryLayers
  // console.log("🚀 ~ file: ThreeDView.vue:25 ~ initCesium ~ imageLayers:", imageLayers)


  // const defaultImageryLayer = viewer.imageryLayers.get(0)
  // viewer.imageryLayers.remove(defaultImageryLayer)


  // viewer.imageryLayers.addImageryProvider(
  //   // new Cesium.IonImageryProvider({ assetId: 3813 })
  //   layerEarthAtNight
  // )

  // const entity = viewer.entities.add({
  //   position: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 400),
  //   point: {
  //     pixelSize: 100,
  //     color: new Cesium.Color(0, 1, 0, 1)
  //   }
  // })
  // viewer.trackedEntity = entity
  viewer.dataSources.add(
    Cesium.GeoJsonDataSource.load("/geoJson/example.topoJson")
  )


  // viewer.camera.setView({
  //   destination: Cesium.Cartesian3.fromDegrees(116.39, 39.91, 400),
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0),
  //     pitch: Cesium.Math.toRadians(-90),
  //     roll: 0
  //   }
  // })
  setTimeout(() => {

    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(116.39, 39.91, 400),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0),
    //     pitch: Cesium.Math.toRadians(-90),
    //     roll: 0
    //   },
    //   duration: 5
    // })

    // const center = Cesium.Cartesian3.fromDegrees(116.39, 39.9)
    // const heading = Cesium.Math.toRadians(50)
    // const pitch = Cesium.Math.toRadians(-90)
    // const range = 2500
    // viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range))

    // const position = Cesium.Cartesian3.fromDegrees(BEI_JING_LON, BEI_JING_LAT, 1500)
    // const orientation = Cesium.Transforms.headingPitchRollQuaternion(position, new Cesium.HeadingPitchRoll(-90, 0, 0))
    // const entity = viewer.entities.add({
    //   position,
    //   orientation: new Cesium.ConstantProperty(orientation),
    //   model: {
    //     uri: '/Models/CesiumAir/Cesium_Air.glb',
    //     minimumPixelSize: 100,
    //     maximumScale: 10000,
    //     show: true
    //   }
    // })
    // viewer.camera.viewBoundingSphere(new Cesium.BoundingSphere(position, 20), new Cesium.HeadingPitchRange(0, 0, 0))
  }, 3000);


  // viewer.scene.camera.setView({
  //   destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 1500)
  // })  

}

onMounted(() => {
  initCesium()
})
</script>

<template>
  <div class="">
    <div id="cesiumContainer" class="h-[100vh]"></div>
  </div>
</template>
