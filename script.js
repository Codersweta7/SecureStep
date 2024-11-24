var typed = new Typed(".multiword", {
    strings: ["Developing for enthusiastic learners"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    loop: true
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar = document.querySelector('.navbar');

hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark-theme' ? 'Light Mode' : 'Dark Mode';
} else {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = 'Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    themeToggleBtn.textContent = isDarkTheme ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
