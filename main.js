const questions = [
	{
		a: "Pizza 🍕",
		b: "Burger 🍔",
	},
	{
		a: "Beach ⛱️",
		b: "Mountain ⛰️",
	},
	{
		a: "Cat 😺",
		b: "Dog 🐕",
	},
	{
		a: "Summer ☀️",
		b: "Winter ❄️",
	},
	{
		a: "Netflix 📺",
		b: "Book 📚",
	},
	{
		a: "Front End 🌐",
		b: "Back End 🗄️",
	},
	{
		a: "JavaScript 🟨",
		b: "TypeScript 🟦",
	},
	{
		a: "Bootstrap 🅱️",
		b: "Tailwind CSS 🌬️",
	},
	{
		a: "React ⚛️",
		b: "Nest JS ⚙️",
	},
	{
		a: "On site 🏢",
		b: "Remote 🏠",
	}
];

let currentQuestion = 0;

function updateQuestion() {
	const options = document.querySelectorAll(".either-option");
	options[0].textContent = questions[currentQuestion].a;
	options[1].textContent = questions[currentQuestion].b;
	document.getElementById("feedback").textContent = "";
}

function updateHistory(choice) {
	const historyBody = document.getElementById("historyBody");
	const row = document.createElement("tr");
	row.innerHTML = `<td>${questions[currentQuestion].a} vs ${questions[currentQuestion].b}</td><td>${choice}</td>`;
	historyBody.insertBefore(row, historyBody.firstChild);
}

function handleSelection(event) {
	const options = document.querySelectorAll(".either-option");
	options.forEach((opt) => {
		opt.setAttribute("aria-checked", "false");
		opt.classList.remove("selected");
	});

	const selected = event.currentTarget;
	selected.setAttribute("aria-checked", "true");
	selected.classList.add("selected");
	updateHistory(selected.textContent);
	document.getElementById("feedback").textContent = "Great choice 🎉";

	setTimeout(() => {
		currentQuestion = (currentQuestion + 1) % questions.length;
		options.forEach((opt) => {
			opt.classList.remove("selected");
			opt.setAttribute("aria-checked", "false");
		});
		updateQuestion();
	}, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
	const options = document.querySelectorAll(".either-option");

	updateQuestion();
	options.forEach((option) => {
		option.addEventListener("click", handleSelection);
		option.addEventListener("keydown", function (event) {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				handleSelection(event);
			}
		});
	});
});