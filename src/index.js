import './css/styles.css';
import { fetchCountries } from './components/fetchCountries';
import {
  getCountryItemsMarkup,
  getCountryListMarkup,
} from './components/markups';
import { refs } from './components/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

function inputOnSearchBox(e) {
  const inputValue = e.target.value.trim().toLowerCase();
  refs.countryInfoEl.innerHTML = '';
  refs.countryListEl.innerHTML = '';

  if (!inputValue) {
    return;
  } else if (!!inputValue) {
    fetchCountries(inputValue)
      .then(countries => {
        console.log(countries);
        if (countries.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (countries.length > 1 && countries.length <= 10) {
          const markup = countries.reduce(
            (markup, country) => markup + getCountryItemsMarkup(country),
            ''
          );
          refs.countryInfoEl.innerHTML = markup;
          refs.countryListEl.innerHTML = '';
          console.log(countries);
        } else if (countries.length === 1) {
          refs.countryListEl.innerHTML = getCountryListMarkup(countries[0]);
        }
      })
      .catch(err =>
        Notify.failure('Oops, there is no country with that name', err)
      );
  }
}

refs.inputCountryEl.addEventListener(
  'input',
  debounce(inputOnSearchBox, DEBOUNCE_DELAY)
);
