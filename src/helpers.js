const $dbConfig = require('./../db-config.json');
const axios = require('axios').default;
const $weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const $openWeatherKey = $dbConfig.OPEN_WEATHER_KEY;

export function errorHandler(err) {
  alert(err);
}

export const getForecast = async (getInput) => {
  const urlToFetch = `${$weatherUrl}?q=${getInput()}&APPID=${$openWeatherKey}`;
  const response = await fetch(urlToFetch);
  try {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    errorHandler(error);
  }
};

export const getForecastFromGeo = async ({ lat, lon }) => {
  if (!lat || !lon) {
    errorHandler("Sorry, browser does not support geolocation!");
    return;
  }

  const urlToFetch = `${$weatherUrl}?lat=${lat}&lon=${lon}&appid=${$openWeatherKey}`;
  const response = await fetch(urlToFetch);
  try {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    errorHandler(error);
  }
};

const success = ({ coords: { latitude: lat, longitude: lon } }) => ({ lat, lon });
const failure = (error) => (errorHandler(error.message));
const getCurrentPosition = () => (
  navigator.geolocation.getCurrentPosition(success, failure)
);

export const fetchCoordinates = async () => {
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    return await axios.get('https://location.services.mozilla.com/v1/geolocate?key=test')
      .then(({ data }) => (data.location))
      .then(({ lat, lng }) => {
        return { lat, lon: lng };
      })
      .catch(e => console.log(e.message));
  } else {
    try {
      const { coords } = await getCurrentPosition({ timeout: 4000 });
      const { latitude, longitude } = coords;
      return { lat: latitude, lon: longitude };
    } catch (error) {
      errorHandler(error);
    }
  }
};
