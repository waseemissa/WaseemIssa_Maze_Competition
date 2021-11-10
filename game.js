window.onload = function () {
  document.getElementById("start").onclick = start_click;
  document.getElementById("end").onmouseover = end_reach;
  document.getElementById("game").onmouseleave = cheat;
  var elements = document.getElementsByClassName("boundary");
  for (var i = 0; i < elements.length; i++)
    elements[i].onmouseover = boundary_touch;
};

var score = 0;
var game_running = false;

function start_click() {
  game_running = true;
  document.getElementById("status").innerHTML =
    "Begin by moving your mouse over the &quot;S&quot;. " + score;
  var elements = document.getElementsByClassName("boundary");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#eeeeee";
    elements[i].onmouseover = boundary_touch;
    document.getElementById("game").onmouseleave = cheat;
  }
}

function boundary_touch() {
  if (game_running == false) {
    var elements = document.getElementsByClassName("boundary");
    for (var i = 0; i < elements.length; i++) elements[i].onmouseover = null;
  } else {
    game_running = false;
    score -= 10;
    document.getElementById("status").innerHTML = "You lost. " + score;
    var elements = document.getElementsByClassName("boundary");
    for (var i = 0; i < elements.length; i++)
      elements[i].style.backgroundColor = "red";
  }
}

function end_reach() {
  if (game_running == false) {
    var elements = document.getElementsByClassName("boundary");
    for (var i = 0; i < elements.length; i++) elements[i].onmouseover = null;
  } else {
    game_running = false;
    score += 5;
    document.getElementById("status").innerHTML = "You won. " + score;
    var elements = document.getElementsByClassName("boundary");
    for (var i = 0; i < elements.length; i++)
      elements[i].style.backgroundColor = "green";
  }
}

function cheat() {
  if (game_running == false) {
    var elements = document.getElementsByClassName("boundary");
    document.getElementById("game").onmouseleave = null;
    for (var i = 0; i < elements.length; i++) elements[i].onmouseover = null;
  } else {
    game_running = false;
    score -= 10;
    document.getElementById("status").innerHTML =
      "Nice try but that's cheating. " + score;
    var elements = document.getElementsByClassName("boundary");
    for (var i = 0; i < elements.length; i++)
      elements[i].style.backgroundColor = "red";
  }
}
