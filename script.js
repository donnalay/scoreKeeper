//Practice with DOM manipulation

//overview
//make a ping-pong score keeping widget
//two player game, each player has a button to add +1 to score
//you can select the max score for the game: 5-10
//this is a select element, which will need a different event to listen on (e.g. not click event)
//when player score button clicked, increment score for that player
//scores are displayed in the UI
//when a player wins, buttons are disabled and the scores have styles applied indicating who was the winner and who was the loser
//Reset button resets everything: score count and max score number

//Bulma framework used for styling

//initialize scores
let p1 = 0;
let p2 = 0;

const p1Score = document.querySelector('span[id="PlayerOneScore"]');
const p2Score = document.querySelector('span[id="PlayerTwoScore"]');
p1Score.innerHTML = p1;
p2Score.innerHTML = p2;
const maxScore = document.querySelector('select[id="maxScore"]');
let max = parseInt(maxScore.value);

const addP1 = document.querySelector('button[id="addP1"]');
const addP2 = document.querySelector('button[id="addP2"]');
const minusP1 = document.querySelector('button[id="minusP1"]');
const minusP2 = document.querySelector('button[id="minusP2"]');
const reset = document.querySelector('button[id="reset"]');

reset.disabled = true;

const disableReset = function () {
  if (p1 === 0 && p2 === 0) {
    reset.disabled = true;
    console.log("reset button disabled");
  } else reset.disabled = false;
};

maxScore.addEventListener("input", function () {
  max = parseInt(maxScore.value);
  console.log(`Max Score: ${maxScore.value}`);
});

addP1.addEventListener("click", function () {
  p1++;
  disableReset();
  p1Score.innerHTML = p1;
  console.log(`Add +1 to P1, Score: ${p1}`);
  if (p1 === max) {
    console.log(`P1 wins`);
    p1Score.style.color = "green";
    p2Score.style.color = "red";
    addP1.disabled = true;
    addP2.disabled = true;
    minusP1.disabled = true;
    minusP2.disabled = true;
  }
});

minusP1.addEventListener("click", function () {
  p1--;
  disableReset();
  p1Score.innerHTML = p1;
  console.log(`Minus -1 to P1, Score: ${p1}`);
});

addP2.addEventListener("click", function () {
  p2++;
  disableReset();
  p2Score.innerHTML = p2;
  console.log(`Add +1 to P2, Score: ${p2}`);
  if (p2 === max) {
    p2Score.style.color = "green";
    p1Score.style.color = "red";
    addP1.disabled = true;
    addP2.disabled = true;
    minusP1.disabled = true;
    minusP2.disabled = true;
  }
});

minusP2.addEventListener("click", function () {
  p2--;
  disableReset();
  p2Score.innerHTML = p2;
  console.log(`Minus -1 to P2, Score: ${p2}`);
});

reset.addEventListener("click", function () {
  disableReset();
  console.log("Reset scores to 0");
  p1 = 0;
  p2 = 0;
  p1Score.innerHTML = p1;
  p2Score.innerHTML = p2;
  p1Score.style.color = "black";
  p2Score.style.color = "black";
  addP1.disabled = false;
  addP2.disabled = false;
  minusP1.disabled = false;
  minusP2.disabled = false;
  reset.disabled = true;
});
