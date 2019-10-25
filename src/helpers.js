const kelvinToCelsius = k => (k - 273.15).toFixed(0);
const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
const $weatherDivAll = document.querySelectorAll('.weather');
const $inputCity = document.getElementById('city');
const $inputToggle = document.getElementById('unit');
const $search = document.getElementById('search');
const $searchNoInfo = document.querySelector('.no-info');
const $loadingAnimation = document.getElementById('loading-animation');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const getIconUrl = icon => `https://openweathermap.org/img/wn/${icon}@2x.png`;
let $kelvinTemperatureAll;

const customUnit = () => ($inputToggle.checked ? '°C' : '°F');

const kelvinToCustomUnit = (k) => ($inputToggle.checked ? kelvinToCelsius(k) : kelvinToFahrenheit(k));

const locationDate = (city, time) => {
  const offsetDiff = new Date().getTimezoneOffset() * 60 + city.timezone;
  return new Date((time + offsetDiff) * 1000);
};

const getSunTime = (city, { sunOption }) => {
  const date = locationDate(city, city[sunOption]);
  const hours = date.getHours();
  const sec = date.getSeconds();
  const min = `0${date.getMinutes() + (sec >= 30)}`; // round for second
  return { hours, min };
};

const sunriseTime = (city) => {
  const { hours, min } = getSunTime(city, { sunOption: 'sunrise' });
  return `${hours}:${min.substr(-2)}`;
};

const sunsetTime = (forecast) => {
  const { hours, min } = getSunTime(forecast, { sunOption: 'sunset' });
  return `${hours}:${min.substr(-2)}`;
};

const drawText = ({ tag, classes, text }) => {
  const obj = document.createElement(tag);
  if (classes) classes.split(' ').forEach(c => obj.classList.add(c));
  obj.appendChild(document.createTextNode(text));
  return obj;
};

const daylight = (city) => {
  const text = `Daylight: ${sunriseTime(city)} - ${sunsetTime(city)}`;
  return drawText({ tag: 'div', text });
};

Date.prototype.mmdd = function () {
  const mm = this.getMonth() + 1; // getMonth() is zero-based
  const dd = this.getDate();

  return [(mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
  ].join(' / ');
};

const createCityHTML = (city) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  const header = drawText({ tag: 'h3', text: weekDays[(new Date()).getDay()] });

  container.appendChild(header);
  container.appendChild(drawText({ tag: 'div', text: locationDate(city, city.sunrise).mmdd() }));
  container.appendChild(drawText({ tag: 'div', text: `${city.name}, ${city.country}` }));
  container.appendChild(daylight(city));
  return container;
};

const drawIconImage = (weather) => {
  let { icon } = weather;
  if (icon === '01n') icon = '01d';
  const image = document.createElement('img');
  image.src = getIconUrl(icon);
  return image;
};

const drawTemperature = ({ min, max }) => `${kelvinToCustomUnit(min)} / ${kelvinToCustomUnit(max)} ${customUnit()}`;

const minMaxDegree = (listAll, index) => {
  let max;
  let min;
  for (let i = index; i < index + 8; i++) {
    const currMax = listAll[i].main.temp_max;
    const currMin = listAll[i].main.temp_min;
    if (!max || max < currMax) max = currMax;
    if (!min || min > currMin) min = currMin;
    if (listAll[i].dt_txt.split(' ')[1].split(':')[0] === '21') break;
  }
  $kelvinTemperatureAll.push({ min, max });
  return { min, max };
};

const toggleTemperatureUnit = () => {
  const targetAll = document.querySelectorAll('.temperature');
  targetAll.forEach((target, i) => {
    const { min, max } = $kelvinTemperatureAll[i];
    target.innerHTML = drawTemperature({ min, max });
  });
};

const drawWindDirection = (deg) => {
  const direction = document.createElement('i');
  direction.classList.add('fas', 'fa-location-arrow');
  direction.style.transform = `rotate(${deg + 180 - 45}deg)`; // wind from(180), original icon(45)
  return direction;
};

const drawWind = (wind) => {
  const { deg } = wind;
  const windSpeed = wind.speed;
  const container = document.createElement('div');
  container.appendChild(drawWindDirection(deg));
  container.appendChild(document.createTextNode(`${windSpeed} m/s`));
  return container;
};

const drawHumidity = (main) => {
  const container = document.createElement('div');
  const icon = document.createElement('i');
  const percentage = document.createTextNode(`${main.humidity} %`);
  icon.classList.add('fas', 'fa-tint');
  container.appendChild(percentage);
  container.appendChild(icon);
  return container;
};

const drawPressure = main => `${main.pressure} hPa`;

const createWeatherHTML = (listAll) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');

  const list = listAll[0];
  const temperature = drawTemperature(minMaxDegree(listAll, 0));
  container.appendChild(drawIconImage(list.weather[0]));
  container.appendChild(drawText({ tag: 'h2', classes: 'temperature', text: temperature }));
  container.appendChild(drawText({ tag: 'div', text: list.weather[0].main }));
  container.appendChild(drawWind(list.wind));
  container.appendChild(drawHumidity(list.main));
  container.appendChild(drawText({ tag: 'div', text: drawPressure(list.main) }));
  return container;
};

const createNthDayHtml = (listAll, i) => {
  const list = listAll[i];
  const date = (new Date()).getDay() + Math.floor(i / 8);
  const first = document.createElement('div');
  const second = document.createElement('div');
  const temperature = drawTemperature(minMaxDegree(listAll, i));
  first.appendChild(drawIconImage(list.weather[0]));
  second.appendChild(drawText({ tag: 'div', text: weekDays[date % 7] }));
  second.appendChild(drawText({ tag: 'div', classes: 'temperature', text: temperature }));
  second.appendChild(drawWind(list.wind));
  second.appendChild(drawHumidity(list.main));
  second.appendChild(drawText({ tag: 'div', text: drawPressure(list.main) }));
  return { first, second };
};

$inputToggle.addEventListener('click', () => {
  toggleTemperatureUnit();
});

export const renderForecast = (forecast) => {
  $loadingAnimation.classList.add('d-none');
  if (!forecast) {
    $searchNoInfo.classList.remove('d-none');
    return;
  }
  // main
  const cityContent = createCityHTML(forecast.city);
  const weatherContent = createWeatherHTML(forecast.list);
  $weatherDivAll[0].appendChild(cityContent);
  $weatherDivAll[0].appendChild(weatherContent);
  $weatherDivAll[0].style.visibility = 'visible';
  // next days
  for (let i = 1; i < 5; i++) {
    const { first, second } = createNthDayHtml(forecast.list, i * 8);
    $weatherDivAll[i].appendChild(first);
    $weatherDivAll[i].appendChild(second);
    $weatherDivAll[i].style.visibility = 'visible';
  }
};

export const submit = () => $inputCity;

export const getInput = () => {
  const { value } = $inputCity;
  $inputCity.value = '';
  return value;
};

export const resetHTML = () => {
  $search.style.padding = 0;
  $search.querySelector('#search .header').style.display = 'none';
  $weatherDivAll.forEach((div) => {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    div.style.visibility = 'hidden';
  });
  $searchNoInfo.classList.add('d-none');
  $loadingAnimation.classList.remove('d-none');
  $kelvinTemperatureAll = [];
};

$inputCity.focus();
