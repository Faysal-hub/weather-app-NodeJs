const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=91eccc99c52c925191c19d6744837705&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  // Parse the response body from JSON string into JavaScript object
  const data = JSON.parse(response.body);
  // Will print the current temperature to the console
  console.log(data.current);
});
