<template>
    <div>
<hr>
<h1>WelCome to vue meta</h1>
<hr>
    </div>
</template>

<script>
    export default {
metaInfo() {
  const style = this.cssTexts
  return { style }
},
data() {
  return {
    cssTexts: []
  }
},
mounted() {
  this.cssTexts.push({
    vmid: 'page-load-overlay',
    innerHTML: null
  })
}
    }
</script>

<style >

</style>