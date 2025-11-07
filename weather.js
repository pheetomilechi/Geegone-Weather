const apiKey = "2cd4f4b1aba92729f6baf3663d4d3490";

async function checkWeather(city){
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london";
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
        console.error("API error:", data);
        alert("Failed to fetch weather data. Check your API key and city name.");
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    const condition = data.weather[0].main;
    const weatherIcon = document.querySelector(".weather-icon");

    if (condition === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if (condition === "Clear"){
        weatherIcon.src = "images/clear.png";
    } else if (condition === "Rain"){
        weatherIcon.src = "images/rain.png";
    } else if (condition === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } else if (condition === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}

document.querySelector(".search button").addEventListener("click", () =>{
    const city = document.querySelector(".search input").value;
    checkWeather(city);
});
