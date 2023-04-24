import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backPlugin = (options={
  position:{right: '50px',top:'100px'},
  color: [
    'rgba(171, 221, 164,0.4)',
    'rgba(102, 194, 165,0.4)',
    'rgba(50, 136, 189,0.4)',
    'rgba(254, 224, 139,0.4)',
    'rgba(244, 109, 67,0.4)',
    'rgba(213, 62, 79,0.4)',
  ]
}) => {
  return function () {
    const backPath = path.resolve(__dirname, './client/background-client-config.js').replaceAll('\\', '/');
    return {
      name: 'vuepress-plugin-background',
      define: {
        BackOptions: options
      },
      multiple: false,
      clientConfigFile: backPath
    };
  };
};
export { backPlugin };
