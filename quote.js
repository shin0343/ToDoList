const quoteText = document.querySelector(".quote_text");
const quoteAuthor = document.querySelector(".quote_author");

function getQuote() {
    function randomItem(item) {
        return item[Math.floor(Math.random() * item.length)];
    }

    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const random = randomItem(data);
            const author = random.author;
            const text = random.text;
            quoteText.innerText = `${text}`;
            quoteAuthor.innerText = `- ${author} -`
        });
}

function init() {
    getQuote();
}

init();