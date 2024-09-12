import fetchApi from '../../utils/fetch'
import printImages from '../../utils/printImages'
import { createButton } from '../button/button'
printImages
import './home.css'

export default async function home(parentNode) {
  const divResults = document.createElement('div')
  divResults.classList.add('gridContainer', 'divResults')
  parentNode.append(divResults)
  const response = await fetchApi()
  const photos = response.results

  printImages(photos)

  const divCargarMas = document.createElement('div')
  divCargarMas.classList.add('flexContainer', 'divCargarMas')
  const cargarMasBtn = createButton(
    'cargarBtn',
    'Cargar más',
    'primaryButton',
    divCargarMas
  )
  parentNode.append(divCargarMas)
  // cargarMasBtn.addEventListener('click', () => {})
}
