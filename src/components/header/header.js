import './header.css'
import { createButton } from '../button/button.js'

export default function getHeader(parentNode) {
  const header = document.querySelector('header')
  header.classList.add('flexContainer')

  const logo = document.createElement('img')
  logo.src = './src/components/header/header_assets/icono_pinterest.png'
  logo.classList.add('logo')
  logo.alt = 'logo Pinterest'

  const divButtons = document.createElement('div')
  divButtons.classList.add('flexContainer')
  createButton('inicioBtn', 'Inicio', 'secondaryButton', divButtons)
  createButton('explorarBtn', 'Explorar', 'terciaryButton', divButtons)
  createButton('crearBtn', 'Crear', 'terciaryButton', divButtons)

  const searcher = document.createElement('input')
  searcher.id = 'searcher'
  searcher.placeholder = '🔎 Buscar'
  searcher.classList.add('searcher')

  const divProfile = document.createElement('div')
  divProfile.id = 'divProfile'
  divProfile.classList.add('flexContainer')

  const iconNotifications = document.createElement('img')
  iconNotifications.src =
    './src/components/header/header_assets/icon _bell_.svg'
  iconNotifications.classList.add('iconNotifications')
  const iconCommentary = document.createElement('img')
  iconCommentary.src =
    './src/components/header/header_assets/icon _Comment Dots_.svg'
  iconCommentary.classList.add('iconCommentary')
  const iconLog = document.createElement('div')
  iconLog.textContent = 'D'
  iconLog.classList.add('iconLog', 'flexContainer')

  parentNode.append(logo)
  parentNode.append(divButtons)
  parentNode.append(searcher)
  divProfile.append(iconNotifications)
  divProfile.append(iconCommentary)
  divProfile.append(iconLog)
  parentNode.append(divProfile)
}
