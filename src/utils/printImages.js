import getImages from '../components/cards/cards'

export default function printImages(element, parentNode) {
  parentNode.innerHTML = ''
  element.foreach((element) => {
    getImages(parentNode, element)
  })
}
