<template>
  <section class="bg-white dark:bg-gray-900">
    <UContainer>
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-white border-gray-200 dark:bg-gray-900 py-4 md:py-6">
        <div>
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary">IMMS</span>
        </div>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <ColorScheme>
              <USelect variant="outline" v-model="$colorMode.preference"
                :options="['system', 'light', 'dark']" />
            </ColorScheme>

          </ul>
        </div>
      </div>
    </UContainer>

    <UContainer>
      <section class="bg-white dark:bg-gray-900">
        <div class=" py-8 mx-auto text-center">
          <div class="max-w-2xl mx-auto">
            <h1
              class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Decentralized for a better tomorrow</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:mb-12 lg:text-xl dark:text-gray-400">Buy, trade, and hold
              <span class="font-medium text-gray-900 dark:text-white">600+</span> cryptocurrencies on IMMS
            </p>
          </div>
          <div class="grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <div class="p-4 text-primary-700 bg-primary-100 rounded-lg dark:bg-primary-900 dark:text-primary-300">
              <h2 class="text-3xl font-extrabold leading-tight">$76 billion</h2>
              <span class="text-primary-500 dark:text-primary-400">24h trading volume</span>
            </div>
            <div class="p-4 text-teal-600 bg-teal-100 rounded-lg dark:bg-teal-900 dark:text-teal-300">
              <h2 class="text-3xl font-extrabold leading-tight">600+</h2>
              <span class="text-teal-500 dark:text-teal-400">Cryptocurrencies listed</span>
            </div>
            <div class="p-4 text-indigo-700 bg-indigo-100 rounded-lg dark:bg-indigo-900 dark:text-indigo-300">
              <h2 class="text-3xl font-extrabold leading-tight">34 million</h2>
              <span class="text-indigo-500 dark:text-indigo-400">Diluted market cap</span>
            </div>
            <div class="p-4 text-purple-700 bg-purple-100 rounded-lg dark:bg-purple-900 dark:text-purple-300">
              <h2 class="text-3xl font-extrabold leading-tight">90 million</h2>
              <span class="text-purple-500 dark:text-purple-400">Registered users</span>
            </div>
            <div class="p-4 text-green-600 bg-green-100 rounded-lg dark:text-green-300 dark:bg-green-900">
              <h2 class="text-3xl font-extrabold leading-tight">0.10%</h2>
              <span class="text-green-500 dark:text-green-400">Low transaction fees</span>
            </div>
          </div>

          <div class="p-8 mt-8 lg:mt-12 border border-gray-200 rounded-lg dark:border-gray-700">
            <div class="max-w-3xl mx-auto mb-4 sm:mb-10" id="myTabContent">
              <div class="bg-purple-400/10 rounded-md mb-6 p-5">
                <!-- Display the currency rates -->
                <div v-if="Object.keys(rates).length > 0">
                  <p v-for="(rate, currency) in rates" :key="currency">
                    1 USD = {{ rate.toFixed(4) }} {{ currency }}

                  </p>
                  <p>{{ result }}</p>
                </div>

                <!-- Message when there are no rates to display -->
                <p v-else>No currency rates to display. Click the button to fetch rates.</p>
              </div>
              <div class="items-center block space-y-4 sm:space-y-0 sm:space-x-8 sm:flex">
                <div class="w-full">
                  <USelect v-model="firstSelected" size="xl" :options="firstCHOICE" class="mb-2" />
                  <div class="flex">
                    <span
                      class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      {{ firstSelected }}
                    </span>
                    <input v-model="firstInput" type="number" id="euro-form"
                      class="flex-1 text-2xl block w-full min-w-0 p-3  text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none rounded-r-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="1000">
                  </div>
                </div>
                <div class="w-full">
                  <USelect v-model="secondSelected" size="xl" :options="secondCHOICE" class="mb-2" />
                  <div class="flex">
                    <span
                      class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      {{ secondSelected }}
                    </span>
                    <input v-model="result" type="number" id="bitcoin-form"
                      class="flex-1 ext-2xl  block w-full min-w-0 p-3  text-gray-900 placeholder-gray-500 border  border-gray-300 rounded-none rounded-r-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="1000">
                  </div>
                </div>
              </div>
            </div>
            <UButton @click="fetchCurrencyRates"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg sm:w-auto bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Convert
            </UButton>
          </div>
        </div>
      </section>
    </UContainer>
    <UContainer>
      <team/>
    </UContainer>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const firstInput = ref(430.00)

const firstCHOICE = ['USA']
const secondCHOICE = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD']
const firstSelected = ref(firstCHOICE[0])
const secondSelected = ref(secondCHOICE[0])

const rates = ref({});
const result = ref(null);

function fetchCurrencyRates() {
  const url = 'https://api.exchangerate-api.com/v4/latest/USD';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.rates[secondSelected.value]) {
        result.value = (data.rates[secondSelected.value] * firstInput.value).toFixed(2);
      }
      secondCHOICE.forEach(currency => {
        if (data.rates[currency]) {
          rates.value[currency] = data.rates[currency];
        }
      });
    })
    .catch(error => console.error('Error fetching the currency rates:', error));
}

// Watch for changes in the firstInput value and fetch new rates
watch(firstInput, () => {
  fetchCurrencyRates();
});

// Initial fetch of currency rates
fetchCurrencyRates();

</script>
