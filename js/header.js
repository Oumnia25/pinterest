
export default function Header({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('header');


  const logo = document.createElement('img');
  logo.src = 'https://res.cloudinary.com/dbtc8nyvm/image/upload/v1697558137/pinterest/1200px-Pinterest.svg_lbkvwl.png';
  logo.alt = 'Logo';
  logo.classList.add('logo');


  const searchArea = document.createElement('section');
  searchArea.classList.add('search-area');

  const searchInput = document.createElement('input');
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Buscar imágenes...';

  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.textContent = 'Buscar';

  searchArea.appendChild(searchInput);
  searchArea.appendChild(searchButton);

  header.appendChild(logo);
  header.appendChild(searchArea);


  logo.addEventListener('click', () => {
    fetchImages(); 
  });

  return header;
}
