<script setup>
import NavBar from'./components/NavBar.vue';
import footer from './components/footer.vue';

</script>
<template>
  <v-app>
    <NavBar/>
    <main>
      <router-view></router-view>
    </main>
    <footer/>
  </v-app>
</template>


  