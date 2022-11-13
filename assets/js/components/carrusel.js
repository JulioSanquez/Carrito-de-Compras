export function carrusel(db = bd, { insertarInfo, numberToCurrency }) {
  let offerItems = db.filter((d) => d.offer);

  const sliderCont = document.querySelector("#slider-cont");
  const slider = document.querySelector("#slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  function printCarrousel() {
    let html = "";
    for (const offer of offerItems) {
      html += `
                <div class="slider__img" data-price="${offer.price}" data-name="${offer.name}" data-description="${offer.description}">
                <img src="${offer.image}" alt="${offer.name}">
                </div>
            `;
    }
    slider.innerHTML = html;
  }
  printCarrousel();

  let loop;
  const delay = 3000;
  function next() {
    let firstImg = document.querySelectorAll(".slider__img")[0];
    const sliderMessage = document.getElementById("slider__message");

    // console.log(sliderMessage)

    insertarInfo(firstImg.dataset, sliderMessage);

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.3s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", firstImg);
      slider.style.marginLeft = "-100%";
    }, 300);
  }

  function prev() {
    const sliderMessage = document.getElementById("slider__message");
    let lastImg = document.querySelectorAll(".slider__img");
    let lastImg1 = lastImg[1];
    // let lastImg2 = lastImg[lastImg.length - 2];

    // console.log(sliderMessage)
    // console.log(lastImg1.dataset)
    // console.log(lastImg2.dataset)
    insertarInfo(lastImg.dataset, sliderMessage);

    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.3s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", lastImg1);
      slider.style.marginLeft = "-100%";
    }, 300);
  }

  btnRight.addEventListener("click", next);
  btnLeft.addEventListener("click", prev);
  loop = setInterval(next, delay);

  sliderCont.addEventListener("mouseover", (e) => {
    clearInterval(loop);
  });

  sliderCont.addEventListener("mouseout", (e) => {
    loop = setInterval(next, delay);
  });
}
