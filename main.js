const API_KEY = "ENTER YOUR API KEY"; //Using old API_KEY as my new api key is taking time to get activated;
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-btn");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) { 
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/images/clear.png"
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
})

