<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Serial n°
          </th>
          <th class="text-left">
            Last updates
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in capsules" :key="item.id">
          <td>{{ item.serial }}</td>
          <td>{{ item.last_update }}</td>
          <td><v-btn @click="$router.push(`/capsules/${item.id}`)" icon><v-icon>mdi-arrow-right</v-icon></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    name: 'CapsulePAge',
    data() {
      return {
        capsules: null
      }
    },
    async beforeMount() {
      if (this.$store.state.launches?.capsules.length === 0) {          
        await this.$store.dispatch('launches/getCapsules')
      }
      this.capsules = await this.$store.state.launches?.capsules
    }
  }

</script>
