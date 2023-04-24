<template>
  <div class="square-bg">
    <ul class="square-ul" :style="{right:po.right,top:po.top}">
      <li v-for="index in 5" :key="index" :style="{background:co[index]}">
        <span v-if="index<2" class="upLine"></span>
        <span v-if="index<2" class="downLine"></span>
        <span v-if="index>=2" class="leftLine"></span>
        <span v-if="index>=2" class="rightLine"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const po = ref(BackOptions.position)
const co = ref(BackOptions.color)
</script>
<style scoped lang="scss">
@import "../style/square.scss";
</style>
