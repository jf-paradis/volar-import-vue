import BarNone from './BarNone.vue';
import FooBar from './FooBar.vue';
import { VueConstructor } from 'vue';

export default {
  install(app: VueConstructor) {
    app.component('BarNone', BarNone);
    app.component('FooBar', FooBar);
  }
};
