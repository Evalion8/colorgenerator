document.title = "randomizer";

const pressBtn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0];

function generateHexCode() {
  const hexString = "0123456789abcdef";

  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }

  body.style.backgroundColor = hexCode;
}

pressBtn.addEventListener("click", generateHexCode);
