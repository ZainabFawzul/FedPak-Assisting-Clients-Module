function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63yx8iZCJS5":
        Script1();
        break;
      case "65t5jzPyBPm":
        Script2();
        break;
      case "6rDrCZ5eKr5":
        Script3();
        break;
      case "6V1EaY1LdsL":
        Script4();
        break;
      case "5WgB8kqkITP":
        Script5();
        break;
      case "5zJ4aDQcl4U":
        Script6();
        break;
      case "6fW2z70JxA9":
        Script7();
        break;
      case "68GkGhrEvlf":
        Script8();
        break;
      case "6W8ZJzcarm2":
        Script9();
        break;
      case "6JE2PVZY0YG":
        Script10();
        break;
      case "6HUSmypaySc":
        Script11();
        break;
      case "66oWK8vUMkJ":
        Script12();
        break;
      case "6iPBk0XooK7":
        Script13();
        break;
      case "5xDzRqDEP0W":
        Script14();
        break;
      case "65CbKQXV5N9":
        Script15();
        break;
      case "5rTm2eqRR7S":
        Script16();
        break;
      case "6iYcOvRu3PY":
        Script17();
        break;
      case "6R4o6kSttp7":
        Script18();
        break;
      case "5Yj0exSURfb":
        Script19();
        break;
      case "6N9UP9RvM8h":
        Script20();
        break;
      case "5zTW48iBg9n":
        Script21();
        break;
      case "69KRrmTq7CN":
        Script22();
        break;
      case "6diphNzvE8E":
        Script23();
        break;
      case "5iKAMXPjiuP":
        Script24();
        break;
      case "5dLKQJlnfGG":
        Script25();
        break;
      case "6L22cPqH3VB":
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
