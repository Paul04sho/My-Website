
let button = document.getElementById("quote-button");
let output = document.getElementById("output");
// An array that contains a list of inspirational quotes
let quotes = ['"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
'“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
'“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
'“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
'“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
'“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
'“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',];

button.addEventListener("click", (e) => { // When the button is clicked a random quote is selected from the quotes array
    const newQuote = quotes[Math.floor(
        Math.random()*quotes.length)];
        output.innerText=newQuote; // To display the quote on the web page
});

// JavaScript logic for the tooltip
document.addEventListener("DOMContentLoaded", function() {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    document.querySelectorAll("[data-tooltip]").forEach(Element => {
        Element.addEventListener("mouseenter", function() {
            tooltip.textContent = this.dataset.tooltip;
            // Calculate position
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + window.scrollX + "px";
            tooltip.style.top = rect.bottom + window.scrollY + "px";
            tooltip.style.display = "block"; // the tooltip is made visible
        }); // Handling mouse enter 

        Element.addEventListener("mouseleave", function() {
            tooltip.style.display = "none";
        }); // Handling mouse leave
    });
});