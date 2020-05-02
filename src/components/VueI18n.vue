<template>
    <div>
  <div class="locale-changer">
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select> -->
  </div>
    </div>
</template>

<script>
    export default {
          data () {
    return { langs: ['en', 'de'] }
  }
    }
</script>

<style >

</style>