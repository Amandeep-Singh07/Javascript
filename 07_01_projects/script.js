
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


buttons.forEach(function (button) {
  button.addEventListener("click", function (maggi) {
    console.log(maggi.target.id);

    if (maggi.target.id === "grey") {
      body.style.backgroundColor = maggi.target.id;
    }
    if (maggi.target.id === "white") {
      body.style.backgroundColor = maggi.target.id;
    }
    if (maggi.target.id === "blue") {
      body.style.backgroundColor = maggi.target.id;
    }
    if (maggi.target.id === "yellow") {
      body.style.backgroundColor = maggi.target.id;
    }
  });
});
