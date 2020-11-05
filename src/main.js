// 入口文件,主要是引入vue框架，根组件及路由设置，并且定义vue实例

// 导入vue框架
import Vue from 'vue'
// 路由设置
import VueRouter from 'vue-router'

import VueResource from 'vue-resource'
// 引入根组件
import App from './App'

import Home from './components/Home'
import store from './store/index'
// import LogTime from './components/LogTime.vue'

import TimeEntries from './components/TimeEntries.vue'
import 'bootstrap/dist/css/bootstrap.css'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component: TimeEntries
},{
  path : '/time-entries',
  component : TimeEntries,
  children :[{
    path : 'log-time', 
    //component : LogTime
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  ...App, // 根组件
})
