function animateSlides() {
  controllers = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  sliders.forEach((slide) => {
    const revealImg = slide.querySelectorAll(".reveal-img");
    const img = slide.querySelectorAll(".hero-img");
    const reavealText = slide.querySelectorAll(".reveal-text");
    // gsap.to(revealImg, 1, { x: "100%" });
    // gsap.to(reavealText, 1, { x: "100%" });
    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideT1.fromTo(img, { scale: "2" }, { scale: "1" });
    slideT1.fromTo(reavealText, { x: "0%" }, { x: "100%" });
  });
}
animateSlides();
