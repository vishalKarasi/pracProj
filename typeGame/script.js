// Random quote api url
const quoteApiUrl =
  "https://api.quotable.io/random?minLength=100&maxLength=140";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

// display random quotes

const renderNewQuote = async () => {
  const response = await fetch(quoteApiUrl); // fetch content from url
  let data = await response.json(); // store data
  quote = data.content; // access data
  // Array of characters in quote
  let arr = quote.split("").map((value) => {
    return "<span class='quote-chars'>" + value + "</span>";
  });
  // join array for displaying
  quoteSection.innerHTML += arr.join("");
};

window.onload = () => {
  userInput.value = "";
  document.getElementById("start-test").style.display = "block";
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  renderNewQuote();
};

// logic for comparing input words and quote

userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");
  quoteChars = Array.from(quoteChars); // create array from span tag
  let userInputChars = userInput.value.split("");
  // loop through each character in array
  quoteChars.forEach((char, index) => {
    if (char.innerText == userInputChars[index]) {
      char.classList.add("success");
    } else if (userInputChars[index] == null) {
      if (char.classList.contains("success")) {
        char.classList.remove("success");
      } else {
        char.classList.remove("fail");
      }
    } else {
      if (!char.classList.contains("fail")) {
        mistakes += 1;
        char.classList.add("fail");
      }
      document.getElementById("mistakes").innerHTML = mistakes;
    }
    let check = quoteChars.every((element) => {
        return element.classList.contains("success");
    });
    if(check){
        displayResult();
    }
  });
});

const displayResult = () => {
    document.querySelectorAll(".result").style.display = "block";
}
// start test
const startTest = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  document.getElementById("start-test").style.display = "none";
  document.getElementById("stop-test").style.display = "block";
};
