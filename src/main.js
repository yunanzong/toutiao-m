import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 这是一个移动端的项目，需要把使用一个移动端的组件vant，这里引入vant */
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'

createApp(App).use(store).use(router).use(Vant).mount('#app')
