let currentScore = 0;
let activePlayer = 0; // 0=== player 1    1=== player 2
let scores = [0, 0];
let isGameStopped = false;

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).innerText = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  document.querySelector(".player--0 ").classList.toggle("player--active");
  document.querySelector(".player--1 ").classList.toggle("player--active");
}

function stopGame() {
  isGameStopped = true;
  document.querySelector(".btn--roll").disabled = true;
  document.querySelector(".btn--hold").disabled = true;
}

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (isGameStopped) {
    return;
  }
  let dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice").src = `dice-${dice}.png`;
  if (dice === 1) {
    switchPlayer();
  } else {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${activePlayer}`).innerText =
      currentScore;
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (isGameStopped) {
    return;
  }
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.querySelector(`#score--${activePlayer}`).innerText =
    scores[activePlayer];
  document.querySelector(`#current--${activePlayer}`).innerText = 0;
  if (scores[activePlayer] >= 10) {
    document.querySelector(`#name--${activePlayer}`).innerText = "Winner!";
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    stopGame();
  } else {
    switchPlayer();
  }
});

document.querySelector(".btn--new").addEventListener("click", function () {
  isGameStopped = false;
  document.querySelector(".btn--roll").disabled = false;
  document.querySelector(".btn--hold").disabled = false;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  document.querySelector("#score--0").innerText = 0;
  document.querySelector("#score--1").innerText = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector("#name--0").innerText = "PLAYER 1";
  document.querySelector("#name--1").innerText = "PLAYER 2";
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
});
