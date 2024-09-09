import printImages from './printImages'

const accesKey = '_HVFdn752nXNMouh4zrEtbBgJGB21zEuuJe5y0VcliA'
const fetchApi = (query = 'rosa', page = 1, per_page = 15) => {
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${per_page}&client_id=${accesKey}`
  )
    .then((response) => response.json())
    .then((results) => {
      console.log(results)
      return results
    })
}

export default fetchApi
