// Script for the website
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("hidden")) {
        navLinks.classList.remove("hidden");
    } else {
        navLinks.classList.add("hidden");
    }
});
