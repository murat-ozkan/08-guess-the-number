let randomNumber = Math.floor(Math.random() * 100) + 1;
let min = 1;
let max = 100;
let attempts = 3;

let input = document.getElementById("guess");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("submitGuess").click();
  }
});

document.getElementById("submitGuess").addEventListener("click", function () {
  const guess = document.getElementById("guess").value;
  if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  if (guess == randomNumber) {
    alert("Congratulations");
  } else if (guess < randomNumber) {
    min = guess;
    attempts--;
    alert(
      `It's too low. Enter Your Number between ${min} - ${max} . You have ${attempts} left. `
    );
  } else {
    max = guess;
    attempts--;
    alert(
      `It's too high. Enter Your Number between ${min} - ${max} . You have ${attempts} left. `
    );
  }

  if (attempts === 0) {
    alert("Sorry your number was " + randomNumber + ".");
    window.location.reload();
  }
});

console.log(randomNumber);
