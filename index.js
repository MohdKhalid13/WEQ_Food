
const slider = document.querySelector(".slider");
const sliderContainer = slider.querySelector(".slider-container");
const slides = slider.querySelectorAll(".slide");
const prevBtn = slider.querySelector(".prev-slide");
const nextBtn = slider.querySelector(".next-slide");
let slideIndex = 0;

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${slideIndex * 100}px)`;
}

prevBtn.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlider();
});
