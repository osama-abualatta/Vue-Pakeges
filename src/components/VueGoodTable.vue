<template>
    <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
        max-height="500px"
      :fixed-header="true"
      :line-numbers="true"
       :search-options="{ enabled: true, placeholder: 'Search this table' }"
         :pagination-options="{enabled: true, mode: 'records',  perPage: 3}"

      />
    </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
    export default {
        components: {
  VueGoodTable,
},
 data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'dd-mm-yyyy',
          dateOutputFormat: 'dd-mm-yyyy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '05-10-2011',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '03-10-2016', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '11-10-2017', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '24-10-2018', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '29-10-2019', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '31-10-2020', score: 0.03343 },
      ],
    };
  },
  methods: {
  rowStyleClassFn(row) {
    return row.age > 18 ? 'green' : 'red';
  },
}
    }
</script>

<style >

</style>