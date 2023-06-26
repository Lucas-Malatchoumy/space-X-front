
export const state = () => ({
    launches: [],
    launch: {},
    capsules: [],
    capsule: {},
  })
  
  export const mutations = {
    SET_LAUNCHES(state, launches) {
      state.launches = launches
    },
    SET_CAPSULES(state, capsules) {
      state.capsules = capsules
    },
    SET_LAUNCH(state, launch) {
      state.launch = launch
    },
    SET_CAPSULE(state, capsule) {
      state.capsule = capsule
    },
  }
  
  export const actions = {
    async getLaunches({ commit }) {
      try {
        const { data } = await this.$axios.get('https://api.spacexdata.com/v5/launches')
        console.log(data)
        commit('SET_LAUNCHES', data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async getCapsules({ commit }) {
      try {
        const { data } = await this.$axios.get('https://api.spacexdata.com/v4/capsules')
        console.log(data)
        commit('SET_CAPSULES', data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async getLaunchById({ commit, state }, launchId) {
      try {
        const {data} = await this.$axios.get(`https://api.spacexdata.com/v4/launches/${launchId}`)
        commit('SET_LAUNCH', data);
        
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération du lancement par ID:', error);
        throw error;
      }
    },
    async getCapsuleById({ commit, state }, capsuleId) {
      try {
        const {data} = await this.$axios.get(`https://api.spacexdata.com/v4/capsules/${capsuleId}`)
        commit('SET_CAPSULE', data);
        
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération du lancement par ID:', error);
        throw error;
      }
    },
  }