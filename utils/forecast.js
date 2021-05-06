const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=91eccc99c52c925191c19d6744837705&query=' +
    latitude +
    ',' +
    longitude;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ', It is currently ' +
          body.current.temperature +
          " degress out. It's feel like " +
          body.current.feelslike +
          ' degress out.'
      );
    }
  });
};

module.exports = forecast;
