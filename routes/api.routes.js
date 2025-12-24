const express = require('express');
const apiRouter = express.Router();

const rmUserService = require('../services/randomUser.service');
const userCountryDataService = require('../services/country.service');
const exchangeRateService = require('../services/exchange.service');
const countryNewsService = require('../services/news.service');



apiRouter.get('/user-data', async (req, res) => {
    try {
        const rmUserInfo = await rmUserService.getRandomUser();

        res.json(rmUserInfo);
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Failed to find a random User' 
        });
    }
});


apiRouter.get('/user-data/user-fullInfo', async (req, res) => {
    try {
        const rmUserInfo = await rmUserService.getRandomUser();
        const rmUserCountry = await userCountryDataService.getCountryData(rmUserInfo.country);


        // Currency code
        let currencyCode = 'USD';
        if (rmUserCountry.currency && rmUserCountry.currency.includes('(')) {
            currencyCode = rmUserCountry.currency.split(' ')[0];
        }
        const currencyExchange = await exchangeRateService.getExchangeRates(currencyCode);

        
        const countryNews = await countryNewsService.getCountryNews(rmUserInfo.country);

        res.json({
            rmUserInfo,
            rmUserCountry,
            currencyExchange,
            //Output
            display: `1 ${currencyCode} = ${currencyExchange.USD} USD, 1 ${currencyCode} = ${currencyExchange.KZT} KZT`,
            countryNews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to find a full data' 
        });
    }
});

module.exports = apiRouter;

