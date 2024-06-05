let randomNumberDiv = document.querySelector(".number");
let guessInput = document.querySelector(".guess");
let msgDiv = document.querySelector(".message");
let scoreDiv = document.querySelector(".score");
let hScoreDiv = document.querySelector(".highscore");

let randomNumber;
let score = 0;
let savedHScore = sessionStorage.getItem("highScore");
let hScore = savedHScore ?? 0;
 hScoreDiv.textContent = hScore;

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  randomNumberDiv.innerHTML = randomNumber;
  console.log(randomNumber);
}
function checkNumber() {
  let guessNumber = guessInput.value;
  console.log(guessNumber);
  if (randomNumber == guessNumber) {
    msgDiv.textContent = "Correct Guess";
    generateRandomNumber();
    guessInput.value = "";
    score += 2;
    generateRandomNumber();
  } else {
    score -= 1 ;
    if (randomNumber > guessNumber) {
      msgDiv.textContent = "Wrong Guess, Enter the higher value";
    } else {
      msgDiv.textContent = "Wrong Guess, Enter the lower value";
    }
  }

  if (score > hScore) {
    hScore = score;
    hScoreDiv.textContent = hScore;
    sessionStorage.setItem("highScore", hScore.toString());
  }
  scoreDiv.textContent = score;
}

// generateRandomNumber();

let obj1={
  name:"Akilesh"
}
let strUser=JSON.stringify(obj1);
let user=localStorage.setItem("user",strUser)
let guser = localStorage.getItem("user");
let userobj = JSON.parse(strUser);
document.getElementById("player").textContent = userobj.name;


function reset() {
document.querySelector(".number").textContent="??";
 document.querySelector(".message").textContent="Start guessing..."
document.querySelector(".score").textContent=0;
document.querySelector(".highscore").textContent=19;
document.querySelector(".guess").value="";
}
reset()

