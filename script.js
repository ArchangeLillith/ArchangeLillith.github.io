VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 25,
	speed: 800,
	glare: false,
	"max-glare": 1,
});

//Flower handler
const flowerObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show-flowers");
		} else {
			entry.target.classList.remove("show-flowers");
		}
	});
});
const hiddenFlowers = document.querySelectorAll(".hide-flowers");
hiddenFlowers.forEach((el) => flowerObserver.observe(el));

//Section handler
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show-section");
		} else {
			entry.target.classList.remove("show-section");
		}
	});
});
const hiddenElements = document.querySelectorAll(".hide-section");
hiddenElements.forEach((el) => observer.observe(el));
