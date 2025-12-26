# Assignment 2: API Integration Project
## Course: WEB Technologies 2 (Back End)
### Student: Iskander Kustayev



## Project Description
A web application that sequentially integrates four different APIs to display a complete profile of a random user.

## What the Application Does:
Generates a random user

Finds information about their country

Shows the exchange rate for that country's currency

Displays the latest news about the country


## Quick Start
1. Install Dependencies
bash
npm install

2. Configure API Keys
Create a .env file in the project root and add your keys:

env
NEWS_API_KEY=your_newsapi_key_here
EXCHANGE_API_KEY=your_exchangerate-api_key_here
🔐 Important: The .env file is not committed to Git for security.

3. Start the Server
bash
npm start
# or
node server.js


### The server will run on port 3000: http://localhost:3000

4. Open the Application
After starting the server, open in your browser:

http://localhost:3000



## APIs Used
1. Random User API
Link: https://randomuser.me/api/

Purpose: Generate a random user profile

Data extracted: name, surname, gender, age, date of birth, photo, city, country, address

2. REST Countries API
Link: https://restcountries.com/

Purpose: Information about the user's country

Data extracted: country name, capital, languages, currency, flag

3. ExchangeRate API
Link: https://www.exchangerate-api.com/

Purpose: Exchange rate of the user's country currency to USD and KZT

Sample output: 1 EUR = 1.08 USD, 1 EUR = 495.20 KZT

4. News API
Link: https://newsapi.org/

Purpose: Latest news about the user's country

Requirements: 5 news articles in English

Data extracted: headline, description, image, link


## Project Structure

assignment2-api/
├── server.js                 # Main server

├── routes/

│   └── api.routes.js         # API routes

├── services/                 # API logic

│   ├── randomUser.service.js

│   ├── country.service.js

│   ├── exchange.service.js

│   └── news.service.js

├── frontend/                   # Frontend

│   ├── index.html

│   ├── style.css

│   └── script.js


├── .env                      # API keys

├── .gitignore

├── package.json

└── README.md




## Key Features
All API requests are server-side — keys are protected

Clean modular architecture — each API in a separate service

Error handling — fallback values shown if APIs fail

Responsive design — works on computers and phones

Simple setup — only two API keys needed

## User Interface
The application displays data in three cards:

User Profile — photo, name, age, address

Country Information — flag, capital, languages, currency, exchange rates

Latest News — 5 headlines with descriptions and links

## API Testing
You can test each API via these endpoints:

User data: http://localhost:3000/api/user-data

Complete profile: http://localhost:3000/api/user-data/user-fullInfo


## Technologies Used
Backend: Node.js, Express, Axios

Frontend: HTML5, CSS3, Vanilla JavaScript

APIs: Random User, REST Countries, ExchangeRate-API, NewsAPI

Security: Environment variables (.env)