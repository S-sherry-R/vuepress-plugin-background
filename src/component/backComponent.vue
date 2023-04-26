<template>
  <circle3d></circle3d>
  <square></square>
</template>

<script>
import Circle3d from "./circle3d.vue";
import Square from "./square.vue";
export default {
  name: "backComponent",
  components: {Square, Circle3d}
}
</script>

<style scoped>

</style>
