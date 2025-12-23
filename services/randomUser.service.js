const axios = require('axios');

async function getRandomUser() {
    const response = await axios.get('https://randomuser.me/api/')
    const user = response.data.results[0];

    // Random user info 
    return {
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        profilePicture: user.picture.large,
        age: user.dob.age,
        dateOfBirth: user.dob.date,
        city: user.location.city,
        country: user.location.country,
        fullAddress: `${user.location.street.name} ${user.location.street.number}`
    };
}

module.exports = { getRandomUser };