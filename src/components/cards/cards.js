import './cards.css'

export default function cards(element) {
  const main = document.querySelector('#main')
  const divResults = document.querySelector('.divResults')
  const divCard = document.createElement('div')
  divCard.classList.add('flexContainer', 'colum', 'divCard')

  const divImage = document.createElement('div')
  divImage.classList.add('divImage', 'flexContainer', 'colum')
  const image = document.createElement('img')
  image.src = element.urls.regular
  image.classList.add('image')
  const author = document.createElement('img')
  author.src = element.user.profile_image.medium
  author.classList.add('author')

  const divData = document.createElement('div')
  divData.classList.add('flexContainer', 'colum', 'divData')
  const nameAuthor = document.createElement('p')
  nameAuthor.textContent = element.user.name
  nameAuthor.classList.add('nameAuthor')

  const divShare = document.createElement('div')
  divShare.classList.add('flexContainer', 'divShare')
  const iconShare = document.createElement('img')
  iconShare.src = './assets/icon _upload share_.svg'
  iconShare.classList.add('iconShare')

  const apiDate = element.updated_at
  function formatDate(apiDate) {
    const date = new Date(apiDate)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  const pictureDate = document.createElement('p')
  pictureDate.textContent = formatDate(apiDate)

  divImage.append(image, author)
  divShare.append(iconShare, pictureDate)
  divData.append(nameAuthor, divShare)
  divCard.append(divImage, divData)
  divResults.append(divCard)
}
