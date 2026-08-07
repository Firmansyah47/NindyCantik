// ==========================================
// BAGIAN YANG HARUS LU EDIT BRE
// ==========================================

// 1. PIN TANGGAL LAHIR
const KODE_PIN = "0111";

// 2. DATA JARAK DAN LOKASI
const KOTA_KAMU = "Kaltara";          // Ganti nama kota/lokasi lu
const KOTA_DIA = "Jember";           // Ganti nama kota/lokasi cewek lu
const JARAK_KM = 2.233;                  // Masukkan angka jaraknya dalam KM (hanya angka)
const PESAN_JARAK = "Sejauh apapun jarak kita, hati aku bakalan selalu ada di sebelah kamu. Happy 1st Anniversary sayang!";

// 3. GALERI 5 FOTO
const galeri = [
    {
        gambar: "https://raw.githubusercontent.com/Firmansyah47/NindyCantik/main/Lumber1.jpg", 
        teks: "Ini foto kita pas pertama kali ketemu di lumber 😭, Kamu masi inget kan HAHAHAH :)"
    },
    {
        gambar: "https://raw.githubusercontent.com/Firmansyah47/NindyCantik/main/Lumber1.jpg", 
        teks: "Ini juga foto pas kamu maksa aku main ff 😭, padahal aku gengsi aja kalo bukan karna kamu aku gabakalan maen 🥰"
    },
    {
        gambar: "https://raw.githubusercontent.com/Firmansyah47/NindyCantik/main/Lumber1.jpg", 
        teks: ""Ini salah satu foto yang bikin aku naksir kamu, dari awal liat ini itu, kamu keliatan cantik banget aku suka idung kamu, rambut, semuanya deh hehee. kamu cantik sekali sayaang ♡´･ᴗ･`♡"l
    },
    {
        gambar: "https://raw.githubusercontent.com/Firmansyah47/NindyCantik/main/Lumber1.jpg", 
        teks: ""Serius kamu dulu suka sama aku 😭, padahal aku ga pd tau, liat aja deh bocah ingusan ini dapet cewe nya se cantik bidadari :)"
    },
    {
        gambar: "https://raw.githubusercontent.com/Firmansyah47/NindyCantik/main/Lumber1.jpg", 
        teks: ""
    }
];

// ==========================================
// LOGIKA PROGRAM
// ==========================================

let currentPhotoIndex = 0;

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heartsContainer.appendChild(heart);
    }
}

createStars();
createHearts();

function checkPin() {
    const input = document.getElementById('pin-input').value;
    if (input === KODE_PIN) {
        document.getElementById('screen-login').classList.remove('active');
        tampilkanFoto();
        document.getElementById('screen-gallery').classList.add('active');
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function tampilkanFoto() {
    document.getElementById('gallery-img').src = galeri[currentPhotoIndex].gambar;
    document.getElementById('gallery-text').innerText = galeri[currentPhotoIndex].teks;
}

function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex < galeri.length) {
        const galleryScreen = document.getElementById('screen-gallery');
        galleryScreen.style.animation = 'none';
        galleryScreen.offsetHeight; 
        galleryScreen.style.animation = null; 
        tampilkanFoto();
    } else {
        document.getElementById('screen-gallery').classList.remove('active');
        tampilkanLayarJarak();
        document.getElementById('screen-distance').classList.add('active');
    }
}

function tampilkanLayarJarak() {
    document.getElementById('nama-kota-kamu').innerText = KOTA_KAMU;
    document.getElementById('nama-kota-dia').innerText = KOTA_DIA;
    document.getElementById('pesan-jarak').innerText = PESAN_JARAK;

    let start = 0;
    const duration = 2000;
    const counterElement = document.getElementById('distance-number');
    
    const timer = setInterval(() => {
        start += Math.ceil(JARAK_KM / 50);
        if (start >= JARAK_KM) {
            start = JARAK_KM;
            clearInterval(timer);
        }
        counterElement.innerText = start + " KM";
    }, 30);
}

function goToFinal() {
    document.getElementById('screen-distance').classList.remove('active');
    document.getElementById('screen-final').classList.add('active');
}
