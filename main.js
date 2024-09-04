import './style.css'
import './src/header/header.js'
import './src/components/searcher/searcher.js'
import { searcher } from './src/components/searcher/searcher.js'

const accesKey = '_HVFdn752nXNMouh4zrEtbBgJGB21zEuuJe5y0VcliA'
const endPoint = 'https://api.unsplash.com/search/photos'

export const getImages = (query) => {
  fetch(endPoint + '?query=' + query + '&client_id=' + accesKey)
    .then((response) => response.json())
    .then((searched) => console.log(searched))
}
searcher.addEventListener('change', () => getImages(searcher.value))
