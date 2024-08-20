window.onload = function() {
    var music = document.getElementById("backgroundMusic");
    music.play();
    typeText();
}

const texts = [
    "Hai Cantik😇",
    "Rizal Lihat Beberapa Bulan Ini Repostan Tiktok Kamu Kok Sedih-Sedih Mulu😞",
    "Jangan Sedih-Sedih Terus Ya Cantik, Rizal Jadi Ikutan Sedih Tawuk🥹",
    "Kalau Leny Ada Apa-Apa Leny Bisa Certia Ke Rizal Ya, Jangan Di Pendam            Sendiri🤗",
    "Rizal Bakal Selalu Ada Buat Leny Kok, Leny Jangan Khawatir Ya😊",
];

const images = [
    'stiker/gombal.gif',
    'stiker/sedih.gif',
    'stiker/nangis.gif',
    'stiker/peluk.gif',
    'stiker/khawatir.gif',
    'stiker/love.gif',  // Gambar untuk respons Yes
    'stiker/nangis.gif',  // Gambar untuk respons No
];

let index = 0;
let charIndex = 0;
const typingSpeed = 40;
const nextBtn = document.getElementById('nextBtn');
const textContainer = document.getElementById('text');
const feedbackSection = document.getElementById('feedbackSection');
const animatedImage = document.getElementById('animatedImage');

function typeText() {
    if (charIndex < texts[index].length) {
        textContainer.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        nextBtn.disabled = false;
    }
}

function nextText() {
    nextBtn.disabled = true;
    charIndex = 0;
    index++;

    if (index < texts.length) {
        textContainer.innerHTML = ''; // Menghapus teks yang ada
        animatedImage.style.opacity = 0; // Sembunyikan gambar saat berganti
        setTimeout(() => {
            const nextImageIndex = index % images.length;
            animatedImage.src = images[nextImageIndex];
            animatedImage.style.opacity = 2; // Munculkan gambar yang baru
            setTimeout(typeText, 2100); // Menunda pengetikan teks sampai gambar baru muncul
        }, 300); // Delay sedikit agar transisi terlihat
    } else {
        feedbackSection.style.display = 'block';
        textContainer.innerHTML = 'Jangan Sedih-Sedih Terus Ya Cantik😇';
        nextBtn.style.display = 'none';
    }
}

function sendFeedback(response) {
    const phoneNumber = "+62895632794111";  // Ganti dengan nomor WhatsApp Anda
    let message, imageIndex;

    if (response === 'Yes') {
        message = 'Leny Sayang Rizal😇';
        imageIndex = 5;  // Indeks gambar untuk respons Yes
    } else {
        message = 'Leny Engga Sayang Rizal😞';
        imageIndex = 6;  // Indeks gambar untuk respons No
    }

    // Ganti gambar sesuai respons
    animatedImage.style.opacity = 0;
    setTimeout(() => {
        animatedImage.src = images[imageIndex];
        animatedImage.style.opacity = 1;
    }, 300);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}
