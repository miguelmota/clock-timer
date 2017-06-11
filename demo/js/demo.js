// demo.js

(function() {

	"use strict";

	// Clock One
	var optionsOne = {
		secondsCanvasSelector: "#seconds-canvas-one",
		minutesCanvasSelector: "#minutes-canvas-one",
		hoursCanvasSelector: "#hours-canvas-one",
		secondsCountSelector: "#seconds-count-one",
		minutesCountSelector: "#minutes-count-one",
		hoursCountSelector: "#hours-count-one"
	};

	window.clockOne = new ClockTimer( optionsOne );

	// Clock Two
	var optionsTwo = {
		endDate: "12/31/2018 24:00:00",
		secondsCanvasSelector: "#seconds-canvas-two",
		minutesCanvasSelector: "#minutes-canvas-two",
		hoursCanvasSelector: "#hours-canvas-two",
		daysCanvasSelector: "#days-canvas-two",
		secondsCountSelector: "#seconds-count-two",
		minutesCountSelector: "#minutes-count-two",
		hoursCountSelector: "#hours-count-two",
		daysCountSelector: "#days-count-two"
	};

	window.clockTwo = new ClockTimer( optionsTwo );

	// Clock Three
	var optionsThree = {
		startDate: "10/31/2018 24:00:00",
		endDate: "12/24/2018 24:00:00",
		secondsCanvasSelector: "#seconds-canvas-three",
		minutesCanvasSelector: "#minutes-canvas-three",
		hoursCanvasSelector: "#hours-canvas-three",
		daysCanvasSelector: "#days-canvas-three",
		secondsCountSelector: "#seconds-count-three",
		minutesCountSelector: "#minutes-count-three",
		hoursCountSelector: "#hours-count-three",
		daysCountSelector: "#days-count-three"
	};

	window.clockThree = new ClockTimer( optionsThree );

	// Clock Four
	var optionsFour = {
		endDate: "12/24/2018 24:00:00",
		lineWidth: 2,
		radius: 120,
		secondsStrokeStyle: "#C7181D",
		minutesStrokeStyle: "#FCB937",
		hoursStrokeStyle: "#A1B836",
		daysStrokeStyle: "#371979",
		secondsCanvasSelector: "#seconds-canvas-four",
		minutesCanvasSelector: "#minutes-canvas-four",
		hoursCanvasSelector: "#hours-canvas-four",
		daysCanvasSelector: "#days-canvas-four",
		secondsCountSelector: "#seconds-count-four",
		minutesCountSelector: "#minutes-count-four",
		hoursCountSelector: "#hours-count-four",
		daysCountSelector: "#days-count-four"
	};

	window.clockFour = new ClockTimer( optionsFour );

	// Clock Five
	var optionsFive = {
		endDate: "12/24/2018 24:00:00",
		secondsCanvas: false,
		minutesCanvas: false,
		hoursCanvas: false,
		daysCanvas: false,
		secondsCanvasSelector: "#seconds-canvas-five",
		minutesCanvasSelector: "#minutes-canvas-five",
		hoursCanvasSelector: "#hours-canvas-five",
		daysCanvasSelector: "#days-canvas-five",
		secondsCountSelector: "#seconds-count-five",
		minutesCountSelector: "#minutes-count-five",
		hoursCountSelector: "#hours-count-five",
		daysCountSelector: "#days-count-five"
	};

	window.clockFive = new ClockTimer( optionsFive );

	// Clock Six
	var optionsSix = {
		endDate: "12/31/2018 24:00:00",
		secondsCanvasSelector: "#seconds-canvas-six",
		minutesCanvasSelector: "#minutes-canvas-six",
		hoursCanvasSelector: "#hours-canvas-six",
		daysCanvasSelector: "#days-canvas-six",
		secondsCountSelector: "#seconds-count-six",
		minutesCountSelector: "#minutes-count-six",
		hoursCountSelector: "#hours-count-six",
		daysCountSelector: "#days-count-six"
	};

	window.clockSix = new ClockTimer( optionsSix );

	// Clock Seven
	var optionsSeven = {
		endDate: "6/30/2018 24:00:00",
		secondsCanvasSelector: "#seconds-canvas-seven",
		minutesCanvasSelector: "#minutes-canvas-seven",
		hoursCanvasSelector: "#hours-canvas-seven",
		daysCanvasSelector: "#days-canvas-seven",
		secondsCountSelector: "#seconds-count-seven",
		minutesCountSelector: "#minutes-count-seven",
		hoursCountSelector: "#hours-count-seven",
		daysCountSelector: "#days-count-seven"
	};

	window.clockSix = new ClockTimer( optionsSeven );

})();
