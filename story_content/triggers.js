function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61W5bHHesBs":
        Script1();
        break;
      case "5gucjcZ0RYL":
        Script2();
        break;
      case "61uYVznBoxk":
        Script3();
        break;
      case "6j4eq68nmP3":
        Script4();
        break;
      case "5Ym0Cu3TYIg":
        Script5();
        break;
      case "6ccaOZLEiQj":
        Script6();
        break;
      case "6R7CiZlcrJj":
        Script7();
        break;
      case "5x7M1zoAZNH":
        Script8();
        break;
      case "5z1umJ8WE5l":
        Script9();
        break;
      case "6OKhR7SiB3g":
        Script10();
        break;
      case "6oMwlTJLUS2":
        Script11();
        break;
      case "5pqiCeRpc8a":
        Script12();
        break;
      case "6lGLaXvl6eE":
        Script13();
        break;
      case "5dJ7gqXqlW7":
        Script14();
        break;
      case "5cGxX6u6OgJ":
        Script15();
        break;
      case "6MOcMfK4JB3":
        Script16();
        break;
      case "6FYV5AC2xPD":
        Script17();
        break;
      case "6hbXxSsJ5W5":
        Script18();
        break;
      case "5rTzFixbgta":
        Script19();
        break;
      case "64kD8uUo01U":
        Script20();
        break;
      case "6PpXmvVPy8v":
        Script21();
        break;
      case "6rF8jDFFzBl":
        Script22();
        break;
      case "5bGo39r8bSu":
        Script23();
        break;
      case "6K2EyXuzPZY":
        Script24();
        break;
      case "6QjwN5k6OSF":
        Script25();
        break;
      case "69l7KKelKf9":
        Script26();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5vKNU0VMmL4');
const duration = 2000;
const easing = 'ease-in-out';
const id = '5i1tZdTb4yp';
const shrinkAmount = 0.1;
const delay = 3250;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5vKNU0VMmL4');
const duration = 2000;
const easing = 'ease-in-out';
const id = '6NDnNnafLEF';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5vKNU0VMmL4');
const duration = 2000;
const easing = 'ease-in-out';
const id = '5i1tZdTb4yp';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6gDSe7pBAIb');
const duration = 4750;
const easing = 'ease-out';
const id = '5ed1yfVElxu';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6YlrGa0zlgW');
const duration = 2000;
const easing = 'ease-in-out';
const id = '6gmhke6nr2c';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6gDSe7pBAIb');
const duration = 4750;
const easing = 'ease-out';
const id = '5ed1yfVElxu';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6YlrGa0zlgW');
const duration = 2000;
const easing = 'ease-in-out';
const id = '6d1Pc9VrNoc';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6YlrGa0zlgW');
const duration = 2000;
const easing = 'ease-in-out';
const id = '6gmhke6nr2c';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5m62eQvttWt');
const duration = 2000;
const easing = 'ease-out';
const id = '5eWqPqt6V5y';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('5m62eQvttWt');
const duration = 2000;
const easing = 'ease-out';
const id = '5wvcINjXxxG';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5m62eQvttWt');
const duration = 2000;
const easing = 'ease-out';
const id = '5eWqPqt6V5y';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('5ggRaC3lknX');
const duration = 4750;
const easing = 'ease-out';
const id = '5c1mI9obxlX';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('5ggRaC3lknX');
const duration = 4750;
const easing = 'ease-out';
const id = '5c1mI9obxlX';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6SSuCfmKYFL');
const duration = 2000;
const easing = 'ease-in-out';
const id = '68ZgphwGv5B';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6SSuCfmKYFL');
const duration = 2000;
const easing = 'ease-in-out';
const id = '5zoIzVy3hcR';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6SSuCfmKYFL');
const duration = 2000;
const easing = 'ease-in-out';
const id = '5zoIzVy3hcR';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  const target = object('5sH9oZ2VPgB');
const duration = 750;
const easing = 'ease-out';
const id = '6XLR4ciBzU1';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6UpgoWCac37');
const duration = 2250;
const easing = 'ease-out';
const id = '63xtjCAxgFp';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  const target = object('6UpgoWCac37');
const duration = 2250;
const easing = 'ease-out';
const id = '63xtjCAxgFp';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
