# clock-timer

> Display a really basic animated clock with JavaScript.

<img src="https://raw.githubusercontent.com/miguelmota/clock-timer/master/screenshot_.gif" width="600" />

## Demo

[http://lab.miguelmota.com/clock-timer](http://lab.miguelmota.com/clock-timer)

## Usage

HTML

```html
<div class="clock">
  <canvas id="days-canvas"></canvas>
  <label><span id="days-count"></span> Days</label>
</div>

<div class="clock">
  <canvas id="hours-canvas"></canvas>
  <label><span id="hours-count"></span> Hours</label>
</div>

<div class="clock">
  <canvas id="minutes-canvas"></canvas>
  <label><span id="minutes-count"></span> Minutes</label>
</div>

<div class="clock">
  <canvas id="seconds-canvas"></canvas>
  <label><span id="seconds-count"></span> Seconds</label>
</div>
```

CSS

```css
.clock {
  display: inline-block;
  position: relative;
  margin: 0 15px;
  text-align: center;
}

label {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  margin: -10px 0 0 -50px;
  text-align: center;
}
```

JavaScript

```javascript
<script src="clock.js"></script>

<script>
var options = {
  endDate: "12/31/2013 24:00:00" // UTC
};

window.clock = new ClockTimer( options );
</script>
```

All Options

```javascript
var defaults = {

  startDate: null,
  endDate: null,

  secondsCanvas: true,
  minutesCanvas: true,
  hoursCanvas: true,
  daysCanvas: true,

  secondsCanvasSelector: "#seconds-canvas",
  minutesCanvasSelector: "#minutes-canvas",
  hoursCanvasSelector: "#hours-canvas",
  daysCanvasSelector: "#days-canvas",

  secondsCountSelector: "#seconds-count",
  minutesCountSelector: "#minutes-count",
  hoursCountSelector: "#hours-count",
  daysCountSelector: "#days-count",

  secondsStrokeStyle: "#000",
  minutesStrokeStyle: "#000",
  hoursStrokeStyle: "#000",
  daysStrokeStyle: "#000",

  lineWidth: 15,

  radius: 100,

};
```
## License

Released under the MIT License.
