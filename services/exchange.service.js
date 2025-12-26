const axios = require('axios');

const API_KEY = process.env.EXCHANGE_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

async function getExchangeRates(currency) {
    try {
        const apiResponse = await axios.get(`${BASE_URL}/${API_KEY}/latest/${currency}`);


        const currencyrates = apiResponse.data.conversion_rates;
        console.log(currencyrates);

        return {
            base: currency,
            USD: currencyrates?.USD ?? null,
            KZT: currencyrates?.KZT ?? null,
            EUR: currencyrates?.EUR ?? null
        };
    } catch {
        return {
            base: currency,
            USD: null,
            KZT: null,
            EUR: null
        };
    }
}


module.exports = { getExchangeRates };
