import 'babel-polyfill'
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'

// import VueWechatTitle from 'vue-wechat-title';
// Vue.use(VueWechatTitle)


Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import cache from '@/utils/cache'
cache.loadingCache()

import '@/permission' // permission control
import '@/styles/animate.css'

/** 事件传递 */
import VueBus from 'vue-bus'
Vue.use(VueBus)

/** 常用flex组件 */
import {
    Flexbox,
    FlexboxItem
} from '@/components/flexbox'
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

/** 懒加载图片 */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('@/assets/img/send_img.png'),
    loading: require('@/assets/img/loading.gif'),
    attempt: 1
})
import * as filters from './filters' // global filters
// 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// 处理时间的过滤器
Vue.use(require('vue-moment'))
import moment from 'moment'
moment.locale('zh_cn')

// 自定义全局点击空白处组件
import clickoutside from './directives'
Vue.directive('clickoutside', clickoutside)
import empty from './directives/empty'
Vue.use(empty)
import photo from './directives/photo'
Vue.use(photo)

// 表情
import {
    emoji
} from './utils/emoji'
Vue.prototype.emoji = emoji
Vue.config.productionTip = false

window.app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

//自定义函数库
Vue.prototype.randomString = function (len){//changeData是函数名
    var nowYear=new Date().getFullYear().toString()
    var nowMonth=(new Date().getMonth() + 1).toString()
    var nowDay=new Date().getDate().toString();
    var nowHours= new Date().getHours().toString();       //获取当前小时数(0-23)
    var nowMin= new Date().getMinutes().toString();     //获取当前分钟数(0-59)
    var nowSeconds= new Date().getSeconds().toString();     //获取当前秒数(0-59)
    var nowMilliseconds=new Date().getMilliseconds().toString()
    function timeAdd0(str) {
        if(str.length<=1){
            str='0'+str;
        }
        return str
    }
    nowYear=timeAdd0(nowYear);
    nowMonth=timeAdd0(nowMonth);
    nowDay=timeAdd0(nowDay);
    nowHours=timeAdd0(nowHours);
    nowMin=timeAdd0(nowMin);
    nowSeconds=timeAdd0(nowSeconds);
    nowMilliseconds=timeAdd0(nowMilliseconds);
    var len = len || 8;
    var $chars = '1234567890';
    var maxPos = $chars.length;
    var randomEndString = '';
    for (var i = 0; i < len; i++) {
        randomEndString += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    randomEndString = nowYear + nowMonth + nowDay + nowHours + nowMin + nowSeconds + nowMilliseconds + randomEndString;

    if(randomEndString.length<24){
        for(i = 0;i < (24 - randomEndString.length);i++){
            randomEndString += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
    }
    if(randomEndString.length>=24){
        randomEndString = randomEndString.substring(0,24);
    }
    return randomEndString;
}



