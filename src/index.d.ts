import type { PluginObject } from 'vuepress';
interface BackOptions {
    options?: object;
    type?: string;
}
declare const backPlugin: (options?: BackOptions) => () => PluginObject;
declare const BackOptions: BackOptions;
export { backPlugin };
