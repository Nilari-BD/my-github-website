const acc = document.querySelectorAll(".accordion-btn");

acc.forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    button.classList.toggle("active");
  });
});

const skillsAcc = document.querySelectorAll(".skills-accordion-btn");

skillsAcc.forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    button.classList.toggle("active");
  });
});
