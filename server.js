require('dotenv').config();

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api.routes');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('frontend')); 


app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
