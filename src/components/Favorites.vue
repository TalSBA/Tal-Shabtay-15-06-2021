<template>
  <b-container class="city-card">
    <b-row>
      <div v-if="favorites.length > 0">
        <city-card
          v-for="city in favorites"
          :key="city.Key"
          :city="city"
        ></city-card>
      </div>
    </b-row>
    <b-row v-if="favorites.length === 0">
      <h1>No Favorites</h1>
    </b-row>
  </b-container>
</template>

<script>
import CityCard from "./CityCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    cityCard: CityCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["favorites"]),
  },
};
</script>

<style>
.city-card .card {
  margin: 20px;
  text-align: center;
}
.city-card h1 {
  color: white;
  text-align: center;
  margin-top: 30px;
}
</style>