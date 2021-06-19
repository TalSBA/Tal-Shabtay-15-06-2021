<template>
  <div>
    <b-navbar class="menu" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"
        ><router-link :to="{name: 'root'}" class="navbar-brand"
          >Weather App</router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav right>
          <b-nav-item
            ><router-link :to="{ name: 'home'}" activeClass="active" tag="li"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link :to="{name: 'favorites'}" activeClass="active" tag="li"
              >Favorites</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootPath: `${this.$route.path}/`,
      homePath: `${this.$route.path}/home`,
      favoritesPath: `${this.$route.path}/favorites`,
    };
  },
};
</script>

<style scoped>
.menu {
  padding: 10px;
}
.navbar-collapse {
  flex-grow: 0;
  margin-left: auto;
}
</style>