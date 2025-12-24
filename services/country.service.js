const axios = require('axios');

async function getCountryData(countryName) {
    try {
        const apiResponse = await axios.get( `https://restcountries.com/v3.1/name/${countryName}`);
        
        const country = apiResponse.data[0];

        return {
            country_name: country.name?.common || countryName,
            capital: country.capital ? country.capital[0] : 'Not Available',
            languages: country.languages ? Object.values(country.languages) : ['Not Available'],
            currency: country.currencies ? `${Object.keys(country.currencies)[0]} (${Object.values(country.currencies)[0].name})` : 'Not Available',
            flag: country.flags?.png || ''
        };

    } catch (error) {
        return {
            country_name: countryName,
            capital: 'Not Available',
            languages: ['Not Available'],
            currency: 'Not Available',
            flag: ''
        };
    }
}

module.exports = { getCountryData };

