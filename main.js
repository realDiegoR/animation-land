const [...rabbits] = document.querySelectorAll(".rabbit");
const score = document.querySelector("#score");

let count = 0;

rabbits.forEach((rabbit) => {
	rabbit.addEventListener("click", (ev) => {
		if (!ev.target.classList.contains("rabbit")) return;
		count++;
		score.textContent = "Score: " + count;
	});
});
