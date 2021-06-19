import axios from "axios";

export async function getCities(value) {
    let citiesResults = null;
    await axios
        .get(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=NjkcZ7AM3eRqw4D9MjGNc7svCBY98D69&q=${value}`
        )
        .then((response) => { (citiesResults = response.data); })
        .catch(error => {
            citiesResults = { error: true, message: error };
        });

    return citiesResults;
}

export async function getCityDetails(cityResult) {
    let weatherDetailsResult = null;

    await axios
        .get(
            `https://dataservice.accuweather.com/currentconditions/v1/${cityResult.Key}?apikey=NjkcZ7AM3eRqw4D9MjGNc7svCBY98D69&details=false`
        )
        .then((response) => {
            weatherDetailsResult = response.data[0];
        })
        .catch(error => {
            weatherDetailsResult = { error: true, message: error };
        });
    return weatherDetailsResult;
}

export async function getFiveDaysWeather(cityKey) {
    let fiveDaysWeatherResult = null;
    await axios
        .get(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=NjkcZ7AM3eRqw4D9MjGNc7svCBY98D69&metric=true`
        )
        .then((response) => { (fiveDaysWeatherResult = response.data);})
        .catch(error => {
            fiveDaysWeatherResult = { error: true, message: error };
        });
    return fiveDaysWeatherResult;
}