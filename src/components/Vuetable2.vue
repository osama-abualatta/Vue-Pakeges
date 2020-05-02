<template>
<div class="table-2">
  <vuetable
    ref="vuetable"
 :fields="fields"
 api-url="https://vuetable.ratiw.net/api/users"
     data-path="data"
    pagination-path=""
  ></vuetable>
      <!-- <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination> -->
  </div>
</template>

<script>
import vuetable from "vuetable-2/src/components/Vuetable.vue";
    export default {
    components: {
    vuetable,
    

  },
    data() {
        return{
  fields: ['name', 'email','birthdate','nickname','gender']
        }
  },
  computed:{
  /*httpOptions(){
    return {headers: {'Authorization': "my-token"}} //table props -> :http-options="httpOptions"
  },*/
 },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    editRow(rowData){
      alert("You clicked edit on"+ JSON.stringify(rowData))
    },
    deleteRow(rowData){
      alert("You clicked delete on"+ JSON.stringify(rowData))
    }
  }
    }
</script>

<style >
.table2{
    
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>