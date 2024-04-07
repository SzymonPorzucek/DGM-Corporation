const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const mainBody = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav__link");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	mainBody.classList.toggle("no-scroll");

	navLinks.forEach(item => {
		item.addEventListener("click", () => {
            navBtn.classList.remove("is-active")
			navMobile.classList.remove("nav-mobile--active");
			mainBody.classList.remove("no-scroll");
		});
	});

	// handleNavLinks();
	// if (!navMobile.classList.contains("nav-mobile-active")) {
	// 	handleObserver();
	// }
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
