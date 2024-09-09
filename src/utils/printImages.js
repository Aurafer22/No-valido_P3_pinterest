import getImages from '../components/cards/cards'

export default function printImages(response) {
  const divResults = document.querySelector('.divResults')
  divResults.innerHTML = ''
  response.forEach((element) => {
    getImages(element)
  })
}
