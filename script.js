////////////////////////////////////////////////////

$(".info-item .btn").click(function () {
  $(".container").toggleClass("user-guess");
});

//////////////////////////////////////////////////

let userNumber = document.querySelector('.max');
let btnMax = document.querySelector('.btnMax');
let userAnswer = document.querySelector('.answer');
let btnAnswer = document.querySelector('.btnAnswer');
let comment = document.querySelector('.comment');
let myGuess;
let maxNumber = +(userNumber.value);
let answer = +(userAnswer.value);


function getMyGuess() {
  maxNumber = +(userNumber.value);
  if (maxNumber < 1 || maxNumber === isNaN || Number.isInteger(maxNumber) === false || maxNumber === "" || maxNumber === null) {
    comment.innerText = "Please enter an integer greater than 0";
    return;
  } else {
    comment.innerText = `Cool! I set a number from 1 to ${maxNumber}, try to guess it`;
  }
  myGuess = Math.floor(Math.random() * maxNumber) + 1;
}


function getResult() {
  answer = +(userAnswer.value);
  if (answer < 1 || answer === isNaN || Number.isInteger(answer) === false || answer === "" || answer === null || answer > maxNumber) {
    comment.innerText = `Please enter an integer from 1 to ${maxNumber}`;
  } else if (answer === myGuess) {
    comment.innerText = 'You won!';
  } else if (answer > myGuess) {
    comment.innerText = 'My number is smaller\n Try again';
  } else if (answer < myGuess) {
    comment.innerText = 'My number is greater\n Try again';
  }
}

btnAnswer.addEventListener('click', getResult);
btnMax.addEventListener('click', getMyGuess);

////////////////////////////////////////////////////////////////////


let userNumber2 = document.querySelector('.max2');
let btnMax2 = document.querySelector('.btnMax2');
let comment2 = document.querySelector('.comment2');
let btnGreater = document.querySelector('.greater');
let btnSmaller = document.querySelector('.smaller');
let btnYes = document.querySelector('.yes');
let max;

function checkMax() {
  max = +(userNumber2.value);
  if (max < 1 || max === isNaN || Number.isInteger(max) === false || max === "" || max === null) {
    comment2.innerText = "Please enter an integer greater than 0";
    return;
  } else {
    comment2.innerText = `Think of a number from 1 to ${max}. I'll try to guess it`;
    getResult2();
  }
}

function getResult2() {
  let min = 1;
  let middle;
  middle = Math.ceil((max - min + 1) / 2) + min - 1;
  comment2.innerText = ` Is your number ${middle}?`;
  function getSmaller() {
    max = middle - 1;
    middle = Math.ceil((max - min + 1) / 2) + min - 1;
    comment2.innerText = ` Is your number ${middle}?`;
  }
  function getGreater() {
    min = middle + 1;
    middle = Math.ceil((max - min + 1) / 2) + min - 1;
    comment2.innerText = ` Is your number ${middle}?`;
  }
  function youWon() {
    comment2.innerText = 'Eeeeeeeee! I won!';
  }
  btnSmaller.addEventListener('click', getSmaller);
  btnGreater.addEventListener('click', getGreater);
  btnYes.addEventListener('click', youWon);
}

btnMax2.addEventListener('click', checkMax);
