<template>
  <div class="square-bg">
  </div>
  <ul class="square-ul" :style="{right: props.options.position.right,top: props.options.position.top}">
    <li v-for="index in 5" :key="index" :style="{background:props.options.color[index]}">
      <span v-if="index<2" class="upLine"></span>
      <span v-if="index<2" class="downLine"></span>
      <span v-if="index>=2" class="leftLine"></span>
      <span v-if="index>=2" class="rightLine"></span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
//获取参数
const props=defineProps({
  options:{
    type:Object,
    default:()=>{
      return {
        position:{right: '50px',top:'100px'},
        color: [
          'rgba(171, 221, 164,0.4)',
          'rgba(102, 194, 165,0.4)',
          'rgba(50, 136, 189,0.4)',
          'rgba(254, 224, 139,0.4)',
          'rgba(244, 109, 67,0.4)',
          'rgba(213, 62, 79,0.4)',
        ]
      }
    }
  }
})
</script>
<style scoped lang="scss">
@import "../../style/square.scss";
</style>
