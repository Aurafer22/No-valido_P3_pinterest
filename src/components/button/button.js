import './button.css'

export const createButton = (texto, clase, nodeParent) => {
  const button = document.createElement('button')
  button.textContent = texto
  button.classList.add('button', clase)
  nodeParent.append(button)
}
