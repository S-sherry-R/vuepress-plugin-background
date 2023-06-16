<template>
  <component :is="componentPath"></component>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue';
const type = BackOptions.type
const componentPath = defineAsyncComponent(()=>import('./'+type+'.vue'))
</script>

<style scoped>

</style>
