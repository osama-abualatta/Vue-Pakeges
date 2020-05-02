<template>
  <div>
    <label>Filter by Name:</label>
    <input class="form-control" v-model="filters.name.value" />

    <v-table
      :data="users"
      :filters="filters"
      :currentPage.sync="currentPage"
      :pageSize="5"
      @totalPagesChanged="totalPages = $event"
    >
      <thead slot="head">
        <th :sortKey="nameLength" defaultSort="desc">Name</th>
        <th sortKey="age">Age</th>
        <th sortKey="Email">Email</th>
        <th sortKey="address">Address</th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }">
        <tr v-for="row in displayData" :key="row.guid">
          <td>{{ row.name }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.email }}</td>
          <td>
            {{ row.address }}
          </td>
        </tr>
      </tbody>
    </v-table>
    <smart-pagination
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import users from "../../users.json";
export default {
  name: "TheBasics",
  data: () => ({
    users,
    currentPage: 1,
    totalPages: 0,
    filters: {
      name: { value: "", keys: ["name"] },
    },
  }),
  methods: {
    nameLength(row) {
      return row.name.length;
    },
    dateSort(a, b) {
      let date1 = new Date(a.registered).getTime();
      let date2 = new Date(b.registered).getTime();

      return date1 - date2;
    },
  },
};
</script>

<style></style>
