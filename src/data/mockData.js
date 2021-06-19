import cities from "./data/cities.json";
import weatherDetailsJson from "./data/weatherDetails.json";
import fiveDaysWeatherJson from "./data/fiveDaysWeather.json";

export function getCitiesData() {
    let citiesResults = null;
    console.log("value", value);
    const newCities = cities.filter(
        (cityObj) =>
            value &&
            cityObj.LocalizedName.toLowerCase().includes(value.toLowerCase())
    );
    citiesResults = newCities;
    return citiesResults;
}

export function getWeatherDetailsData() {
    let weatherDetailsResult = null;
    console.log("result clicked", cityResult);
    const weatherDetails = weatherDetailsJson[1];
    weatherDetailsResult = weatherDetails;
    console.log(weatherDetailsResult);
    return weatherDetailsResult;
}
export function getFiveDaysDataData() {
    let fiveDaysWeatherResult = null;
    fiveDaysWeatherResult = fiveDaysWeatherJson[1];
    return fiveDaysWeatherResult;
}