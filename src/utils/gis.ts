import * as Cesium from 'cesium'

export const DEFAULT_ALTITUDE = 5000
export const MOVE_FAST = 3
export const MOVE_SLOW = 5
export enum PROVIDER_TYPE {
  WMTS,
  WMS,
  WFS
}

export const wmsUrl = 'http://81.69.14.64:8080/geoserver/demo/wms'
export const getWMSLayer = (layerName: string) => {
  return new Cesium.WebMapServiceImageryProvider({
    url: wmsUrl,
    layers: layerName,
    parameters: {
      service: 'WMS',
      format: 'image/png',
      transparent: true
    }
  })
}

export const wmtsUrl = 'http://81.69.14.64:8080/geoserver/gwc/service/wmts'
export const MAXIMUM_LEVEL = 30
export const tileMatrixLabels = Array.from({ length: MAXIMUM_LEVEL + 1 }, (_, i) => i).map(
  (key) => `EPSG:900913:${key}`
)
export const getWMTSLayer = (layerName: string) => {
  return new Cesium.WebMapTileServiceImageryProvider({
    url: wmtsUrl,
    layer: layerName,
    style: '',
    format: 'image/png',
    tileMatrixSetID: 'EPSG:900913',
    tileMatrixLabels,
    maximumLevel: MAXIMUM_LEVEL
  })
}

export const wfsUrl = 'http://81.69.14.64:8080/geoserver/wfs'
export const getWFSUrl = (layerName: string) => {
  const wfsOptions: Record<string, string> = {
    service: 'WFS',
    version: '1.1.0',
    request: 'GetFeature',
    typeName: layerName,
    outputFormat: 'application/json'
  }
  const wfsUrlWithParams =
    wfsUrl +
    '?' +
    Object.keys(wfsOptions)
      .map((key) => {
        return key + '=' + wfsOptions[key]
      })
      .join('&')
  return wfsUrlWithParams
}

export const logCoordinates = (e: MouseEvent) => {
  const mousePosition = new Cesium.Cartesian2(e.clientX, e.clientY)
  const ellipsoid = window.viewer.scene.globe.ellipsoid
  const cartesian = window.viewer.camera.pickEllipsoid(mousePosition, ellipsoid)
  if (cartesian) {
    const cartographic = ellipsoid.cartesianToCartographic(cartesian)
    const longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4)
    const latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4)
    console.log(`Longitude:${longitudeString},${latitudeString}`)
  }
}
