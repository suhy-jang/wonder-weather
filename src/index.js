const dbConfig = require('./../db-config.json');

const openWeatherKey = dbConfig.OPEN_WEATHER_KEY;
const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast';
const getSunTime = (forecast, { first, second }) => {
  const date = new Date(forecast[first][second] * 1000);
  const hours = date.getHours();
  const min = "0" + date.getMinutes();
  console.log(forecast[first][second], hours, min);
  return { hours, min };
}

const createCityHTML = (forecast) => {
  console.log('forecast: ', forecast);
  const { hours: riseHours, min: riseMin } = getSunTime(forecast, { first: 'city', second: 'sunrise' });
  console.log('sunrise: ', `${riseHours}:${riseMin.substr(-2)}`);
  const { hours: setHours, min: setMin } = getSunTime(forecast, { first: 'city', second: 'sunset' });
  console.log('sunset: ', `${setHours}:${setMin.substr(-2)}`);
}

const kelvinToCelsius = k => (k - 273.15).toFixed(0);
const $weatherDivAll = document.querySelectorAll('.weather');

const createWeatherHTML = (forecast) => {
  let a = 0;
  for(let i = 0; i < 8; i++) {
    if (forecast.list[i].weather[0].icon != '01n') {
      a = i;
      break;
    }
  }
  const currTime = a * 3 + 12;
  console.log('time: ', currTime);
  const windDeg = forecast.list[a].wind.deg;
  console.log('wind deg: ', windDeg);
  const windSpeed = forecast.list[a].wind.speed;
  console.log('wind speed: ', windSpeed); // m/s
  const maxTemp = forecast.list[a].main.temp_max;
  console.log('max temp: ', kelvinToCelsius(maxTemp));
  const minTemp = forecast.list[a].main.temp_min;
  console.log('minTemp: ', kelvinToCelsius(minTemp));
  const condition = forecast.list[a].weather[0].main;
  console.log('condition: ', condition);
  const icon = forecast.list[a].weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const temp = document.createElement('img');
  temp.src = iconUrl;
  $weatherDivAll[0].appendChild(temp);
  console.log('iconUrl: ', iconUrl);
  const pressure = forecast.list[a].main.pressure;
}

const getForecast = async () => {
  const tempInput = 'Seoul';
  const urlToFetch = `${weatherUrl}?q=${tempInput}&APPID=${openWeatherKey}`;
  const response = await fetch(urlToFetch);
  try {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
}

const renderForecast = (forecast) => {
  const cityContent = createCityHTML(forecast);
  const weatherContent = createWeatherHTML(forecast);
}

const executeSearch = () => {
  getForecast().then(forecast => renderForecast(forecast));
}

executeSearch();
