const apiKey = "c2f333ba558c899a19596fc7f1364f6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

if(data.weather[0].main == "Clear"){
weathericon.src = "images/clear.png"
}
else if(data.weather[0].main == "Clouds"){
weathericon.src = "images/clouds.png"
}
else if(data.weather[0].main == "Drizzle"){
weathericon.src = "images/drizzle.png"
}
else if(data.weather[0].main == "mist"){
weathericon.src = "images/mist.png"
}
else if(data.weather[0].main == "Rain"){
weathericon.src = "images/rain.png"
}
else if(data.weather[0].main == "Snow"){
weathericon.src = "images/snow.png"
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

    }

    

}

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    checkWeather(searchBox.value);
})