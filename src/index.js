import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backPlugin = (options) => {
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
