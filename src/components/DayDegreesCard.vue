<template>
  <b-col>
    <b-card>
      <b-card-title>{{ calcDay(day.Date) }}</b-card-title>
      <b-card-img :src="imgSrc" :alt="this.day.Day.IconPhrase"></b-card-img>
      <b-card-text>
        {{ day.Temperature.Maximum.Value }}
        <b-icon class="degrees-icon" icon="dot" aria-hidden="true"></b-icon>
        {{ day.Temperature.Maximum.Unit }}
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["day"],
  data() {
    return {
      imgSrc: require("../assets/weather/" + this.day.Day.Icon + ".png"),
    };
  },
  methods: {
    calcDay(date) {
      var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
      var d = new Date(date);
      var dayName = days[d.getDay()];
      return dayName;
    },
  },
};
</script>

<style>
.degrees-icon {
  vertical-align: top;
}
.card {
  color: white;
  background-color: transparent;
  border: solid 1px white;
  box-shadow: 0 1px 3px rgba(255, 253, 253, 0.418),
    0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 50%;
  height: 180px;
  width: 180px;
}



.card:hover {
  box-shadow: 0 14px 28px rgba(255, 253, 253, 0.418),
    0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>