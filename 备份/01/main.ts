//引入createApp函数，创建Vue应用实例
import {createApp} from 'vue';
//引入根组件App
import App from './App.vue';
//创建Vue应用实例，并将其挂载到id为app的DOM元素上

createApp(App).mount('#app');