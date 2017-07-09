import "../public/main.css";
import "../public/index.css";
import $ from "jquery";
import MovableCoord from "@egjs/movablecoord";

(function() {

	const plate = $("#circular-plate-section");

	const inst = new MovableCoord({
		min: [0, 0],
		max: [7200, 7200],
		circular: true
	}).on({
		"change": ({pos}) => {
			const rotate = pos[1] / 2;
			console.log(`${rotate}`);
			plate.css(`transform`, `rotate(${rotate}deg)`)
			if (rotate % 360 === 0) {
				plate.css(`transform`, `rotate(30deg)`)
			}
		}
	}).bind("#circular-plate", {
		scale: [0, .3],
		direction: MovableCoord.DIRECTION_VERTICAL
	});

	inst.setTo(7200, 7200, 0);
})();

(function() {
	const $num = $("#circular-graph-text__number");

	const flickerCoord = new MovableCoord({
		min: [0, 0],
		max: [0, 100]
	}).on({
		"change": ({pos}) => {
			const nextNum = Math.ceil(pos[1]);
			console.log(`${nextNum}`);
			if (nextNum > 100) {
				const nextSize = nextNum - 100 + 32;
				const nextPos = 54 + ((100 - nextNum) / 2);
				$num.css("font-size", `${nextSize}px`);
				$num.css("top", `${nextPos}px`);
			} else if (nextNum < 0) {
				const nextSize = nextNum + 32;
				const nextPos = 54 - (nextNum / 2);
				$num.css("font-size", `${nextSize}px`);
				$num.css("top", `${nextPos}px`);
			} else {
				$num.text(nextNum);
			}
		}
	}).bind("#demo-container", {
		scale: [0, .2],
		direction: MovableCoord.DIRECTION_VERTICAL
	});

	flickerCoord.setTo(0, 100, 0);
})();

(function() {
	const canvas = document.getElementById('canvas');
	if (canvas.getContext) {
		const ctx = canvas.getContext('2d');
		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;
		const radius = 30;

		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, Math.PI * 1.5, (Math.PI / 180) * (1 - 90));
		ctx.lineWidth = 1;
		ctx.stroke();
	}
})();

