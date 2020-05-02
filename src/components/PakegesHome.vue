<template>
  <div class="container">
    <h1 class="text-center"> VUE PAKEGES </h1>
   <div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <router-link class="nav-link "   to="vuesimplecalendar" active-class="active" exact>vue-simple-calendar</router-link>
      <router-link class="nav-link  "   to="vueslidercomponent" active-class="active">vue-slider-component</router-link>
      <router-link class="nav-link  "   to="vuesweetalert2" active-class="active">vue-sweetalert2</router-link>
      <router-link class="nav-link  "   to="vuethemask" active-class="active">vue-the-mask</router-link>
      <router-link class="nav-link  "   to="vuetoastnotification" active-class="active">vue-toast-notification</router-link>
      <router-link class="nav-link  "   to="vuetoasted" active-class="active">vue-toasted</router-link>
      <router-link class="nav-link  "   to="vuetoastr" active-class="active">vue-toastr</router-link>
      <router-link class="nav-link  "   to="VueTopProgress" active-class="active">vue-top-progress</router-link>
      <router-link class="nav-link  "   to="vuetour" active-class="active">vue-tour</router-link>
      <router-link class="nav-link  "   to="vue2dropzone" active-class="active">vue2-dropzone</router-link>
      <router-link class="nav-link  "   to="vue2editor" active-class="active">vue2-editor</router-link>
      <router-link class="nav-link  "   to="vuejsdatepicker" active-class="active">vuejs-datepicker</router-link>
      <router-link class="nav-link  "   to="vuesmarttable" active-class="active">vuejs-smart-table</router-link>
      <router-link class="nav-link  "   to="vuejstimepicker" active-class="active">vuejs-timepicker</router-link>
      <router-link class="nav-link  "   to="vuelidate" active-class="active">vuelidate</router-link>
      <router-link class="nav-link  "   to="vuetable2" active-class="active">vuetable-2</router-link>
      <router-link class="nav-link  "   to="vueecharts" active-class="active">vue-echarts</router-link>
      <router-link class="nav-link  "   to="vuefilepond" active-class="active">vue-filepond</router-link>
      <router-link class="nav-link  "   to="vueflagicon" active-class="active">vue-flag-icon</router-link>
      <router-link class="nav-link  "   to="vueformwizard" active-class="active">vue-form-wizard</router-link>
      <router-link class="nav-link  "   to="vuegoodtable" active-class="active">vue-good-table</router-link>
      <router-link class="nav-link  "   to="vuei18n" active-class="active">vue-i18n</router-link>
      <router-link class="nav-link  "   to="vuejstree" active-class="active">vue-jstree</router-link>
      <router-link class="nav-link  "   to="vuelazyload" active-class="active">vue-lazyload</router-link>
      <router-link class="nav-link  "   to="vuemeta" active-class="active">vue-meta</router-link>
      <router-link class="nav-link  "   to="vuemoment" active-class="active">vue-moment</router-link>
      <router-link class="nav-link "   to="vuemultiselect" active-class="active">vue-multiselect</router-link>
      <router-link class="nav-link "   to="vuepaypalcheckout" active-class="active">vue-paypal-checkout</router-link>
      <router-link class="nav-link "   to="vueperfectscrollbar" active-class="active">vue-perfect-scrollbar</router-link>
      <router-link class="nav-link "   to="vuepictureinput" active-class="active">vue-picture-input</router-link>
      <router-link class="nav-link "   to="vuequill" active-class="active">vue-quill</router-link>
      <router-link class="nav-link "   to="vueselect2" active-class="active">vue-select2</router-link>

    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" >
      <router-view></router-view>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
      metaInfo: {
  style: [{
    vmid: 'page-load-overlay',
    innerHTML: `
      body div.loading {
        z-index: 999;
        background-color: #0f0f0f;
        opacity: 0.9;
      }
    `,
  }]
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
