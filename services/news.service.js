const axios = require('axios');

const API_KEY = process.env.NEWS_API_KEY;

async function getCountryNews(countryName) {
    try {
        const apiResponse = await axios.get('https://newsapi.org/v2/everything',
        {
            params: {
                q: countryName,
                language: 'en',
                pageSize: 5
            },

            headers: {
                'X-Api-Key': API_KEY
            } 
        });

        return apiResponse.data.articles.map(article => ({
            title: article.title,
            description: article.description,
            image: article.urlToImage,
            url: article.url
        }));
    } catch (error) {
        return [];
    }
}

module.exports = { getCountryNews };
