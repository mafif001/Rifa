const startDate = new Date("July 26, 2026 00:00:00");
const returnDate = new Date("September 21, 2026 00:00:00");

// ------------------------------
// Countdown (Home Page)
// ------------------------------

function updateCountdown() {

    const now = new Date();

    const totalDuration = returnDate - startDate;
    const remaining = returnDate - now;

    if (remaining <= 0) {

        document.getElementById("countdown").textContent =
            "💜 She's Home 💜";

        document.getElementById("progressBar").style.width = "0%";

        return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    const percentRemaining = (remaining / totalDuration) * 100;

    document.getElementById("progressBar").style.width =
        percentRemaining + "%";
}

// Only run the countdown if we're on the home page
if (
    document.getElementById("countdown") &&
    document.getElementById("progressBar")
) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ------------------------------
// Daily Letter (Letter Page)
// ------------------------------

if (
    document.getElementById("dayTitle") &&
    document.getElementById("letterText")
) {

    fetch("data/letters.json")
        .then(response => response.json())
        .then(letters => {

            const now = new Date();
            now.setHours(0, 0, 0, 0);

            const tripStart = new Date("July 26, 2026");
            tripStart.setHours(0, 0, 0, 0);

            // July 26 = Day 1
            const dayNumber =
                Math.floor((now - tripStart) / (1000 * 60 * 60 * 24)) + 1;

            // Letter 1 starts on Day 5
            const letterIndex = dayNumber - 5;

            let today;

            if (letterIndex < 0) {

                document.getElementById("dayTitle").textContent =
                    "Not Yet 💜";

                document.getElementById("letterText").textContent =
                    "Your first letter unlocks on Day 5.";

                return;
            }

            if (letterIndex >= letters.length) {
                today = letters[letters.length - 1];
            } else {
                today = letters[letterIndex];
            }

            document.getElementById("dayTitle").textContent =
                today.title;

            document.getElementById("letterText").textContent =
                today.text;

        })
        .catch(error => {

            console.error(error);

            document.getElementById("dayTitle").textContent =
                "Oops!";

            document.getElementById("letterText").textContent =
                "Couldn't load today's letter.";

        });

}


// DAILY PICTURE

if (
    document.getElementById("pictureTitle") &&
    document.getElementById("dailyPicture")
) {

    fetch("data/pictures.json")
        .then(response => response.json())
        .then(pictures => {

            const now = new Date();
            now.setHours(0,0,0,0);

            const tripStart = new Date("July 26, 2026");
            tripStart.setHours(0,0,0,0);

            const dayNumber =
                Math.floor((now - tripStart) / (1000 * 60 * 60 * 24)) + 1;

            const pictureIndex = dayNumber - 5;

            let today;

            if (pictureIndex < 0) {
                document.getElementById("pictureTitle").textContent =
                    "Not Yet 💜";
                return;
            }

            if (pictureIndex >= pictures.length) {
                today = pictures[pictures.length - 1];
            } else {
                today = pictures[pictureIndex];
            }

            document.getElementById("pictureTitle").textContent =
                today.title;

            document.getElementById("dailyPicture").src =
                today.image;
        });
}


//Daily Meme

// DAILY PICTURE

if (
    document.getElementById("memeTitle") &&
    document.getElementById("dailyMeme")
) {

    fetch("data/memes.json")
        .then(response => response.json())
        .then(pictures => {

            const now = new Date();
            now.setHours(0,0,0,0);

            const tripStart = new Date("July 26, 2026");
            tripStart.setHours(0,0,0,0);

            const dayNumber =
                Math.floor((now - tripStart) / (1000 * 60 * 60 * 24)) + 1;

            const pictureIndex = dayNumber - 5;

            let today;

            if (pictureIndex < 0) {
                document.getElementById("memeTitle").textContent =
                    "Not Yet 💜";
                return;
            }

            if (pictureIndex >= pictures.length) {
                today = pictures[pictures.length - 1];
            } else {
                today = pictures[pictureIndex];
            }

            document.getElementById("memeTitle").textContent =
                today.title;

            document.getElementById("dailyMeme").src =
                today.image;
        });
}
