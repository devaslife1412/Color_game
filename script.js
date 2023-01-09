var btnStart = document.getElementById("btnStart");
var btnReload = document.getElementById("btnReload");
var question = document.getElementById("question");
var panel = document.getElementById("panel");
var result = document.getElementById("result");
var gameBroad = document.getElementById("game");
var squares = document.querySelectorAll(".square");
var hardLevel = document.getElementById("hard");
var level = document.getElementById("comboBoxLevel");
var chooseLevel = level.value;


var easyColor = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
]

var hardColor = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
]

//random color for game broad
function randomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb" + "(" + red + ", " + green + ", " + blue + ")";
}

//generate question level easy
function easyQuestionGenerator() {
    var random = Math.floor(Math.random() * 6);
    return easyColor[random];
}
//generate question level hard
function hardQuestionGenerator() {
    var random = Math.floor(Math.random() * 9);
    return hardColor[random];
}

//Script for game play
btnStart.addEventListener("click", function () {
})
//Easy game play
var easyGamePlay = function () {
    gameBroad.style.visibility = this.visible;
}

//Play a game
function start() {
    document.getElementById("panel").style.visibility = "hidden";
    document.getElementById("comboBoxLevel").style.visibility = "hidden";
    if (document.getElementById("comboBoxLevel").value == 1) {
        document.getElementById("game").style.visibility = "visible";
        document.getElementById("easy").style.visibility = "visible";
        document.getElementById("question").style.visibility = "visible";
    }
    else {
        document.getElementById("game").style.visibility = "visible";
        document.getElementById("easy").style.visibility = "visible";
        document.getElementById("hard").style.visibility = "visible";
        document.getElementById("question").style.visibility = "visible";

    }
}

//reload game when choose wrong answer
function reset() {
    location.reload();
}
