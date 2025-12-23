const express = require('express');
const apiRouter = express.Router();

const rmUserService = require('../services/randomUser.service')

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

module.exports = apiRouter;