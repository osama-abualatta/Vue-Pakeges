<template>
  <div>
    <button @click="saveContent" class="btn btn-primary">save Content</button>
    <vue-editor v-model="content"> </vue-editor>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      content: "<h3>Some initial content</h3>",
    };
  },

  methods: {
    saveContent() {
      // You have the content to save
      console.log(this.content);
    },
  },
};
</script>

<style></style>
