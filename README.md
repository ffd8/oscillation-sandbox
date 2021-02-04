# oscillation sandbox

🔗  » [VIEW ONLINE](https://ffd8.github.io/oscillation-sandbox/)

explore oscillations in p5.js and beyond!
built upon visualization from: [Jérôme Mercier](https://www.pizza-punk.com/oscillation-functions/)
[gitHub repo](https://github.com/ffd8/oscillation-sandbox) to add new algos via pr / issue.
cc [teddavis.org](https://teddavis.org/) 2021

-----

#### usage	

`x` is analogous to `frameCount`.
algo is applied to `y` in each sketch.
`w` / `h` are short for sketch `width` / `height`
hover sketch to keep looping. click to reset.
click on algos to edit / copy + paste

#### applying

example for applying algo to p5.js sketch:

```js 
let x = frameCount % width;
*let y = _insert_algo_*
ellipse(x, height / 2 + y, 10);
```

#### math

p5.js math reference:

[abs()](https://p5js.org/reference/#/p5/abs) [ceil()](https://p5js.org/reference/#/p5/ceil) [constrain()](https://p5js.org/reference/#/p5/constrain) [dist()](https://p5js.org/reference/#/p5/dist) [exp()](https://p5js.org/reference/#/p5/exp) [floor()](https://p5js.org/reference/#/p5/floor) [lerp()](https://p5js.org/reference/#/p5/lerp) [log()](https://p5js.org/reference/#/p5/log) [mag()](https://p5js.org/reference/#/p5/mag) [map()](https://p5js.org/reference/#/p5/map) [max()](https://p5js.org/reference/#/p5/max) [min()](https://p5js.org/reference/#/p5/min) [norm()](https://p5js.org/reference/#/p5/norm) [pow()](https://p5js.org/reference/#/p5/pow) [round()](https://p5js.org/reference/#/p5/round) [sq()](https://p5js.org/reference/#/p5/sq) [sqrt()](https://p5js.org/reference/#/p5/sqrt) [fract()](https://p5js.org/reference/#/p5/fract) [noise()](https://p5js.org/reference/#/p5/noise) [random()](https://p5js.org/reference/#/p5/random) [acos()](https://p5js.org/reference/#/p5/acos) [asin()](https://p5js.org/reference/#/p5/asin) [atan()](https://p5js.org/reference/#/p5/atan) [atan2()](https://p5js.org/reference/#/p5/atan2) [cos()](https://p5js.org/reference/#/p5/cos) [sin()](https://p5js.org/reference/#/p5/sin) [tan()](https://p5js.org/reference/#/p5/tan) [degrees()](https://p5js.org/reference/#/p5/degrees) [radians()](https://p5js.org/reference/#/p5/radians)

#### contribute

add new algos via pr / [issue](issues/)

