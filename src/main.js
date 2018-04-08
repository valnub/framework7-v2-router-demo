import Vue from 'vue';
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';
import Framework7Styles from 'framework7/dist/css/framework7.css';
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';
import Routes from './routes.js'
import App from './app';

Vue.use(Framework7Vue, Framework7)

new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    routes: Routes,
    pushState: true,
  },
  // Register App Component
  components: {
    app: App
  }
});
