const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=91eccc99c52c925191c19d6744837705&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  console.log(
      ' It is currently ' +
      response.body.current.temperature +
      " degress out. It's feel like " +
      response.body.current.feelslike +
      ' degress out.'
  );
});
