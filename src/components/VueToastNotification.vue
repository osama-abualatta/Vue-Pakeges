<template>
  <div class="text-center">
    <hr />
    <h1>Vue Toast Notification</h1>
    <br>
    <button @click="open" class="btn btn-primary">
      Show toast
    </button>
    <hr />
  </div>
</template>

<script>
import "vue-toast-notification/dist/theme-default.css";
export default {
  methods: {
    open() {
      this.$toast.open({
        message: "Test message from Vue Toast Notification",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
    },
  },
};
</script>

<style></style>
