const quotes = [
  {
    quote:
      "Pride is pleasure arising from a man's thinking too highly of himself.",
    author: "Baruch Spinoza",
  },
  {
    quote: "Many an optimist has become rich by buying out a pessimist.",
    author: "Robert G. Allen",
  },
  {
    quote: "Man is what he believes.",
    author: "Anton Chekhov",
  },
  {
    quote: "Success isn't permanent, and failure isn't fatal.",
    author: "Mike Ditka",
  },
  {
    quote:
      "Destiny is no matter of chance. It is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved.",
    author: "William Jennings Bryan",
  },
  {
    quote: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes",
  },
  {
    quote: "Self-confidence is the first requisite to great undertakings.",
    author: "Samuel Johnson",
  },
  {
    quote:
      "No man is good enough to govern another man without that other's consent.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Put yourself on view. This brings your talents to light.",
    author: "Baltasar Gracian",
  },
  {
    quote: "Travel is only glamorous in retrospect.",
    author: "",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
