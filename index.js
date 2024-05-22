
const quoteBank = [
    {
        quote: 'Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way.',
        author: 'Charles Bukowski'
    },
    {
        quote: 'What we call the beginning is often the end. And to make an end is to make a beginning. The end is where we start from.',
        author: 'T.S. Eliot'
    },
    {
        quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
        author: ' Dr. Seuss'
    },
    {
        quote: 'The world is indeed comic, but the joke is on mankind.',
        author: ' H.P. Lovecraft'
    },
    {
        quote: 'Life is a series of natural and spontaneous changes. Don’t resist them; that only creates sorrow. Let reality be reality.',
        author: ' Lao Tzu'
    },
    {
        quote: 'Hell is empty, and all the devils are here.',
        author: ' William Shakespeare'
    }

]


window.onload = init;
function init() {
    console.log('loaded')
    newQuote()
}

function newQuote() {
    let quoteLength = quoteBank.length;
    let randomIndex = Math.floor(Math.random() * quoteLength);


    
    let tweetLink = 'http://www.twitter.com/intent/tweet?text=';
    //ADD QUOTE
    tweetLink += '"' + quoteBank[randomIndex].quote + '"';
   
    //ADD AUTHOR
    tweetLink += " " + '_' + quoteBank[randomIndex].author;

    //ADD TWEET LINK TO #TWEET-QUOTE
    document.getElementById('tweet-quote').href = tweetLink;
    
    //ADD QUOTE TO #TEXT
    document.getElementById('text').innerText = quoteBank[randomIndex].quote;
   
    //ADD AUTHOR NAME TO #AUTHOR
    document.getElementById('author').innerText = '_' + quoteBank[randomIndex].author;
}