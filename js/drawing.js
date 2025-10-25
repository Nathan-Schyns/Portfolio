const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastX = null;
let lastY = null;

const draw = (e) => {
	const x = e.clientX;
	const y = e.clientY;

	ctx.beginPath();
	ctx.lineWidth = 50;
	ctx.lineCap = "round";

	if (lastX !== null && lastY !== null) {
		ctx.moveTo(lastX, lastY);
	} else {
		ctx.moveTo(x, y);
	}

	ctx.lineTo(x, y);
	ctx.stroke();

	lastX = x;
	lastY = y;
};

window.addEventListener("mouseleave", () => {
	lastX = null;
	lastY = null;
});

window.addEventListener("mousemove", draw);

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".outlined a").forEach((link) => {
		link.addEventListener("mouseenter", (e) => e.stopPropagation());
	});
});
