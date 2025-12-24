const btn = document.getElementById('loadBtn');
const app = document.getElementById('app');

btn.addEventListener('click', async () => {
  app.innerHTML = '<p style="padding: 20px;">Loading user data...</p>';
  
  try {
    const response = await fetch('http://localhost:3000/api/user-data/user-fullInfo');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success === false) {
      app.innerHTML = `<div class="card error"><h3>Error</h3><p>${data.error}</p></div>`;
      return;
    }
    
    render(data);
  } catch (error) {
    console.error('Fetch error:', error);
    app.innerHTML = `<div class="card error"><h3>Connection Error</h3><p>${error.message}</p></div>`;
  }
});

function render(data) {
  const { rmUserInfo: user, rmUserCountry: country, currencyExchange: exchange, countryNews: news } = data;
  
  app.innerHTML = `
    <div class="profile-section">
      <div class="card">
        <h2>👤 User Profile</h2>
        <div class="user-header">
          <img src="${user.profilePicture}" alt="Profile" class="profile-img">
          <div class="user-info">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>${user.gender}, ${user.age} years old</p>
            <p><small>Born: ${new Date(user.dateOfBirth).toLocaleDateString()}</small></p>
          </div>
        </div>
        <p><b>📍 Location:</b> ${user.fullAddress}, ${user.city}, ${user.country}</p>
      </div>
      
      <div class="card">
        <h2>🌍 Country Information</h2>
        <div class="country-header">
          <img src="${country.flag}" alt="Flag" class="flag-img">
          <div>
            <h3>${country.country_name}</h3>
            <p><b>Capital:</b> ${country.capital}</p>
          </div>
        </div>
        <p><b>🗣️ Languages:</b> ${Array.isArray(country.languages) ? country.languages.join(', ') : country.languages}</p>
        <p><b>💰 Currency:</b> ${country.currency}</p>
        <p class="exchange-rate">
          <b>💱 Exchange Rates:</b><br>
          1 ${exchange.base || 'USD'} = ${exchange.USD ?? 'N/A'} USD<br>
          1 ${exchange.base || 'USD'} = ${exchange.KZT ?? 'N/A'} KZT
        </p>
      </div>
      
      <div class="card news">
        <h2>📰 Latest News from ${user.country}</h2>
        ${news && news.length > 0 
          ? news.map(n => `
            <div class="news-item">
              ${n.image ? `<img src="${n.image}" alt="News" class="news-img">` : ''}
              <div class="news-content">
                <h4>${n.title || 'No title'}</h4>
                <p>${n.description || 'No description available'}</p>
                <a href="${n.url || '#'}" target="_blank" class="news-link">Read full article →</a>
              </div>
            </div>
          `).join('')
          : '<p class="no-news">No news available at the moment</p>'
        }
      </div>
    </div>
  `;
}