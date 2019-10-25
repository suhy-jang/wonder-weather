const kelvinToCelsius = k => (k - 273.15).toFixed(0);
const $weatherDivAll = document.querySelectorAll('.weather');
const $inputCity = document.getElementById('city');
const $search = document.getElementById('search');
const $weather = document.getElementById('weather');
const $currWeatherDiv = document.getElementById('weather1');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const getIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const locationDate = (city, time) => {
  const offsetDiff = new Date().getTimezoneOffset() * 60 + city.timezone;
  return new Date((time + offsetDiff)* 1000);
}

const getSunTime = (city, { sunOption }) => {
  const date = locationDate(city, city[sunOption]);
  const hours = date.getHours();
  const min = "0" + date.getMinutes();
  return { hours, min };
}

const sunriseTime = (city) => {
  const { hours, min } = getSunTime(city, { sunOption: 'sunrise' });
  return `${hours}:${min.substr(-2)}`;
}

const sunsetTime = (forecast) => {
  const { hours, min } = getSunTime(forecast, { sunOption: 'sunset' });
  return `${hours}:${min.substr(-2)}`;
}

const drawText = (tag, text) => {
  const obj = document.createElement(tag);
  obj.appendChild(document.createTextNode(text));
  return obj;
}

const daylight = (city) => {
  const text = `Daylight: ${sunriseTime(city)} - ${sunsetTime(city)}`;
  return drawText('div', text);
}

Date.prototype.mmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [(mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
        ].join(' / ');
};

const createCityHTML = (city) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  const header = drawText('h3', weekDays[(new Date()).getDay()]);

  container.appendChild(header);
  container.appendChild(drawText('div', locationDate(city, city.sunrise).mmdd()));
  container.appendChild(drawText('div', `${city.name}, ${city.country}`));
  container.appendChild(daylight(city));
  return container;
}

const drawIconImage = (weather) => {
  let icon = weather.icon;
  if (icon === '01n') icon = '01d';
  const image = document.createElement('img');
  image.src = getIconUrl(icon);
  return image;
}

const minMaxDegree = (listAll, index) => {
  let max;
  let min;
  for(let i = index; i < index + 8; i++) {
    const currMax = listAll[i].main.temp_max;
    const currMin = listAll[i].main.temp_min;
    if (!max || max < currMax) max = currMax;
    if (!min || min > currMin) min = currMin;
    if (listAll[i].dt_txt.split(' ')[1].split(':')[0] === '21') break;
  }
  return `${kelvinToCelsius(min)} / ${kelvinToCelsius(max)} °C`;
}

const drawWindDirection = (deg) => {
  const direction = document.createElement('i');
  direction.classList.add('fas', 'fa-location-arrow');
  direction.style.transform = `rotate(${ deg + 180 - 45 }deg)`; // wind from(180), original icon(45)
  return direction;
}

const drawWind = (wind) => {
  const deg = wind.deg;
  const windSpeed = wind.speed;
  const container = document.createElement('div');
  container.appendChild(drawWindDirection(deg));
  container.appendChild(document.createTextNode(`${windSpeed} m/s`));
  return container;
}

const drawHumidity = (main) => {
  const container = document.createElement('div');
  const icon = document.createElement('i');
  const percentage = document.createTextNode(`${main.humidity} %`);
  icon.classList.add('fas', 'fa-tint');
  container.appendChild(icon);
  container.appendChild(percentage);
  return container;
}

const drawPressure = (main) => {
  return `${main.pressure} hPa`;
}

const createWeatherHTML = (listAll) => {
  const container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');

  const list = listAll[0];
  container.appendChild(drawIconImage(list.weather[0]));
  container.appendChild(drawText('h2', minMaxDegree(listAll, 0)));
  container.appendChild(drawText('div', list.weather[0].main));
  container.appendChild(drawWind(list.wind));
  container.appendChild(drawHumidity(list.main));
  container.appendChild(drawText('div', drawPressure(list.main)));
  return container;
}

const createNthDayHtml = (listAll, a) => {
  const list = listAll[a];
  const date = (new Date()).getDay() + Math.floor(a/8);
  const first = document.createElement('div');
  const second = document.createElement('div');
  first.appendChild(drawIconImage(list.weather[0]));
  second.appendChild(drawText('div', weekDays[date%7]));
  second.appendChild(drawText('div', minMaxDegree(listAll, a)));
  second.appendChild(drawWind(list.wind));
  second.appendChild(drawHumidity(list.main));
  second.appendChild(drawText('div', drawPressure(list.main)));
  return { first, second };
}

export const renderForecast = (forecast) => {
  // main
  // console.log(forecast);
  const cityContent = createCityHTML(forecast.city);
  const weatherContent = createWeatherHTML(forecast.list);
  $weatherDivAll[0].appendChild(cityContent);
  $weatherDivAll[0].appendChild(weatherContent);
  // next days
  for(let i = 1; i < 5; i++) {
    const { first, second } = createNthDayHtml(forecast.list, i * 8);
    $weatherDivAll[i].appendChild(first);
    $weatherDivAll[i].appendChild(second);
  }
}

export const submit = () => {
  return $inputCity;
}

export const getInput = () => {
  const value = $inputCity.value;
  $inputCity.value = '';
  return value;
}

export const resetHTML = () => {
  $search.style.padding = 0;
  $search.querySelector('#search .header').style.display = 'none';
  $weatherDivAll.forEach(div => {
    while(div.firstChild) {
      div.removeChild(div.firstChild);
    }
    div.style.visibility = 'visible';
  });
}
