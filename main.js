
let button = document.getElementById("quote-button");
let output = document.getElementById("output");
// An array that contains a list of inspirational quotes
let quotes = ['“« Quoique tu rêves d’entreprendre, commence-le. L’audace a du génie, du pouvoir, de la magie. »” – Johann Wolfgang von Goethe', 
'“« Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser. »” – Anonyme',
'“« J’ai appris que le courage n’est pas l’absence de peur, mais la capacité de la vaincre. »” – Nelson Mandela',
'“« Les grands accomplissements sont réussis non par la force, mais par la persévérance. »” – Samuel L. Johnson',
'“« N’aie pas peur d’avancer lentement. Aie peur de rester immobile. »” – Proverbe chinois',
'“« Pour obtenir quelque chose que l’on a jamais eu, il faut tenter quelque chose que l’on a jamais fait. »” – Périclès',
'“« Celui qui déplace les montagnes est celui qui commence par enlever les petites pierres. »” – Confucius',];

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
            tooltip.classList.add("show"); // the tooltip is made visible
            // Calculate position
            const rect = this.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            let top = rect.bottom + window.scrollY + 10;

            if(left < 10) left = 10;
            if(left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width -10;
            }

            tooltip.style.left = left + "px";
            tooltip.style.top = top + "px";
        }); // Handling mouse enter 

        Element.addEventListener("mouseleave", function() {
           tooltip.classList.remove("show");
        }); // Handling mouse leave
    });
});

// Observe the different sections
document.querySelectorAll('section, .hero-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});
