const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy");

//random Quote Function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText ="Loading Quotes...";
    //fetching random quote/data from API and parsing it into javascript object
fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
console.log(result);
quoteText.innerText = result.content;
authorName.innerText = result.author;
quoteBtn.innerText ="New Quote ";
quoteBtn.classList.remove("loading");
});
}

soundBtn.addEventListener("click" ,() =>{
//the SpeechSynthesisUtterance is a web speech API that represents a speech request
let utterance =new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}` );
speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",() =>{
    //coping the quote text on cpoyBtn click
    //writeText() property Writes the specified text string to system clipboard
navigator.clipboard.writeText(quoteText.innerText);
});


quoteBtn.addEventListener("click",randomQuote);
