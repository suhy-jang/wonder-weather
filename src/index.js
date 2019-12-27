import {
  renderForecast, submit, getInput, resetHTML, findNearMe,
} from './components';

import {
  getForecast, getForecastFromGeo, fetchCoordinates,
} from './helpers';

const searchWithInput = () => {
  resetHTML();
  getForecast(getInput).then(forecast => renderForecast(forecast));
};

const searchWithGeo = () => {
  resetHTML();
  fetchCoordinates()
    .then(coord => getForecastFromGeo(coord))
    .then(forecast => renderForecast(forecast));
};

submit().addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchWithInput();
  }
});

findNearMe.addEventListener('click', () => {
  searchWithGeo();
});
