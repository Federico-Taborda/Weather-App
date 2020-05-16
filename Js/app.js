document.getElementById("search").addEventListener("click", (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;
    obtainWeather(city);
})

function obtainWeather(city) {
    const apiKey = "d76e00011de112784dab002fd99b6265";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(data => data.json())
        .then(json => {
            let name = `${json.name} - ${json.sys.country}`;
            let weather = `${json.weather[0].main}/${json.weather[0].description}`;
            let icon = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
            let temperature = `${json.main.temp.toFixed()} °C`;
            let min_max = `Min ${json.main.temp_min.toFixed()} °C - Max ${json.main.temp_max.toFixed()} °C`;
            let wind = `Speed ${json.wind.speed}Km/h`;
            return {name, weather, icon, temperature, min_max, wind};
        })
        .then(data => {
            document.getElementById("city-name").textContent = data.name;
            document.getElementById("weather").textContent = data.weather;
            document.getElementById("icon").src = data.icon;
            document.getElementById("temperature").textContent = data.temperature;
            document.getElementById("min-max").textContent = data.min_max;
            document.getElementById("wind-speed").textContent = data.wind;
        })
};


    