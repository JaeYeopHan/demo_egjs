import "../public/main.css";
import "../public/index.css";
import MovableCoord from "@egjs/movablecoord";

const el = document.querySelector("#area");
const instance = new MovableCoord("#area", {
	max : [300, 400]
}).bind(el, {
	direction : MovableCoord.DIRECTION_ALL,
	scale: [1, 1.5]
});
