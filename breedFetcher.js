const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("breed not found", null);
      return;
    }
    const description = data[0].description.trim();
    callback(error, description);
  });
};

module.exports = {fetchBreedDescription};