const API_KEY = "d3cdd52b097ee26db148f8b3c29b10bc";
const COORDS = "coords";

function saveCoodes(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coordsObj = {
        latitude: latitude,
        longtitude: longtitude
    };
    saveCoodes(coordsObj);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}

function init() {
    loadCoords();
}

init();