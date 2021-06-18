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
.App .card {
  color: white;
  background-color: transparent;
  border: solid 1px white;
  box-shadow: 0 1px 3px rgba(255, 253, 253, 0.418),
    0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 50%;
  height: 180px;
  width: 180px;
}

</style>
 