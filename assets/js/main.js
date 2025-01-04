/* window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in-right");
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.opacity = 1;
            el.style.transform = "translateX(0)";
        }
    });
});

AOS.init(); */


  const buttons = document.querySelectorAll('.toggle-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
