import { searchQuery, setPage } from '../../../main'
import fetchApi from '../../utils/fetch'
import printImages from '../../utils/printImages'
import { createButton } from '../button/button'
import './home.css'

export default async function home(parentNode) {
  const divResults = document.createElement('section')
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
  cargarMasBtn.addEventListener('click', async () => {
    setPage(newValue)
    const response = await fetchApi(searchQuery, newValue)
    const nextPage = response.results
    printImages(nextPage)
  })
  parentNode.append(divResults, divCargarMas)
}
