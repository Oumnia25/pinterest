
import ImageItem from './imagenitem.js';

export default function ImageList(images) {
  const section = document.createElement('section');
  section.classList.add('main-images');

  if (images.length === 0) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'No se encontraron imágenes.';
    section.appendChild(errorMessage);
    return section;
  }

  images.forEach(image => {
    const imageItem = ImageItem({
      imgUrl: image.urls.small,
      description: image.alt_description,
      photographer: image.user.name,
      likes: image.likes
    });
    section.appendChild(imageItem);
  });

  return section;
}

