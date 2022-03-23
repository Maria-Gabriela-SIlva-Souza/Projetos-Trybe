const ballsDiv = document.getElementById('balls');
const rgbColor = document.querySelector('#rgb-color');
const answer = document.getElementById('answer');
const scorePoints = document.getElementById('score');

function balls() {
  for (let i = 1; i < 7; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'ball';
    ballsDiv.appendChild(createDiv);
  }
}
balls();

function colorCircles() {
  const divBalls = document.querySelectorAll('.ball');
  for (let i = 0; i < divBalls.length; i += 1) {
    const ballColorIndex = divBalls[i];
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    ballColorIndex.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  const randomColorSelected = Math.floor(Math.random() * 5);
  rgbColor.innerHTML = divBalls[randomColorSelected].style.backgroundColor;
}
colorCircles();

let points = 0;
function score() {
  points += 3;
  scorePoints.innerText = `${points}`;
}

function score2() {
  const currentPoint = scorePoints.innerHTML - 1;
  scorePoints.innerText = currentPoint;
}

function selectColorCircles() {
  ballsDiv.addEventListener('click', (event) => {
    const color = event.target.style.backgroundColor;
    if (color === rgbColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
      score();
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
      score2();
    }
  });
}
selectColorCircles();

function resetGame() {
  const btnResetGame = document.getElementById('reset-game');
  btnResetGame.addEventListener('click', () => {
    answer.innerHTML = 'Escolha uma cor';
    colorCircles();
  });
}
resetGame();
