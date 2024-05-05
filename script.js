const menu = document.getElementById("nav-toggle");
const close = document.getElementById("nav-close");
const nav = document.querySelector(".nav");
const innerUl = document.querySelector(".inner_ul");

menu.addEventListener("click", () => {
	nav.classList.add("show_menu");
	innerUl.classList.add("show_menu");
});

close.addEventListener("click", () => {
	nav.classList.remove("show_menu");
	innerUl.classList.remove("show_menu");
});
