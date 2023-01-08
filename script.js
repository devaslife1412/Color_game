

var colors = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()];

var panel = document.getElementById("Head");
var result = document.getElementById("result");
var squares = document.querySelectorAll(".square");
var btnStart = document.getElementById("start");
var comboBox = document.getElementById("level");
var levelHard = document.getElementById("hard");

var level = comboBox.

btnStart.addEventListener("click", function () {
    if (comboBox.concat("hard")) {

    }
})

function randomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb" + "(" + red + ", " + green + ", " + blue + ")";
}

var question = document.getElementById("question");
question.textContent = questionChoose;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

var questionChoose = function random() {
    var random = Math.floor(Math.random() * 9);
    return colors[random];
}
function newQuestion() {
    location.reload();
}
