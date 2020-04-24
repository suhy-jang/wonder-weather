const $dbConfig = require('./../db-config.json');
const axios = require('axios').default;
const $weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const $openWeatherKey = $dbConfig.OPEN_WEATHER_KEY;

export const getForecast = async (inputText) => {
  const urlToFetch = `${$weatherUrl}?q=${inputText}&APPID=${$openWeatherKey}`;
  const response = await fetch(urlToFetch);
  try {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getForecastFromGeo = async ({ latitude: lat, longitude: lon }) => {
  if (!lat || !lon) {
    alert('Sorry, browser does not support geolocation!');
    return;
  }

  const urlToFetch = `${$weatherUrl}?lat=${lat}&lon=${lon}&appid=${$openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchCoordinates = (loading, render) => {
  const firefoxGeo = async () => {
    try {
      loading();
      let res = await axios.get(
        'https://location.services.mozilla.com/v1/geolocate?key=test',
      );
      const { lat: latitude, lng: longitude } = res.data.location;
      res = await getForecastFromGeo({ latitude, longitude });
      render(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  const successInGeneral = async (p) => {
    loading();
    const res = await getForecastFromGeo(p.coords);
    render(res);
  };

  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    return firefoxGeo();
  }

  navigator.geolocation.getCurrentPosition(
    successInGeneral,
    error => console.error(error.message),
    {
      timeout: 60000,
    },
  );
};
