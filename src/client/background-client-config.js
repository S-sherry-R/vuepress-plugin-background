import { defineClientConfig } from '@vuepress/client';
import backComponent from '../component/backComponent.vue';
import Particles from 'particles.vue3';
export default defineClientConfig({
  rootComponents: [backComponent],
  enhance({ app }) {
    app.use(Particles)
  },
});
