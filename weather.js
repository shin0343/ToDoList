const weather = document.querySelector(".js-weather");
const API_KEY = "d3cdd52b097ee26db148f8b3c29b10bc";
const COORDS = "coords";
let locationIcon = document.getElementsByClassName('js-weather-icon');

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response) { // keyword 'then' waits 'fetch'
            return response.json();
        })
        .then(function(json) { // keyword 'then' waits 'fetch'
            console.log(json);
            const iconCode = json.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            const mainWeather = json.weather[0].description;
            const temperature = json.main.temp;
            const humid = json.main.humidity;
            const place = json.name;
            weather.innerText = `<현재 날씨> ${mainWeather}
            <온도> ${temperature}℃ 
            <습도> ${humid}% 
            <장소> ${place}`;

            locationIcon[0].innerHTML = `<img src="${iconUrl}"/>`;
            console.log(locationIcon);
        });
}

function saveCoodes(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoodes(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        console.log(loadedCoords);
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();