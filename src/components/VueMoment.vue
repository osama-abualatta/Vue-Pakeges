<template>
  <div>
    <span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span>
    <!-- or create a new date from 'now' -->
    <hr>
    <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
  </div>
</template>

<script>
import moment from 'moment';
export default {
        computed: {
      someDate() {
        return moment(this.givenDate).format('YYYY');
      }
    },
};
</script>

<style></style>
