import './style.css'
import getHeader from './src/components/header/header.js'
import fetchApi from './src/utils/fetch.js'
import printImages from './src/utils/printImages.js'
import { createButton } from './src/components/button/button.js'
import home from './src/components/home/home.js'

const headerPlace = document.querySelector('#header')
const main = document.querySelector('#main')
getHeader(headerPlace)
home(main)

export let searchQuery = ''
export let page = 1

const searcher = document.querySelector('#searcher')
searcher.addEventListener('keydown', async (e) => {
  const word = e.target.value.trim()
  if (e.key === 'Enter') {
    if (word) {
      searchQuery = word
      const response = await fetchApi(searchQuery, page)
      const photos = response.results
      printImages(photos)
      searcher.value = ''
    } else {
      // const divError = `
      // <div class="divError">
      // <h3>No se ha encontrado su término de búsqueda. Pruebe con otro</h3>
      // </div>`
      // main.insertBefore(divError, divResults)

      searchQuery = 'gato'
      const defaultRes = await fetchApi(searchQuery, page)
      const errorPhotos = defaultRes.results
      printImages(errorPhotos)
      searcher.value = ''
    }
  }
})
