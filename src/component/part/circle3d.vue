<template>
  <div class="circle-bg">
      <div class="universe__earth"></div>
      <div class="universe__mars"></div>
      <div class="universe__venus"></div>
      <div class="chad"></div>
  </div>
</template>

<script lang="ts" setup>
//获取参数
const props=defineProps({
  options:{
    type:Object,
    default:()=>{
      return {
        color: [
          '#a33aff',
          '#fda34b',
          '#ff164b',
          '#0c1db8',
          '#ffffff',
        ]
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../style/circle3d.scss";
</style>
