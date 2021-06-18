<template>
  <div class="weather-details">
    <b-row>
      <b-col>
        <img :src="imageSrc" />
        <div class="city-celsius">
          <p>
            <strong>{{ city.LocalizedName }}</strong>
          </p>
          <p>
            {{ details.Temperature.Metric.Value }}
            <b-icon class="degrees-icon" icon="dot" aria-hidden="true"></b-icon>
            {{ details.Temperature.Metric.Unit }}
          </p>
        </div>
      </b-col>
      <b-col>
        <b-icon
          class="favorite-icon"
          id="favorite"
          :icon="icon"
          aria-hidden="true"
          @click="handleFavorites"
        ></b-icon>
        <b-tooltip v-if="icon === 'star'" target="favorite" triggers="hover"
          >Add to favorites</b-tooltip
        >
        <b-tooltip
          v-if="icon === 'star-fill'"
          target="favorite"
          triggers="hover"
          >Remove from favorites</b-tooltip
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1>{{ details.WeatherText }}</h1>
      </b-col>
    </b-row>
    <b-container>
      <b-row class="days">
        <day-degrees
          v-for="day in fiveDaysWeatherResult.DailyForecasts"
          :key="day.Date"
          :day="day"
        ></day-degrees>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DayDegrees from "./DayDegreesCard.vue";
import { mapGetters } from "vuex";

export default {
  props: ["city", "details", "five-days-weather-result"],
  components: {
    dayDegrees: DayDegrees,
  },
  data() {
    return {
      imageSrc: require("../assets/weather/" +
        this.details.WeatherIcon +
        ".png"),
    };
  },
  methods: {
    handleFavorites() {
      if (this.favoriteExist) {
        this.removeFromFavorites();
      } else {
        this.addToFavorites();
      }
    },
    addToFavorites() {
      this.$store.dispatch("addTofavorites", {
        Key: this.city.Key,
        LocalizedName: this.city.LocalizedName,
      });
    },
    removeFromFavorites() {
      this.$store.dispatch("deleteFromFavorites", this.city);
    },
  },
  computed: {
    ...mapGetters(["favorites"]),
    icon() {
      if (this.favoriteExist) {
        return "star-fill";
      } else {
        return "star";
      }
    },
    favoriteExist() {
      return (
        this.favorites &&
        this.favorites.find((city) => city.Key === this.city.Key)
      );
    },
  },
};
</script>

<style>
.weather-details {
  margin-top: 80px;
  text-align: center;
}

.weather-details h1,
.city-celsius {
  color: white;
}
.weather-details .row {
  margin-top: 40px;
}
.weather-details img {
  width: 85px;
  height: 55px;
}
.weather-details .city-celsius {
  padding: 10px;
  display: inline-block;
}

.weather-details .city-celsius p {
  margin: 0;
  font-size: 18px;
}

.weather-details .city-celsius p strong {
  font-size: 22px;
}

.weather-details .favorite-icon {
  font-size: 40px;
  color: rgb(255, 166, 0);
  cursor: pointer;
}
.weather-details .degrees-icon {
  vertical-align: top;
}

.weather-details .days {
  margin: 0 auto;
  margin-top: 80px;
}

.weather-details .col {
  padding: 1px;
  margin: 0;
}
</style>