function animateSlides() {
  controllers = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  const nav = documnet.querySelector(".nav-header");
  sliders.forEach((slide) => {
    const revealImg = slide.querySelectorAll(".reveal-img");
    const img = slide.querySelectorAll("'hero-img");
    const reavealText = slide.querySelectorAll(".reveal-text");
    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    }).fromTo;
  });
}
