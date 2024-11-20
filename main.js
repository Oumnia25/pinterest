import Header from './js/header.js';
import ImageList from './js/mainimagenes.js';

const ACCESS_KEY = 'LgR3-d8C_o2Pv7EfGzF-6VCsgArlzbbCNAxOFsESWp4';

async function fetchImages(searchTerm = '') {
  let url = `https://api.unsplash.com/photos/random?count=9&client_id=${ACCESS_KEY}`;
  
  if (searchTerm) {
    url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&client_id=${ACCESS_KEY}`;
  }

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      renderImages(data.results);
    } else if (searchTerm) {
      alert('No se encontraron imágenes para esa búsqueda.');
    } else {
      renderImages(data); 
    }
  } catch (error) {
    console.error("Error al cargar las imágenes:", error.message, error.stack);
    alert("Hubo un error al cargar las imágenes. Intenta más tarde.");
  }
}

function renderImages(images) {

  const imageContainer = document.getElementById('imageContainer');
  if (imageContainer) {
    imageContainer.innerHTML = '';
  } else {
    console.error("No se encontró el contenedor de imágenes en el DOM.");
    return;
  }

  const imageList = ImageList(images);
  imageContainer.appendChild(imageList);
}

document.addEventListener('DOMContentLoaded', () => {

  const header = Header({ onSearch: fetchImages });
  document.body.appendChild(header);

  const imageContainer = document.createElement('div');
  imageContainer.id = 'imageContainer';
  document.body.appendChild(imageContainer);


  fetchImages();


  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  
  if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) fetchImages(searchTerm);
      searchInput.value = ''; 
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) fetchImages(searchTerm);
        searchInput.value = ''; 
      }
    });
  } else {
    console.error("No se encontraron elementos del buscador en el DOM.");
  }
});

