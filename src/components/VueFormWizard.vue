<template>
    <div>
        <form-wizard @on-complete="onComplete">
            <tab-content title="Personal details"
                         icon="ti-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>
                <form-wizard @on-complete="onComplete"
                      title="This is a new title"
                      subtitle="And a new subtitle"
                      shape="tab"
                      back-button-text="Go back!"
                      next-button-text="Go next!"
                      finish-button-text="We're there"
                      color="#9b59b6">
            <tab-content title="Personal details"
                         icon="ti-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    export default {
         methods: {
  onComplete: function(){
      alert('Yay. Done!');
   }
  },
  components: {
  FormWizard,
  TabContent
}
    }
</script>

<style >

</style>