import { defineUserConfig } from 'vuepress';
import { backPlugin } from '../../src/index';
export default defineUserConfig({
  plugins: [backPlugin({
    type: 'normalLine',
    options: {
      backColor:'#36849b'
    }
  }),]
});
