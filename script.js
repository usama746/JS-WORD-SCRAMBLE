let words = [
   "addition",
   "number",
   "exchange",
   "canvas",
   "garden",
   "position",
   "feather",
   "group",
   "taste",
   "store",
   "field",
   "needle",
   "library",
];

let wordText = document.getElementById("word");
let inputField = document.getElementById("inputText");
let refreshBtn = document.getElementById("refresh-word");
let checkBtn = document.getElementById("check-word");

let correctWord = "";

function initGame() {
   let scrambleWord = words[Math.floor(Math.random() * words.length)];
   let scrambleArray = scrambleWord.split("");

   scrambleArray = scrambleArray.sort(() => Math.random() - 0.5);

   wordText.innerText = scrambleArray.join("");

   correctWord = scrambleWord.toLowerCase();

   inputField.value = "";
}

initGame();

function checkWord() {
   let userWord = inputField.value.toLowerCase();
   if (userWord === "") {
      alert("Please enter a word to check!");
      return;
   }

   if (userWord === correctWord) {
      alert(`🎉 Congrats! "${correctWord.toUpperCase()}" is the correct word!`);
      initGame();
   } else {
      alert(`❌ Oops! "${userWord}" is incorrect. Try again.`);
   }
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
