import cards from '../components/cards/cards'
import fetchApi from './fetch'

export default async function printImages(photos) {
  const divResults = document.querySelector('.divResults')
  divResults.innerHTML = ''
  photos.forEach((element) => {
    cards(element)
  })
}
