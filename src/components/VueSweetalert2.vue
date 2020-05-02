<template>
  <div class="text-center">
    <br>
    <hr>
    <button class="btn btn-success text-center mr-3" @click="showAlert">Sweet Alert2</button>
    <hr>
  </div>
</template>

<script>

export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello This Is Sweet Alert2!!!");
    },
  },
};
</script>

<style></style>
