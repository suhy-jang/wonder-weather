const kelvinToCelsius = k => (k - 273.15).toFixed(0);
const $weatherDivAll = document.querySelectorAll('.weather');
const $inputCity = document.getElementById('city');
// const $container = document.querySelector('.container');
const $search = document.getElementById('search');
const $weather = document.getElementById('weather');
const $currWeatherDiv = document.getElementById('weather1');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const getIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const getSunTime = (forecast, { first, second }) => {
  const date = new Date(forecast[first][second] * 1000);
  const hours = date.getHours();
  const min = "0" + date.getMinutes();
  // console.log(forecast[first][second], hours, min);
  return { hours, min };
}

const sunriseTime = (forecast) => {
  const { hours, min } = getSunTime(forecast, { first: 'city', second: 'sunrise' });
  return `${hours}:${min.substr(-2)}`;
}

const sunsetTime = (forecast) => {
  const { hours, min } = getSunTime(forecast, { first: 'city', second: 'sunset' });
  return `${hours}:${min.substr(-2)}`;
}

const drawText = (tag, text) => {
  const obj = document.createElement(tag);
  obj.textContent = text;
  return obj;
}

const createCityHTML = (forecast) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  const header = document.createElement('h3');
  header.textContent = weekDays[(new Date()).getDay()];
  container.appendChild(header);

  // const currTime = a * 3 + 12;
  // container.appendChild(drawText('div', currTime));
  const sunTime = document.createElement('div');
  sunTime.textContent = `Daytime: ${sunriseTime(forecast)} - ${sunsetTime(forecast)}`;
  container.appendChild(sunTime);
  return container;
}

const getIndex = (forecast, day) => {
  let index = 0;
  for(let i = day*8; i < (day+1)*8; i++) {
    if (forecast.list[i].weather[0].icon != '01n') {
      index = i;
      break;
    }
  }
  return index;
}

const drawIconImage = (forecast, i) => {
  const iconUrl = getIconUrl(forecast.list[i].weather[0].icon);
  const image = document.createElement('img');
  image.src = iconUrl;
  return image;
}

const minMaxDegree = (forecast, i) => {
  const maxTemp = forecast.list[i].main.temp_max;
  const minTemp = forecast.list[i].main.temp_min;
  return {
    maxTemp: kelvinToCelsius(maxTemp),
    minTemp: kelvinToCelsius(minTemp),
  };
}

const drawWindDirection = (deg) => {
  // temp : deg not reflect
  const direction = document.createElement('i');
  direction.classList.add('fas', 'fa-location-arrow');
  return direction;
}

const drawWind = (forecast, i) => {
  const container = document.createElement('div');

  container.appendChild(drawWindDirection(forecast.list[i].wind.deg));
  const windSpeed = forecast.list[i].wind.speed;
  container.textContent = `${windSpeed} m/s`;
  return container;
}

const createWeatherHTML = (forecast) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');

  const a = getIndex(forecast, 0);
  container.appendChild(drawIconImage(forecast, a));
  const { maxTemp, minTemp } = minMaxDegree(forecast, a);
  container.appendChild(drawText('h2', `${minTemp} / ${maxTemp} °C`));
  container.appendChild(drawText('div', forecast.list[a].weather[0].main));
  container.appendChild(drawWind(forecast, a));
  container.appendChild(drawText('div', forecast.list[a].main.pressure));
  return container;
}


const createNthDayHtml = (forecast, a) => {
  const windDeg = forecast.list[a].wind.deg;
  console.log('wind deg: ', windDeg);
  const windSpeed = forecast.list[a].wind.speed;
  console.log('wind speed: ', windSpeed); // m/s
  const maxTemp = forecast.list[a].main.temp_max;
  console.log('max temp: ', kelvinToCelsius(maxTemp));
  const minTemp = forecast.list[a].main.temp_min;
  console.log('minTemp: ', kelvinToCelsius(minTemp));
  $weatherDivAll[a-1].appendChild(drawIconImage(forecast, a));
  const pressure = forecast.list[a].main.pressure;
}

export const renderForecast = (forecast) => {
  // main
  const cityContent = createCityHTML(forecast);
  const weatherContent = createWeatherHTML(forecast);
  $currWeatherDiv.appendChild(cityContent);
  $currWeatherDiv.appendChild(weatherContent);
  // next days

}

export const submit = () => {
  return $inputCity;
}

export const getCityInput = () => {
  const value = $inputCity.value;
  $inputCity.value = '';
  return value;
}

export const resetHTML = () => {
  // while ($weather.firstChild) {
  //   $weather.removeChild($weather.firstChild);
  // };
  $weatherDivAll.forEach(div => {
    while(div.firstChild) {
      div.removeChild(div.firstChild);
    }
    div.style.visibility = 'visible';
  });
}
