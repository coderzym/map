import Vue from 'vue'
import App from './App.vue'

// 引入高德地图API
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '393a9d6c5466a3d8c7ddf45e54d7ca7c',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
