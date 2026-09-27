```javascript
// DARK / LIGHT MODE

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});


// AKTUALNY ROK

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} Twoje Imię`;
}


// ANIMACJA SEKCJI PRZY SCROLLU

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
```
