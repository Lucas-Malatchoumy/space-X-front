<template>
    <div class="mb-10">
      <v-app-bar id="navbar"
        color="deep-purple accent-4"
        dense
        dark
        fixed
      >  
        <div class="d-flex justify-between mx-auto ">
          <NuxtLink to="/"><span class="mx-2">Launches</span></NuxtLink>
          <NuxtLink to="/capsules"><span class="mx-2">Capsules</span></NuxtLink>
        </div>
  
        
      </v-app-bar>
    </div>
</template>

<style lang="scss" scoped>
a { 
    text-decoration: none;
    color: white !important;
    transition: 0.3s
}
a:hover { 
    color: black;
}
#navbar {
    background-color: #6200ea50 !important;
    backdrop-filter: blur(10px) !important;
}
</style>