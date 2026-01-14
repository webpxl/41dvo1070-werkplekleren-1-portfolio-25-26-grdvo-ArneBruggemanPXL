// Alle foto's met thema, URL en caption
const photos = [
    {theme: "licht", src: "../assets/Licht/licht (1).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (2).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (3).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (4).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (5).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (6).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (7).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (8).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (9).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (10).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (11).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (12).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (13).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (14).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (15).jpg", caption: "licht1"},


    {theme: "bloemen", src: "../assets/bloemen/bloem (1).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (2).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (3).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (4).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (5).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (6).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (7).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (8).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (9).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (10).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (11).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (12).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (13).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (14).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (15).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (16).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (17).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (18).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (19).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (18).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (19).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (20).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (21).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (22).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (23).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (24).jpg", caption: "1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (25).jpg", caption: "1"},


    {theme: "portretten", src: "../assets/portrait1.jpg", caption: "1"},
    {theme: "portretten", src: "../assets/portrait2.jpg", caption: "1"}
];

const gallery = document.getElementById('photoGallery');

// Functie om alle foto’s te tonen
function displayPhotos(filter = "all") {
    gallery.innerHTML = ""; // Eerst leegmaken
    photos.forEach(photo => {
        if (filter === "all" || photo.theme === filter) {
            const div = document.createElement("div");
            div.classList.add("photo-item", photo.theme);
            div.innerHTML = `
                <img src="${photo.src}" alt="${photo.caption}" class="photo-img">
                <p>${photo.caption}</p>
            `;
            gallery.appendChild(div);
        }
    });
}

// Eerst alle foto's tonen
displayPhotos();

// Filterknoppen koppelen
document.querySelectorAll('.photo-filter button').forEach(btn => {
    btn.addEventListener('click', () => {
        displayPhotos(btn.getAttribute('data-theme'));
    });
});
