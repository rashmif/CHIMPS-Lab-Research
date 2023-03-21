const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = form.querySelector('input').value;
    const url = `https://source.unsplash.com/1600x900/?${searchTerm}`;

    gallery.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        const img = document.createElement('img');
        img.src = `${url}&${i}`;
        img.alt = searchTerm;
        gallery.appendChild(img);
    }
});