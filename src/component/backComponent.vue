<template>
  <circle3d v-if="type==='circle3d'" :options="options"></circle3d>
  <square v-if="type==='square'" :options="options"></square>
</template>

<script lang="ts" setup>
//引入组件
import Circle3d from "./part/circle3d.vue";
import Square from "./part/square.vue";
import {ref} from 'vue';
// 获取参数
const type = ref(BackOptions.type)
const options = ref(BackOptions.options)
console.log('vuepress-plugin-background')
</script>

<style scoped>

</style>
