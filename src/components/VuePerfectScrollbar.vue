<template>
  <div>
    <VuePerfectScrollbar
      class="scroll-area"
      v-once
      :settings="settings"
      @ps-scroll-y="scrollHanle"
    >
      <img src="../assets/logo.png" height="720" width="1280" alt="" />
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  components: {
    VuePerfectScrollbar,
  },
  name: "app",
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
      },
    };
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt);
    },
  },
};
</script>

<style>
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>
