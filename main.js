import './style.css'
import getHeader from './src/components/header/header.js'
import fetchApi from './src/utils/fetch.js'
import printImages from './src/utils/printImages.js'
import { createButton } from './src/components/button/button.js'

const headerPlace = document.querySelector('#header')
getHeader(headerPlace)

const main = document.querySelector('#main')
const divResults = document.createElement('div')
divResults.classList.add('flexContainer', 'divResults')
main.append(divResults)
const printResults = async () => {
  const response = await fetchApi()
  const element = response.data.results
  printImages(element, divResults)
}
printResults()
const divCargarMas = document.createElement('div')
divCargarMas.classList.add('flexContainer', 'divCargarMas')
const cargarMasBtn = createButton(
  'cargarBtn',
  'Cargar más',
  'primaryButton',
  divCargarMas
)
main.append(divCargarMas)
cargarMasBtn.addEventListener('click', () => {})
mainContent()
