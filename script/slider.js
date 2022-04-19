const slider = document.querySelector(".swiper-container");
const brand = document.querySelector(".swiper-wrapper");
let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile === "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      slideClass: "card",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-container-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

var heightList = document.querySelector(".swiper-container");
var textButton = document.querySelector(".container__text");
var iconButton = document.querySelector(".container__icon");
var button = document.querySelector(".container__button");
var buttonStatus = true;
button.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (buttonStatus) {
    heightList.style.height = "auto";
    textButton.textContent = "Скрыть";
    iconButton.style.transform = "rotate(180deg)";
    buttonStatus = false;
  } else {
    heightList.style.height = "170px";
    textButton.textContent = "Показать всё";
    iconButton.style.transform = "rotate(0deg)";
    buttonStatus = true;
  }
});
