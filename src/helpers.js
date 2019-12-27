const $dbConfig = require('./../db-config.json');

const $openWeatherKey = $dbConfig.OPEN_WEATHER_KEY;
const $weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';

function errorHandler(err) {
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

const getCurrentPosition = (options = {}) => (
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  })
);

export const fetchCoordinates = async () => {
  try {
    const { coords } = await getCurrentPosition({ timeout: 4000 });
    const { latitude, longitude } = coords;
    return { lat: latitude, lon: longitude };
  } catch (error) {
    errorHandler(error);
  }
};
