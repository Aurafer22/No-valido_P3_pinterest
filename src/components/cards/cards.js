import './cards.css'

const main = document.querySelector('#main')

export default function getImages(parentNode, element) {
  const divCard = document.createElement('div')
  divCard.classList.add('flexContainer', 'colum')

  const image = document.createElement('img')
  image.src = element.urls.full
  image.classList.add('image')

  const divAuthor = document.createElement('div')
  const author = document.createElement('img')
  author.src = element.user.profile_image.small
  author.classList.add('author')

  const divData = document.createElement('div')
  divData.classList.add('flexContainer', 'colum')
  const nameAuthor = document.createElement('p')
  nameAuthor.textContent = element.user.name
  nameAuthor.classList.add('nameAuthor')

  const divShare = document.createElement('div')
  divShare.classList.add('flexContainer')
  const iconShare = document.createElement('img')
  iconShare.src = './assets/icon _upload share_.svg'
  iconShare.classList.add('iconShare')
  const pictureDate = document.createElement('p')

  divAuthor.append(author)
  divShare.append(iconShare, pictureDate)
  divData.append(nameAuthor, divShare)
  divCard.append(image, divAuthor, divData)
  parentNode.append(divCard)
}
