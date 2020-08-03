const weather = document.querySelector(".js-weather");
const API_KEY = "d3cdd52b097ee26db148f8b3c29b10bc";
const COORDS = "coords";
let locationIcon = document.getElementsByClassName('.js-weather-icon');

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "우산 챙기세요",
        icon: "ios-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "날이 좋아요",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstrom",
        subtitle: "천둥이쳐요!",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "구름이 꼈어요",
        icon: "ios-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "눈이와요!",
        icon: "ios-snow"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "이슬비가 내려요",
        icon: "ios-rainy-outline"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "이슬비가 내려요",
        icon: "ios-rainy-outline"
    },
    Mist: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "이슬비가 내려요",
        icon: "ios-rainy-outline"
    }
}

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
            weather.innerText = `
            ┌───────────┐
            │   <<Today Weather>>
            │  ───────────
            │   <Current> ${mainWeather}
            │   <Temperature> ${temperature}℃ 
            │   <Humid> ${humid}% 
            │   <City> ${place}
            └───────────┘`;

            locationIcon.innerHTML = `<img src="${iconUrl}"/>`;
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