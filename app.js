

var easyColors = [
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout()];

var hardColors = [
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout(),
    randomColorToGridLayout()];

var panel = document.getElementById("panel");
var result = document.getElementById("result");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");
var color = document.getElementById("color");
var squares = document.querySelectorAll(".square")
var hardSquares = document.querySelectorAll(".hardSquare")
var btnHard = document.getElementById("hardLevel")
var btnEasy = document.getElementById("easyLevel")

var questionColor = random();
var question = document.getElementById(
    "question");
var getColors = 3;
getNameOfPlayer = prompt("Who are u?");
result.innerHTML = "Let's go my sweetie " + getNameOfPlayer;

//choose the level to play the game
btnHard.addEventListener("click", function () {
    hardLevel()
})
btnEasy.addEventListener("click", function () {
    easyLevel()
})
//Random easyColors and push to grid layout
function randomColorToGridLayout() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb" + "(" + red + ", " + green + ", " + blue + ")";
}

//random question and push to grid (for easy)
function random() {
    var random = Math.floor(Math.random() * 6);
    return easyColors[random];
}
//random question and push to grid (for hard)
function randomForHardLevel() {
    var random = Math.floor(Math.random() * 9);
    return hardColors[random];
}


//new game
function reset() {
    location.reload();
}

function easyLevel() {
    document.getElementById("easy").style.visibility = "visible";
    question.textContent = questionColor;
    color.style.backgroundColor = questionColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = easyColors[i];
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === questionColor) {
                result.innerHTML = "That right";
                panel.style.backgroundColor = questionColor;
                for (var i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = questionColor;
                }

            }
            else {
                this.style.backgroundColor = "rgb(45, 47, 61)";
                result.innerHTML = "Wrong answer my kid :))";
            }
        })
    }
}

function hardLevel() {
    document.getElementById("hard").style.visibility = "visible";
    document.getElementById("easy").style.visibility = "visible";
    var questionColorForHardLevel = randomForHardLevel();
    question.textContent = questionColorForHardLevel;
    color.style.backgroundColor = questionColorForHardLevel;
    //set color for hard squares
    for (var i = 0; i < hardSquares.length; i++) {
        hardSquares[i].style.backgroundColor = hardColors[i];
        hardSquares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === questionColorForHardLevel) {
                result.innerHTML = "That right";
                panel.style.backgroundColor = questionColorForHardLevel;
                for (var i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = questionColorForHardLevel;
                }

            }
            else {
                this.style.backgroundColor = "rgb(45, 47, 61)";
                result.innerHTML = "Wrong answer my kid :))";
            }
        })
    }
    //set color for easy squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = hardColors[getColors];
        getColors++;
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === questionColorForHardLevel) {
                result.innerHTML = "That right";
                panel.style.backgroundColor = questionColorForHardLevel;
                for (var i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = questionColorForHardLevel;
                }

            }
            else {
                this.style.backgroundColor = "rgb(45, 47, 61)";
                result.innerHTML = "Wrong answer my kid :))";
            }
        })
    }
}


