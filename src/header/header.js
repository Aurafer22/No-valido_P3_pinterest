import './header.css'
import { createButton } from '../components/button/button.js'
const header = document.querySelector('header')
header.classList.add('flexContainer')
const logo = document.createElement('img')
logo.src = './src/header/header_assets/icono_pinterest.png'
logo.classList.add('logo')
logo.alt = 'logo Pinterest'

const divButtons = document.createElement('div')
divButtons.classList.add('flexContainer')
createButton('Inicio', 'secondaryButton', divButtons)
createButton('Explorar', 'terciaryButton', divButtons)
createButton('Crear', 'terciaryButton', divButtons)

const divProfile = document.createElement('div')
divProfile.id = 'divProfile'
divProfile.classList.add('flexContainer')

const iconNotifications = document.createElement('img')
iconNotifications.src = './src/header/header_assets/icon _bell_.svg'
iconNotifications.classList.add('iconNotifications')
const iconCommentary = document.createElement('img')
iconCommentary.src = './src/header/header_assets/icon _Comment Dots_.svg'
iconCommentary.classList.add('iconCommentary')
const iconLog = document.createElement('div')
iconLog.textContent = 'D'
iconLog.classList.add('iconLog', 'flexContainer')

header.append(logo)
header.append(divButtons)
divProfile.append(iconNotifications)
divProfile.append(iconCommentary)
divProfile.append(iconLog)
header.append(divProfile)
