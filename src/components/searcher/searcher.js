import { getImages } from '../../../main'
import { printCards } from '../cards/cards.js'
import './searcher.css'

const header = document.querySelector('header')
const profile = document.querySelector('#divProfile')
export const searcher = document.createElement('input')
searcher.id = 'searcher'
searcher.placeholder = '🔎 Buscar'
searcher.classList.add('searcher')
header.insertBefore(searcher, profile)
