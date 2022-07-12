import { createApp } from 'vue'
import App from './App.vue'
import store from './store/ index'
import router from '@/router';

// 创建vue实例
const app = createApp(App)

// 挂载pinia
app.use(store)

app.use(router);

// 挂载实例
app.mount('#app');
