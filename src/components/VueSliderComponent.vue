<template>
  <div>
      <br>
      <hr>
    <vue-slider v-model="value" :adsorb="true" :data="data" :marks="true" />
    
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
       data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
          marks: [0, 10, 30, 60, 100]
    };
  },
};
</script>

<style></style>
