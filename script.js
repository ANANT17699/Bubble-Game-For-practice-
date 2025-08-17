var timer = 3;
var score = 0;
var hitrn = 5; // Initial hit number
var gameOver = false; // Flag to stop clicks after timer ends

function MakeBubble() {
  var clutter = "";

  for (var i = 1; i <= 280; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".bot-panel").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      gameOver = true;

      // Show Game Over screen
      document.querySelector(".bot-panel").innerHTML = `<h1>⏰ Game Over</h1>`;
    }
  }, 1000);
}

function getnewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".bot-panel").addEventListener("click", function (e) {
  if (gameOver) return;

  var clickedNum = Number(e.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    MakeBubble();
    getnewHit();
  }
});

runTimer();
MakeBubble();
getnewHit();
