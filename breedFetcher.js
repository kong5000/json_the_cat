const request = require('request');

let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`, function(error, response, body) {
  if (error) {
    console.error('error', error);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("breed not found");
    return;
  }
  console.log(data[0].breeds[0].description);
});