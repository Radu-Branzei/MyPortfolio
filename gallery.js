const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const galleryImages = document.querySelectorAll(".gallery img");

let images = [];
let currentIndex = 0;

galleryImages.forEach((img, index) => {
    images.push({
        src: img.src,
        caption: img.dataset.caption || ""
    });

    img.addEventListener("click", () => openLightbox(index));
});

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateLightbox();
}

function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.caption;
}

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});
