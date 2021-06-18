<template>
  <div>
    <b-navbar class="menu" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"
        ><router-link :to="rootPath" class="navbar-brand"
          >Weather App</router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav right>
          <b-nav-item
            ><router-link :to="homePath" activeClass="active" tag="li"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link :to="favoritesPath" activeClass="active" tag="li"
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
      publicPath: "",
      rootPath: "",
      homePath: "",
      favoritesPath: "",
    };
  },
  created() {
    this.publicPath =
      process.env.NODE_ENV === "production" ? "/Tal-Shabtay-15-06-2021/" : "";
      console.log("env", process.env.NODE_ENV);
      console.log("publicPath", this.publicPath);

    this.rootPath = this.publicPath + "/";
    this.homePath = this.publicPath + "/home";
    this.favoritesPath = this.publicPath + "/favorites";
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