const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const crtAns = num1 * num2;
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
let score = JSON.parse(localStorage.getItem("score"));
const scoreEl = document.getElementById("score");

if (!score || score <= 0) {
  score = 0;
}

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === crtAns) {
    score++;
    localStg();
  } else {
    score--;
    localStg();
  }
});

scoreEl.innerText = `Score:${score}`;

const localStg = function () {
  localStorage.setItem("score", JSON.stringify(score));
};
