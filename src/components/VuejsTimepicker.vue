<template>
    <div>
<vue-timepicker v-model="yourTimeValue" format="HH:mm:ss"></vue-timepicker>

    </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker'
import 'vuejs-timepicker/dist/vue2-timepicker.css' 

    export default {
        components: { VueTimepicker },
        data () {
  return {
    yourTimeValue: 'hh:mm:ss',
    yourData: {
      hh: '03',
      mm: '05',
      ss: '00'
    }
  }
}
    }
</script>

<style >

</style>