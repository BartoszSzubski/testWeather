const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=54a31b2a591bd3027d9197bdeff75df4";

const API_UNITS = "&units=metric";

const getWeather = () => {
  const city = input.value || "Szczecin";
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios.get(URL).then((res) => {
    console.log(res.data);
    const temp = res.data.main.temp;
    const hum = res.data.main.humidity;
    const status = Object.assign({}, ...res.data.weather);

    cityName.textContent = res.data.name;
    temperature.textContent = Math.floor(temp) + "°C";
    humidity.textContent = hum + "%";
    weather.textContent = status.main;
  });
};
getWeather();
button.addEventListener("click", getWeather);
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getWeather();
  }
});
getWeather();
