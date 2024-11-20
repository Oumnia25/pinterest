
export default function ImageItem({ imgUrl, description, photographer, likes }) {
  const container = document.createElement('section');
  container.classList.add('image-item');

  const img = document.createElement('img');
  img.src = imgUrl;
  img.alt = description;

  const details = document.createElement('section');
  details.classList.add('image-details');

  const photographerName = document.createElement('p');
  photographerName.textContent = `Fotógrafo: ${photographer}`;

  const likesCount = document.createElement('p');
  likesCount.textContent = `Likes: ${likes}`;

  details.appendChild(photographerName);
  details.appendChild(likesCount);

  container.appendChild(img);
  container.appendChild(details);

  return container;
}
