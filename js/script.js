// Floating hearts effect
function createHeart() {
    const heart = document.createElement('div');
    heart.innerText = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.opacity = 0.8;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Make hearts appear every 300ms
setInterval(createHeart, 300);

// Button interaction
document.getElementById('loveBtn').addEventListener('click', () => {
    const messages = [
        "მე შენ ძალიან მიყვარხარ 😘",
        "კაი ნუ გაატრაკე 🌙💖",
        "ოოოო კაი რა 💕",
        "კიდე შემდეგი უნდა იყოს? 💞",
        "ხელის გული მეფხანება 🫶",
        "ძაან ძვირი ღირს ეს მანქანა 🤍",
        "კაი მე ეგ მინდააა💋",
        "15000 $ ხოარ გიგდია 💘",
        "მაგარი მოცლილი ხარ რა 💗",
        "რას წერრრ?? 💞",
        "ძააან ხოარ დაიღალე პატარავ?😊",
        "ნავში ვიჯდე 💕",
        "მინდა რომ წვიმდეს ✨",
        "ჩემი სიყვარული გჭირდეს 🌙💖",
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('loveMsg').innerText = randomMsg;
});

// Golden particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.innerText = '✨'; // sparkle
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
    particle.style.opacity = Math.random();
    particle.style.pointerEvents = 'none';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 200);
