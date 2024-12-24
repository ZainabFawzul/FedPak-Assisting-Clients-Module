function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5i3vXSlqmgC":
        Script1();
        break;
      case "5eYmC8wF1zu":
        Script2();
        break;
      case "5d8oKNV9obG":
        Script3();
        break;
      case "6YJxUHWbBzK":
        Script4();
        break;
      case "5Z7wFNMvoDq":
        Script5();
        break;
      case "5X3RowaC1Jt":
        Script6();
        break;
      case "6ngI1ZENUFj":
        Script7();
        break;
      case "5eiKlCVX1Tl":
        Script8();
        break;
      case "6SEJTV3cQ2X":
        Script9();
        break;
      case "6IgWyILl58y":
        Script10();
        break;
      case "6HlElNbVq0S":
        Script11();
        break;
      case "6UulLqjUoVg":
        Script12();
        break;
      case "6HDMRkyS8VG":
        Script13();
        break;
      case "6PiT9LG69yi":
        Script14();
        break;
      case "6p9yCa2audi":
        Script15();
        break;
      case "5xa8Gn8JN0o":
        Script16();
        break;
      case "6EJG8aBGFz5":
        Script17();
        break;
      case "6SLZ5DCOG4C":
        Script18();
        break;
      case "5ug9fTJScjC":
        Script19();
        break;
      case "5cksnBA66Gk":
        Script20();
        break;
      case "6OzyAyV3ffN":
        Script21();
        break;
      case "67MZlKEoVpf":
        Script22();
        break;
      case "66LJ9fkeo7e":
        Script23();
        break;
      case "6mCHEzgoVVv":
        Script24();
        break;
      case "6PpufRT9PMt":
        Script25();
        break;
      case "5jat8fyqxlP":
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
