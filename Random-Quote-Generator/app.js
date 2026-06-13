const quotes = [{
     quote: "Success is not final, failure is not fatal.",
     author: "kartikesh mishra"
},{
    quote:"The best way to predict the future is to create it.",
    author: "Sahil Anand"
},
{
    quote:"Dream big and dare to fail.",
    author:"Rohit Thakur"
},

{
        quote: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    }
];

//accesing Using Id
const quoteText = document.getElementById("Quote");
const authorText = document.getElementById("author");
const button = document.getElementById("btn");

//function to create generatequote and using math.random generates random rgb colors
function genratequote(){
   const randomIndex = Math.floor(Math.random()* quotes.length);
   quoteText.innerText = quotes[randomIndex].quote;
   authorText.innerText = "-" + quotes[randomIndex].author;

       const colors = [
        "#ff9a9e",
        "#fad0c4",
        "#a18cd1",
        "#84fab0",
        "#8fd3f4",
        "#fbc2eb"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

//appliyng addeventlistner on button.
button.addEventListener("click",genratequote);





