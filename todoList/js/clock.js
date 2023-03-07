const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${Minutes}:${Seconds}`;
}

// function getDDay() {
//   const dTime = new Date("2023-12-25");
//   const time = new Date();
//   const diff = dTime - time;

//   const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
//     3,
//     "0"
//   );
//   const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
//     2,
//     "0"
//   );
//   const diffMinutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
//     2,
//     "0"
//   );
//   const diffSeconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

//   clock.innerText = `${diffDay}d ${diffHour}h ${diffMinutes}m ${diffSeconds}s`;
// }

getClock();
setInterval(getClock, 1000);
