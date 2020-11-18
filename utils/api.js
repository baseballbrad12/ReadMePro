const axios = require("axios");
function api(username) {
    return axios.get(`https://api.github.com/users/${username}`)
        .catch(err => {
            console.log(`User not found`);
        });
}
module.exports = api;