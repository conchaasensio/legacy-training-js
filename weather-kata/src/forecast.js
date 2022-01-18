const request = require('request');
const {promisify} = require('util');
const rp = promisify(request);

class Forecast {
    async predict(city, datetime, wind) {
        // When date is not provided we look for the current prediction
        if (!datetime) {
            datetime = new Date();
        }

        // If there is a prediction for datetime
        let datetime2 = new Date();
        datetime2.setDate(datetime2.getDate() + 6);
        if (datetime < datetime2) {
            // Find the id of the city on metawheather
            const woeid = JSON.parse((await rp(
                'https://www.metaweather.com/api/location/search/?query=' + city)).body)[0].woeid;

            // Find the predictions for the city
            const results = JSON.parse((await rp(
                'https://www.metaweather.com/api/location/' + woeid)).body).consolidated_weather;
            for (const result of results) {
                // When the date is the expected
                if (result.applicable_date == datetime.toISOString().slice(0, 10)) {
                    // If we have to return the wind information
                    if (wind) {
                        return result.wind_speed;
                    } else {
                        return result.weather_state_name;
                    }
                }
            }
        } else {
            return '';
        }
    }
}

module.exports = Forecast;
