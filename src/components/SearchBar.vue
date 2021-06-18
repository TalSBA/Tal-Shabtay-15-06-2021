<template>
  <div class="c-search">
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        type="search"
        placeholder="Search city"
        v-model="city"
      ></b-form-input>
    </b-input-group>
    <b-list-group>
      <b-list-group-item
        v-for="result in cities"
        :key="result.key"
        @click="citySelectedHandler(result)"
        >{{ result.LocalizedName }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: ["cities"],
  data() {
    return {
      city: "",
    };
  },
  methods: {
    citySelectedHandler(city) {
      this.$emit("on-city-selected", city);
      this.city = "";
    },
  },
  watch: {
    city(value) {
      this.$emit("on-search", value);
    },
  },
};
</script>

<style>
.c-search {
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
}

.c-search .list-group {
  position: absolute;
  width: 100%;
  height: 300px !important;
  overflow-y: auto;
  z-index: 100;
}
</style>