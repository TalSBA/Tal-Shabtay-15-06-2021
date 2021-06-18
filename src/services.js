import axios from "axios";
import cities from "./data/cities.json";
import weatherDetailsJson from "./data/weatherDetails.json";
import fiveDaysWeatherJson from "./data/fiveDaysWeather.json";


export async function getCities(value) {
    let citiesResults = null;
    console.log("value", value);
    const newCities = cities.filter(
        (cityObj) =>
            value &&
            cityObj.LocalizedName.toLowerCase().includes(value.toLowerCase())
    );
    citiesResults = newCities;

    //    await axios
    //         .get(
    //             `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=NjkcZ7AM3eRqw4D9MjGNc7svCBY98D69&q=${value}`
    //         )
    //         .then((response) => { (citiesResults = response.data); console.log(response.data); })
    //          .catch(error => {
    //              console.log(error)
    //              citiesResults = {error: true, message: error};
    //          });

    return citiesResults;
}

export async function getCityDetails(cityResult) {
    let weatherDetailsResult = null;
    console.log("result clicked", cityResult);
    const weatherDetails = weatherDetailsJson[1];
    weatherDetailsResult = weatherDetails;
    console.log(weatherDetailsResult);
    // await axios
    //     .get(
    //         `http://dataservice.accuweather.com/currentconditions/v1/${cityResult.Key}?apikey=NjkcZ7AM3eRqw4D9MjGNc7svCBY98D69&details=false`
    //     )
    //     .then((response) => {
    //         weatherDetailsResult = response.data[0];
    //         console.log(response.data[0]);
    //     });
    //          .catch(error => {
    //              console.log(error)
    //              weatherDetailsResult = {error: true, message: error};
    //          });
    return weatherDetailsResult;
}

export async function getFiveDaysWeather(cityKey) {
    let fiveDaysWeatherResult = null;

    fiveDaysWeatherResult = fiveDaysWeatherJson[1];


    // await axios
    //     .get(
    //         `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=NjkcZ7AM3eRqw4D9MjGNc7svCBY98D69&metric=true`
    //     )
    //     .then((response) => { (fiveDaysWeatherResult = response.data); console.log(response.data); });
    //          .catch(error => {
    //              console.log(error)
    //              fiveDaysWeatherResult = {error: true, message: error};
    //          });
    return fiveDaysWeatherResult;
}