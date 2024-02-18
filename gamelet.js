/*
Gamelet: a starting point for writing games
Auther: Henry Wall
Version: 1.0 
Instructions:
    Include gamelet.js in an HTML document containing an element with and id of 'ball'.
    The script will detect when the left or right arrow key is pressed and will move the ball element accordingly.
*/

const ball = document.getElementById("ball"); //get the ball

document.addEventListener("keydown", handleKeyPress); // Listen for keys
let position = 0; // set initial position

/*
handleKeyPress responds to certian key presses by updating position
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (e.code === "ArrowUp") {
    position = position - 10;
  }
  if (e.code === "ArrowDown") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}

/*
refresh changes the position of the ball
*/
function refresh() {
  ball.style.left = position + "px";
}
