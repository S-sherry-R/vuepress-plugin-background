import type { PluginObject } from 'vuepress';
interface BackOptions {
    position?: object;
    color?: string[];
}
declare const backPlugin: (options?: BackOptions) => () => PluginObject;
declare const BackOptions: BackOptions;
export { backPlugin };
