<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
          <th class="text-left">
              Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in launches"
          :key="item.id"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.date_local }}</td>
          <td><v-btn @click="$router.push(`/launches/${item.id}`)" icon><v-icon>mdi-arrow-right</v-icon></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      launches: null
    }
  },
  async beforeMount() {
    if (this.$store.state.launches?.launches.length === 0) {     
      await this.$store.dispatch('launches/getLaunches')
    }
    this.launches = this.$store.state.launches?.launches
  },
}
</script>
