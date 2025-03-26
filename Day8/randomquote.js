// Array of Quotes with Authors
const quotes = [
    { text: "Believe in yourself!", author: "Anonymous" },
    { text: "Work hard, stay humble.", author: "Unknown" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Do what you love, and you’ll never work a day in your life.", author: "Confucius" }
];

// Function to Get a Random Quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Event Listener for Button Click
document.getElementById("quoteBtn").addEventListener("click", function() {
    const quoteData = getRandomQuote();
    
    // Apply fade effect
    document.getElementById("quote-text").style.opacity = 0;
    document.getElementById("quote-author").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("quote-text").textContent = `"${quoteData.text}"`;
        document.getElementById("quote-author").textContent = `- ${quoteData.author}`;
        document.getElementById("quote-text").style.opacity = 1;
        document.getElementById("quote-author").style.opacity = 1;
    }, 300);
});
