window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script20 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = month + "/" + day + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("TodayDate", dateString);
}

window.Script21 = function()
{
  // Calculate current date
let currentTime = new Date();

// Add 7 days to the current date
currentTime.setDate(currentTime.getDate() + 7);

// Extract the updated date components
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Format the date as a string
let dateString = month + "/" + day + "/" + year;

// Push the date string to Storyline
let player = GetPlayer();
player.SetVar("FutureDate", dateString);
}

window.Script22 = function()
{
  function stopTimer() {
    if (typeof window.timerInterval !== 'undefined') {
        clearInterval(window.timerInterval);
        delete window.timerInterval;
    }
}
stopTimer();
}

window.Script23 = function()
{
  //Timer function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var player = GetPlayer();

//Check active element value every milisecond and update variable
function counter(){
	var slideObjectParent = document.querySelector('[class="text-input-64c4jiAaVCD"]');
    var slideObject = slideObjectParent.querySelector('[data-dv_ref="input"]').value
	player.SetVar("TETracking", slideObject);
		sleep(1).then(() => counter());
}

//Run the function
counter();
}

window.Script24 = function()
{
  var player = GetPlayer();
// Get the value of TETracking
var teTrackingValue = player.GetVar("TETracking");
// Check if the TETracking value has 9 characters
if (teTrackingValue.length === 9) {
    // Set Indicator1 to "Valid"
    player.SetVar("Indicator1Variable", "1");
} else {
    // Set Indicator1 to "Invalid"
    player.SetVar("Indicator1Variable", "0");
}
}

window.Script25 = function()
{
  var player = GetPlayer();
// Get the value of TETracking
var teTrackingValue = player.GetVar("TETracking");

// Get the last 5 characters of TETracking
var lastFiveChars = teTrackingValue.slice(-5);

// Check if the last 5 characters are numbers using a regular expression
var isLastFiveNumeric = /^\d{5}$/.test(lastFiveChars);

// If the last 5 characters are numbers, set Indicator2 to "Valid"
if (isLastFiveNumeric) {
    player.SetVar("Indicator2Variable", "1");
} else {
    // Otherwise, set Indicator1 to "Invalid"
    player.SetVar("Indicator2Variable", "0");
}

}

window.Script26 = function()
{
  var player = GetPlayer();
var totalMinutes = player.GetVar("SLTimer");
var totalTimeInSeconds = 0; // Start from 0 seconds
if (typeof window.timerInterval === 'undefined') {
    function startTimer() {
        window.timerInterval = setInterval(function() {
            var minutes = Math.floor(totalTimeInSeconds / 60);
            var seconds = totalTimeInSeconds % 60;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            player.SetVar("ChatTimer", formattedMinutes + ":" + formattedSeconds);
            totalTimeInSeconds++; // Increment the timer
        }, 1000);
    }
    startTimer();
}

}

};
