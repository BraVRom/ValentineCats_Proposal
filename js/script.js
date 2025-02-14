let noClickCount = 0; // Counter for "No" button clicks

function selectOption(choice) {
    const question = document.getElementById("question");
    const buttons = document.getElementById("buttons");
    const noButton = document.getElementById("no-button");
    let yesButton = document.getElementById("yes-button");
    let audio = document.getElementById("meme-audio");
    let gifCenter = document.getElementById("gif-center");
    let gifLeft = document.getElementById("gif-left");
    let gifRight = document.getElementById("gif-right");

    if (choice === "yes") {
        flashRainbowColors(() => {
            gifCenter.style.display = "block";
            audio.play(); 

            setTimeout(() => {
                gifCenter.style.display = "none";
                gifLeft.style.display = "block";  
                gifRight.style.display = "block";  
                question.innerHTML = "Happy Valentine's Day 💖";

                // Add message above
                const topMessage = document.createElement('p');
                topMessage.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vitae odio.";
                topMessage.style.textAlign = "center";
                topMessage.style.fontWeight = "bold";
                topMessage.style.fontSize = "25px";
                question.prepend(topMessage);

                // Add message below
                const newMessage = document.createElement('p');
                newMessage.innerHTML = "If this made you smile, my mission is complete.";
                newMessage.style.textAlign = "center";
                newMessage.style.fontWeight = "bold";
                newMessage.style.fontSize = "25px";
                question.appendChild(newMessage);

                buttons.innerHTML = "<div id='final-content'><img src='./media/cat-heart.gif' alt='Happy'></div>";
            }, 3000);
        });

    } else {
        noClickCount++;

        const noTexts = [
            "Are you sure?",
            "Really sure? 🧐",
            "Think again... 😢",
            "You're breaking my heart 💔",
            "I'm going to cry 😭",
            "WHY ARE YOU DOING THIS? 😭💔",
            "I'll hack you 😡",
            "Just say yes, come on!",
            "I'm telling your mom!",
            "Googling 'how to deal with rejection'...",
            "If you keep pressing, your phone will explode 💥",
            "I CAN'T BELIEVE THIS, SAY YES 😡",
            "I'm about to cry",
            "Come on, man...",
            "This can't be real",
            "Please, just say yes",
            "I can't do this anymore",
            "I'm deleting this button",
            "Enough.",
        ];

        if (noClickCount < noTexts.length) {
            noButton.innerText = noTexts[noClickCount];
        } else {
            noButton.remove();
            buttons.innerHTML += "<p style='color: red; font-weight: bold; text-align: center;'>You can't escape now 😈</p>";
        }

        // Make "Yes" button bigger (only 4 times)
        if (noClickCount <= 4) {
            let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
            let newSize = currentSize * 1.3;
            yesButton.style.fontSize = newSize + "px";
            yesButton.style.padding = (12 * (newSize / 24)) + "px " + (24 * (newSize / 24)) + "px";
        }
    }
}

// Rainbow flash effect
function flashRainbowColors(callback) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#ffc4ed'; 
        if (callback) callback();
    }, 2000);
}