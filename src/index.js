import {
  renderForecast,
  submit,
  getInput,
  resetHTML,
  findNearMe,
  loading,
} from './components';

import {
  getForecast,
  getForecastFromGeo,
  fetchCoordinates,
  errorHandler,
} from './helpers';

const searchWithInput = () => {
  resetHTML();
  const inputText = getInput();
  getForecast(inputText).then(forecast => renderForecast(forecast));
};

const searchWithGeo = async () => {
  resetHTML();
  try {
    fetchCoordinates(loading, renderForecast);
  } catch (err) {
    errorHandler(err.message);
  }
};

submit().addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchWithInput();
  }
});

findNearMe.addEventListener('click', searchWithGeo);
