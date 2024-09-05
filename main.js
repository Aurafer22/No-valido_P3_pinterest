import './style.css'
import getHeader from './src/components/header/header.js'
import fetchApi from './src/utils/fetch.js'
import printImages from './src/utils/printImages.js'
import { createButton } from './src/components/button/button.js'

const headerPlace = document.querySelector('#header')
getHeader(headerPlace)

const main = document.querySelector('#main')

async function mainContent(main) {
  const divResults = document.createElement('div')
  divResults.classList.add('flexContainer', 'divResults')
  const response = await fetchApi()
  const element = response.results
  main.append(divResults)
  printImages(element, divResults)
  createButton('Cargar más', 'primaryButton', main)
}

mainContent(main)
