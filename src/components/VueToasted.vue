<template>
  <div class="text-center">
      <hr> 
      <h1>Vue Toasted</h1>
      <br>
    <button class="btn btn-info" @click="open">Show Toasted</button>
    <hr>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$toasted.show("hello osama", {
        theme: "bubble",
        position: "bottom-center",
        duration: 2000,
        fullWidth:true
      });
    },
  },
};
</script>

<style></style>
