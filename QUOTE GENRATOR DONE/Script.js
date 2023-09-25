const quotwText = document.querySelector(".quote"),
quoteHeading = document.querySelector(".header"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
SoundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
whatsappBtn = document.querySelector(".whatsapp");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching quotes into Javascript object
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteHeading.innerText = "Quote of the Day";
        quotwText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

SoundBtn.addEventListener("click",()=>{
    //speech api that represent speech request
    let utterance1 = new SpeechSynthesisUtterance(`${quoteHeading.innerText}`);
    speechSynthesis.speak(utterance1);
    let utterance2 = new SpeechSynthesisUtterance(`${quotwText.innerText}`);
    speechSynthesis.speak(utterance2);//It will speak quote
    let utterance3 = new SpeechSynthesisUtterance(` by ${authorName.innerText}`);
    speechSynthesis.speak(utterance3);//It will speak quote
});


copyBtn.addEventListener("click",()=>{
    //Copying teh quote text on copybtn click
    navigator.clipboard.writeText(quotwText.innerText);

});


whatsappBtn.addEventListener("click",()=>{
    let whatsappUrl = 'https://web.whatsapp.com/#About/edit?url = ${quotwText.innerText}';
    window.open(whatsappUrl, "_blank");
});


quoteBtn.addEventListener("click", randomQuote);