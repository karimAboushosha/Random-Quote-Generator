var quoteHTML = document.getElementById("quotecontainer");

var quoteArray =[
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you."
]

console.log(quoteHTML);
console.log(quoteArray);
var prerandom = 0;
function quotechange(){
 var randomNumber = Math.floor(Math.random() * quoteArray.length);   
while (randomNumber==prerandom){
 randomNumber = Math.floor(Math.random() * quoteArray.length);  
}
console.log(randomNumber)
quoteHTML.innerHTML = quoteArray[randomNumber];
prerandom = randomNumber;
}
