const apiUrl = `https://restcountries.com/v3.1/independent?status=true&fields=languages,capital`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const countriesDiv = document.getElementById('countries');
    data.forEach(country => {
      const capital = country.capital ? country.capital[0] : 'No capital';
      const languages = country.languages ? Object.values(country.languages).join(', ') : 'No languages';
      
      const countryInfo = document.createElement('div');
      countryInfo.innerHTML = `<strong>Capital:</strong> ${capital} <br> <strong>Languages:</strong> ${languages}`;
      countriesDiv.appendChild(countryInfo);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = 'There was a problem fetching the countries data.';
  });
