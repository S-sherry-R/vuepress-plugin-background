<template>
<!--  <component :is="componentPath"></component>-->
  <square v-if="type==='square'"></square>
  <normal-line v-if="type==='normalLine'"></normal-line>
</template>

<script lang="ts" setup>
import square from './part/square.vue'
import normalLine from './part/normalLine.vue'
// import Square from "@/component/part/square.vue";
// import NormalLine from "@/component/part/normalLine.vue";
// import {defineAsyncComponent} from 'vue';
const type = BackOptions.type
// const backUrl = import.meta.url
// const comUrl = backUrl.slice(0,backUrl.indexOf('backComponent'))
// const componentPath = defineAsyncComponent(()=>{return import(comUrl+'part/'+type+'.vue')})
</script>

<style scoped>

</style>
