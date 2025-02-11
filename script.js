window.onload = function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.getElementById("hearts-container").appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    function createMessage() {
        const messages = [
            "You are beautiful ❤️",
            "You are the most prettiest girl I've seen 💖",
            "I love you so much 😘",
            "You are my sunshine ☀️",
            "You make my world brighter ✨",
            "You are my happiness 🥰"
        ];
        const msg = document.createElement("div");
        msg.classList.add("love-message");
        msg.innerText = messages[Math.floor(Math.random() * messages.length)];
        msg.style.left = Math.random() * 100 + "vw";
        msg.style.opacity = 0.75;
        msg.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.getElementById("love-messages").appendChild(msg);
        setTimeout(() => msg.remove(), 5000);
    }

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("floating-star");
        star.innerHTML = "✨";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 4 + "s";
        document.getElementById("stars-container").appendChild(star);
        setTimeout(() => star.remove(), 5000);
    }

    setInterval(createHeart, 500);
    setInterval(createMessage, 2000);
    setInterval(createStar, 1000);
};