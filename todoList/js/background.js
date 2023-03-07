const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

randomNumber = Math.floor(Math.random() * images.length);

const chosenImage = images[randomNumber];

const backgroundImage = document.createElement("img");

backgroundImage.src = `./img/${chosenImage}`;

document.body.appendChild(backgroundImage);
