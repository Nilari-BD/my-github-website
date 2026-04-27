function setupAccordion(selector) {
  const buttons = document.querySelectorAll(selector);
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      panel.style.display = (panel.style.display === "block") ? "none" : "block";
      button.classList.toggle("active");
    });
  });
}

// Just call the function for each class
setupAccordion(".accordion-btn");
setupAccordion(".skills-accordion-btn");
