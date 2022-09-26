let lamp = 1;
firstLamp = document.querySelector(".first-lamp");
secondLamp = document.querySelector(".second-lamp");
thirdLamp = document.querySelector(".third-lamp");

const changeLamp = (newLamp) => {
  if (lamp != newLamp) {
    changeToLight();
    const lampsDivs = [...document.getElementsByClassName("lamp-display")];
    lampsDivs.map((element) => {
      if (element.src.includes(`images/Lamp-${lamp}.png`)) {
        element.classList.remove("appear");
      }
      if (element.src.includes(`images/Lamp-${newLamp}.png`)) {
        element.classList.add("appear");
      }
    });
    if (lamp === 1) {
      firstLamp.classList.remove("selected");
    }
    if (lamp === 2) {
      secondLamp.classList.remove("selected");
    }
    if (lamp === 3) {
      thirdLamp.classList.remove("selected");
    }

    if (newLamp === 1) {
      firstLamp.classList.add("selected");
    }
    if (newLamp === 2) {
      secondLamp.classList.add("selected");
    }
    if (newLamp === 3) {
      thirdLamp.classList.add("selected");
    }

    lamp = newLamp;
  }
};

document.querySelector(".dark").addEventListener("click", () => {
  if (lamp === 3) {
    const interior = document.querySelector(".interior-dark");
    interior.classList.add("activate");
  }
});

const changeToLight = () => {
  if (lamp === 3) {
    const interior = document.querySelector(".interior-dark");
    interior.classList.remove("activate");
  }
};

document.querySelector(".light").addEventListener("click", () => {
  changeToLight();
});

firstLamp.addEventListener("click", () => {
  changeLamp(1);
});
secondLamp.addEventListener("click", () => {
  changeLamp(2);
});
thirdLamp.addEventListener("click", () => {
  changeLamp(3);
});
