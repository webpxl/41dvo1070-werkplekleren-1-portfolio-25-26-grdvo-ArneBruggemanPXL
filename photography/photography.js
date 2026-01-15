// Alle foto's met thema, URL en caption
const photos = [
    {theme: "licht", src: "../assets/Licht/licht (1).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (7).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (8).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (9).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (11).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (12).jpg", caption: "licht1"},
    {theme: "licht", src: "../assets/Licht/licht (14).jpg", caption: "licht1"},
    {theme: "bloemen", src: "../assets/bloemen/bloem (1).jpg", caption: ""},
    {theme: "bloemen", src: "../assets/bloemen/bloem (2).jpg", caption: ""},
    {theme: "bloemen", src: "../assets/bloemen/bloem (3).jpg", caption: ""},
    {theme: "bloemen", src: "../assets/bloemen/bloem (4).jpg", caption: ""},
];

const gallery = document.getElementById('photoGallery');


function displayPhotos(filter = "all") {
    gallery.innerHTML = "";
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

displayPhotos();


document.querySelectorAll('.photo-filter button').forEach(btn => {
    btn.addEventListener('click', () => {
        displayPhotos(btn.getAttribute('data-theme'));
    });
});
