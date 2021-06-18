<template>
  <div class="App">
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Favorites from "./components/Favorites.vue";
import Menu from "./components/Menu.vue";

export default {
  components: {
    menuBar: Menu,
    homePage: Home,
    favoritesPage: Favorites,
  },
};
</script>

<style>
.App {
  background-image: url("./assets/images.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 20px);
}
</style>
 