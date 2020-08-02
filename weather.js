const weather = document.querySelector(".js-weather");
const API_KEY = "d3cdd52b097ee26db148f8b3c29b10bc";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response) { // keyword 'then' waits 'fetch'
            return response.json();
        })
        .then(function(json) { // keyword 'then' waits 'fetch'
            //const weatherIcon = json.main.weather[0].icon;
            const temperature = json.main.temp;
            const humid = json.main.humidity;
            const place = json.name;
            weather.innerText = `
            ===============
            <<Today Weather>>
            ===============
            <Temperature> ${temperature} ℃ 
            <Humid> ${humid} % 
            <City> ${place}`;
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