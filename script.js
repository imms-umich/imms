// scripts.js

// Fetch the latest currency rates and populate the dropdowns
function fetchCurrencies() {
  const url = 'https://api.exchangerate-api.com/v4/latest/USD'; // API endpoint

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const selectElements = document.querySelectorAll('select');
      for (const key in data.rates) {
        selectElements.forEach(select => {
          const option = document.createElement('option');
          option.value = key;
          option.textContent = key;
          select.appendChild(option);
        });
      }
    })
    .catch(error => console.error('Error fetching the currency data:', error));
}

// Perform the currency conversion
function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const resultElement = document.getElementById('result');

  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency];
      const result = (amount * rate).toFixed(2);
      resultElement.textContent = `${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`;
    })
    .catch(error => console.error('Error converting currency:', error));
}

// Fetch the latest currency rates and display them
function displayCurrencyRates() {
  const url = 'https://api.exchangerate-api.com/v4/latest/USD';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rates = data.rates;
      const currenciesToShow = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD']; // Add more as needed
      let ratesDisplay = document.getElementById('ratesDisplay');

      // Clear any existing rates
      ratesDisplay.innerHTML = '';

      currenciesToShow.forEach(currency => {
        let rate = rates[currency];
        let currencyElement = document.createElement('p');
        currencyElement.textContent = `1 USD = ${rate.toFixed(4)} ${currency}`;
        ratesDisplay.appendChild(currencyElement);
      });
    })
    .catch(error => console.error('Error fetching the currency rates:', error));
}

document.getElementById('convert').addEventListener('click', convertCurrency);

// Initial fetch of currencies
fetchCurrencies();
displayCurrencyRates();