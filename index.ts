import { getDirname, path } from '@vuepress/utils'
// @ts-ignore
const __dirname = getDirname(import.meta.url)
//全局常量
interface BackOptions {
  position?: object;
  color?: string[];
}
const backPlugin =(options:BackOptions={
  position:{right: '50px',top:'100px'},
  color: [
    'rgba(171, 221, 164,0.4)',
    'rgba(102, 194, 165,0.4)',
    'rgba(50, 136, 189,0.4)',
    'rgba(254, 224, 139,0.4)',
    'rgba(244, 109, 67,0.4)',
    'rgba(213, 62, 79,0.4)',
  ]
  })=>{
  return (app)=>{
    return {
      name: 'vuepress-plugin-background',
      multiple: false,
      define: {
        backgroundOptions: options,
      },
      clientConfigFile: path.resolve(__dirname, './client/background-client-config.ts'),
    }
  }
}
export { backPlugin };
