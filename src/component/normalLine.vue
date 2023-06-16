<template>
  <Particles
      style="height: 100%;width:100%"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
  />
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { loadFull } from "tsparticles";
const options =ref({
  // background：color,image,opacity,position,repeat,size
  background: {
    color: {
      value: '#0e0e0e'
    },
  },
  //cssStyle
  style:{
    height:'100%',
    width:'100%',
    position:'absolute',
  },
  //应用于所有粒子动画的“每秒帧数”限制
  fpsLimit: 120,
  //设置动画是自动启动还是手动启动
  //autoPlay:boolean
  //背景遮罩选项，画布后面的内容将被隐藏，粒子将揭开它
  //backgroundMask:{composite,cover,enable}
  //开始动画之前的初始延迟
  //delay:number
  //启用视网膜检测，如果禁用，画布使用的比率将始终为1，而不是设备设置。
  detectRetina: true,
  //粒子效果持续时间（秒），然后容器将被破坏
  //duration: 2,
  //设置粒子画布的动画背景模式，使其位于后面
  //fullScreen:boolean
  //粒子交互选项
  interactivity: {
    //将检测鼠标事件的位置如果设置为仅'canvas'，则将以粒子画布为目标,如果设置为'parent'，则将目标为粒子画布父对象,如果设置为'window'，则将每个区域作为目标
    //detectsOn:window,canvas,parent
    //交互事件选项，用于配置启用了哪些事件以及应使用哪些模式
    events: {
      onClick: {
        //此属性启用或禁用单击事件
        enable: true,
        //此属性包含ClickMode值或这些值的数组。如果此值是一个数组，则单击时将使用每个模式。
        //attract,bubble,pause,push,remove,repulse,trail,emitter,absorber
        mode: 'push'
      },
      // onDiv:{
      //   enable
      //   mode
      //   selectors
      //   type:circle,rectangle
      // }
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    //交互模式选项，配置每个模式行为
    //attract,bubble,pause,push,remove,repulse,trail,emitter,absorber
    modes: {
      bubble: {
        distance: 400,
        //粒子效果持续时间（秒），然后容器将被破坏
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
})
const particlesInit = async (engine: any) => {
  await loadFull(engine);
};

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};

</script>

<style scoped>

</style>
