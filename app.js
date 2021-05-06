const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=91eccc99c52c925191c19d6744837705&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather services!');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        console.log(
          response.body.current.weather_descriptions[0] +
            ', It is currently ' +
            response.body.current.temperature +
            " degress out. It's feel like " +
            response.body.current.feelslike +
            ' degress out.'
        );
    }
});


const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmF5c2FsMTMwIiwiYSI6ImNraTNzYjNrNTdlYWIyemw2MmJucnU5NXUifQ.Oqqwyn4wLKXHxL9XoaKGWg';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.');
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
