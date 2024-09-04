import './cards.css'
// import { searcher } from '../searcher/searcher.js'
import { getImages } from '../../../main'

const main = document.querySelector('#main')
const searcher = document.querySelector('#searcher')
// const results = getImages('dogs')
// console.log(results)

export const printCards = (results) => {
  const divCard = document.createElement('div')
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

  divAuthor.append(author)
  divShare.append(iconShare, pictureDate)
  divData.append(nameAuthor, divShare)
  divCard.append(image, divAuthor, divData)
  main.append(divCard)
}

// printCards(getImages(data.results))
