console.log('Stranica je uspješno učitana');

const imageCount = 30;
const imagePath = 'images/';
const imageExtension = '.jpg';
const gallery = document.getElementById('gallery');

for (let i = 1; i <= imageCount; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = `${imagePath}img${i}${imageExtension}`;
    imgElement.alt = `Slika ${i}`;
    gallery.appendChild(imgElement);
}
