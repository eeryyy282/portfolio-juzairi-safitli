let currentLang = "id";

function setLanguage(lang) {
  currentLang = lang;

  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`btn-${lang}`).classList.add("active");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const keys = key.split(".");

    let text = translations[lang];
    keys.forEach((k) => {
      if (text) text = text[k];
    });

    if (text) {
      element.innerHTML = text;
    }
  });

  initTypewriter();
}

let typeTimeout;
function initTypewriter() {
  const textElement = document.getElementById("typing-text");
  const roles = translations[currentLang].hero.roles;
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  if (typeTimeout) clearTimeout(typeTimeout);

  function type() {
    if (count === roles.length) {
      count = 0;
    }
    currentText = roles[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      typeTimeout = setTimeout(type, 2000);
    } else {
      typeTimeout = setTimeout(type, 100);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.classList.contains("progress-fill")) {
          const width = entry.target.style.width;
          entry.target.style.width = "0";
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".exp-item").forEach((el) => {
    observer.observe(el);
  });

  document.querySelectorAll(".progress-fill").forEach((el) => {});

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
