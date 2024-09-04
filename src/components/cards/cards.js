import './cards.css'
import { searcher } from './src/components/searcher/searcher.js'
import { getImages } from '../../../main'

const main = document.querySelector('#main')
const results = getImages('dogs')
export const printCards = (results) => {
  results = getImages(searcher.value)
  for (const element of results) {
    const divCards = document.createElement('div')
    const image = document.createElement('img')
    image.src = element.urls.full
    const divAuthor = document.createElement('div')
    const author = document.createElement('img')
    author.src = element.user.profile_image.small
    const divData = document.createElement('div')
    const nameAuthor = document.createElement('p')
    nameAuthor.textContent = element.user.name
    const divShare = document.createElement('div')
    const iconShare = document.createElement('img')
    iconShare.src = './assets/icon _upload share_.svg'
    const pictureDate = document.createElement('p')

    divCards.append(image)
    divAuthor.append(author)
    divData.append(nameAuthor)
    divShare.append(iconShare)
    divShare.append(pictureDate)
    divData.append(divShare)
    divCards.append(divAuthor)
    divCards.append(divData)
  }
  printCards(results)
}
