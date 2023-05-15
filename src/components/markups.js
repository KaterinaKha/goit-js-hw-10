function getCountryListMarkup({ name, capital, population, flags, languages }) {
  const languagesList = Object.values(languages).join(',');
  return `
    <div>
      <img src="${flags.svg}" alt="${flags.alt}" width="40" height="30">
      <h2 class="item-title">${name.official} (${name.common})</h2>
    </div>
    <p><span class="title-span">Capital:</span> ${capital}</p>
    <p><span class="title-span">Population:</span> ${population}</p>
    <p><span class="title-span">Language:</span> ${languagesList}</p>
  `;
}

function getCountryItemsMarkup({ name, flags }) {
  return `
  <li class="list-item">
    <img src="${flags.svg}" alt="${flags.alt}" width="40" height="30">
    <h2 class="item-title">${name.official} (${name.common})</h2>
  </li>`;
}

export { getCountryListMarkup, getCountryItemsMarkup };
