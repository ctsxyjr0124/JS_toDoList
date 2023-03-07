const API_KEY = "06193bff5b11696fd1ce4a04bfe1e6d6";
function onGeoOK(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-Child"
      );
      const locationContainer = document.querySelector(
        "#weather span:last-Child"
      );
      const location = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherContainer.innerText = `weather is ${weather} / Now ${temp}°C`;
      locationContainer.innerText = `in ${location}`;
    })
  );
}
function onGeoError() {
  alert("can't find your location");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
