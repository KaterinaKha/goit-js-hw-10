function getCountryListMarkup({ name, capital, population, flags, languages }) {
  const languagesList = Object.values(languages).join(',');
  return `
    <div>
      <img src="${flags.svg}" alt="${flags.alt}" width="50" height="30">
      <h2 class="item-title">${name.official} <span class="title-span">(${name.common})</span></h2>
    </div>
    <p>Capital:<span class="title-span"> ${capital}</span></p>
    <p>Population:<span class="title-span"> ${population}</span></p>
    <p>Language:<span class="title-span"> ${languagesList}</span></p>
  `;
}

function getCountryItemsMarkup({ name, flags }) {
  return `
  <li class="list-item">
    <img src="${flags.svg}" alt="${flags.alt}" width="40" height="30">
    <h2 class="item-title">${name.official} <span class="title-span">(${name.common})</span></h2>
  </li>`;
}

export { getCountryListMarkup, getCountryItemsMarkup };
