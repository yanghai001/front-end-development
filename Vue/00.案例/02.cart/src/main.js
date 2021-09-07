import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'

// 导入bootstrap.css
import './assets/css/bootstrap.min.css'
// 导入axios
import axios from 'axios'

// 改造vue实例化方法
// createApp(App).mount('#app')
const app = createApp(App)
// 配置axios请求的根路径
axios.defaults.baseURL = 'https://www.escook.cn'
// 将axios挂载为全局的$http自定义属性
app.config.globalProperties.$http = axios
app.mount('#app')