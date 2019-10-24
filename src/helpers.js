const kelvinToCelsius = k => (k - 273.15).toFixed(0);
const $weatherDivAll = document.querySelectorAll('.weather');
const $inputCity = document.getElementById('city');
// const $container = document.querySelector('.container');
const $search = document.getElementById('search');
const $weather = document.getElementById('weather');
const $currWeatherDiv = document.getElementById('weather1');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

export const renderForecast = (forecast) => {
  const cityContent = createCityHTML(forecast);
  const weatherContent = createWeatherHTML(forecast);
}

export const submit = () => {
  return $inputCity;
}

export const getCityInput = () => {
  const value = $inputCity.value;
  $inputCity.value = '';
  return value;
}

export const initialSetHtml = () => {
  $weather.style.visibility = 'hidden';
}

export const resetHTML = () => {
  // while ($weather.firstChild) {
  //   $weather.removeChild($weather.firstChild);
  // };
  $weatherDivAll.forEach(div => {
    while(div.firstChild) {
      div.removeChild(div.firstChild);
    }
  });
  $weather.style.visibility = 'visible';
}
