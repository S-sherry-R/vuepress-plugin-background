import type { PluginObject } from 'vuepress';
interface BackOptions {
    type?: String;
    options?: Object;
}
declare const backPlugin: (options?: BackOptions) => () => PluginObject;
declare const BackOptions: BackOptions;
export { backPlugin };
