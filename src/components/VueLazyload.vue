<template>
    <div>
        <!-- <lazy-component @show="handler">
  <img class="mini-cover" :src="img.src" width="100%" height="400">
</lazy-component> -->
<div v-lazy-container="{ selector: 'img'  }">
  <img data-src="//free-images.com/sm/1e1c/azure_window.jpg/img1.jpg" data-error="xxx.jpg">
  <img data-src="//free-images.com/sm/ada9/seekarspitze_von_achenkirch.jpg/img2.jpg" data-loading="xxx.jpg" >
  <img data-src="//free-images.com/sm/b372/cherry_blossom_white_branch.jpg/img3.jpg">  
</div>
    </div>
</template>

<script>
    export default {
        metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'About Us'
    }
    }
    
</script>

<style >

</style>