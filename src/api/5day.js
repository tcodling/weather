import request from "superagent";

export function getWeather(search) {
  return request
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${search ? search : 'london'}&mode=json&units=metric&appid=55d59c1173c4a3cb66be4fd554259731`)
    .then((res) => {
        return res.body
    });
}
