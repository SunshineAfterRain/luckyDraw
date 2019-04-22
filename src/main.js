import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
const { $Toast } = require('../static/iview/base/index')
Vue.prototype.$Toast = function(option){
    $Toast(option)
    setTimeout(() => {
        $Toast.hide();
      }, 1500);
}
const app = new Vue(App)
app.$mount()
