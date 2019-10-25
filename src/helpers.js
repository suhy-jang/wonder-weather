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
  const offsetDiff = new Date().getTimezoneOffset() * 60 + forecast.city.timezone;
  const date = new Date((forecast[first][second] + offsetDiff)* 1000);
  const hours = date.getHours();
  const min = "0" + date.getMinutes();
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

  const sunTime = document.createElement('div');
  sunTime.textContent = `Daylight: ${sunriseTime(forecast)} - ${sunsetTime(forecast)}`;
  container.appendChild(sunTime);
  return container;
}

const drawIconImage = (forecast, i) => {
  let icon = forecast.list[i].weather[0].icon;
  if (icon === '01n') icon = '01d';
  const iconUrl = getIconUrl(icon);
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
  const direction = document.createElement('i');
  direction.classList.add('fas', 'fa-location-arrow');
  direction.style.transform = `rotate(${deg+180-45}deg)`;
  return direction;
}

const drawWind = (forecast, i) => {
  const deg = forecast.list[i].wind.deg;
  const windSpeed = forecast.list[i].wind.speed;
  const container = document.createElement('div');
  container.appendChild(drawWindDirection(deg));
  container.appendChild(document.createTextNode(`${windSpeed}m/s`));
  return container;
}

const createWeatherHTML = (forecast) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');

  const a = 0; //getIndex(forecast, 0);
  container.appendChild(drawIconImage(forecast, a));
  const { maxTemp, minTemp } = minMaxDegree(forecast, a);
  container.appendChild(drawText('h2', `${minTemp} / ${maxTemp} °C`));
  container.appendChild(drawText('div', forecast.list[a].weather[0].main));
  container.appendChild(drawWind(forecast, a));
  container.appendChild(drawText('div', `${forecast.list[a].main.pressure} hPa`));
  return container;
}

const createNthDayHtml = (forecast, a) => {
  const date = (new Date()).getDay() + Math.floor(a/8);
  const { maxTemp, minTemp } = minMaxDegree(forecast, a);
  const icon = drawIconImage(forecast, a);
  const day = drawText('div', weekDays[date%7]);
  const temp = drawText('div', `${minTemp} / ${maxTemp} °C`);
  const wind = drawWind(forecast, a);
  const pressure = drawText('div', `${forecast.list[a].main.pressure}hPa`);
  const first = document.createElement('div');
  first.appendChild(icon);
  const second = document.createElement('div');
  second.appendChild(day);
  second.appendChild(temp);
  second.appendChild(wind);
  second.appendChild(pressure);
  return { first, second };
}

export const renderForecast = (forecast) => {
  // main
  console.log(forecast);
  const cityContent = createCityHTML(forecast);
  const weatherContent = createWeatherHTML(forecast);
  $weatherDivAll[0].appendChild(cityContent);
  $weatherDivAll[0].appendChild(weatherContent);
  // next days
  for(let i = 1; i < 5; i++) {
    const { first, second } = createNthDayHtml(forecast, i * 8);
    $weatherDivAll[i].appendChild(first);
    $weatherDivAll[i].appendChild(second);
  }
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
  $search.style.padding = 0;
  $search.querySelector('h2').style.display = 'none';
  $weatherDivAll.forEach(div => {
    while(div.firstChild) {
      div.removeChild(div.firstChild);
    }
    div.style.visibility = 'visible';
  });
}
