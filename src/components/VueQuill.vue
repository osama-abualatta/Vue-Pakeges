<template>
  <div>
      <!-- <img width="25%" src="../assets/logo.png"> -->
    <quill v-model="content"  output="html"></quill>
  </div>
</template>

<script>
export default {
  data() {
    return {
         content: "<h1>Hello World</h1><p>Here is some text</p"
    //   content: {
    //     content: "<h1>Hello World</h1><p>Here is some text</p"
    //   },
    //   config: {
    //     readOnly: true,
    //     placeholder: "Compose an epic...",
    //   },
    };
  },
};
</script>

<style></style>
