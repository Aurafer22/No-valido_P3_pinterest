import getImages from '../components/cards/cards'

export default function printImages(element) {
  const resultsContainer = document.querySelector('#main')
  resultsContainer.innerHTML = ''
  element.foreach((element) => {
    getImages(resultsContainer, element)
  })
}
