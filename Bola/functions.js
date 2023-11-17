let ball = document.getElementById("ball");
ball.style.top = '100px';
ball.style.left = '100px';
let movement;

function up() {
    movement = parseInt(ball.style.top) - 10;
    
    ball.style.top = movement + "px";
  }
function down() {
  movement = parseInt(ball.style.top) + 10;
  
  ball.style.top = movement + "px";
}

function right() {
  movement = parseInt(ball.style.left) + 10;
  
  ball.style.left = movement + "px";
}
function left() {
  movement = parseInt(ball.style.left) - 10;
  
  ball.style.left = movement + "px";
}

const circle = document.getElementById("ball");
let move = 5;
ball
  .querySelector(".up")
  .addEventListener("mouseover", () => moveBall(0, -move));
ball
  .querySelector(".down")
  .addEventListener("mouseover", () => moveBall(0, move));
ball
  .querySelector(".left")
  .addEventListener("mouseover", () => moveBall(-move, 0));
ball
  .querySelector(".right")
  .addEventListener("mouseover", () => moveBall(move, 0));

document.body.addEventListener('keypress',key);
function moveBall(x, y) {
  let top = parseInt(circle.style.top) || 50;
  let left = parseInt(circle.style.left) || 50;

  top += y;
  left += x;
  circle.style.top = top + "px";
  circle.style.left = left + "px";
}

function key(event){
  switch(event.key){
    case 'w': moveBall(0, -move);
    break;
    case 's': moveBall(0, move);
    break;
    case 'a': moveBall(-move,0);
    break;
    case 'd': moveBall(move,0);
    break;
  } 

}