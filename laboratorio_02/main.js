const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['tenis.jpeg', `tenis_mesa.jpeg`, `nado.jpeg`, `fut.jpeg`, `basket.jpeg`];
const alts = {
  'tenis.jpeg' : 'Tenista tá com raiva!',
  'tenis_mesa.jpeg' : 'Olha a carinha dele! xD',
  'nado.jpeg' : 'Nado (des)sincronizado!',
  'fut.jpeg' : 'Bolada!',
  'basket.jpeg' : 'Isso claramente é uma falta. De respeito!'
}

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});