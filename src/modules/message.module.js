import {Module} from '../core/module'
import {body} from '../constants'

export default class MessageModule extends Module {
  constructor() {
    super('MessageModule', 'Вызвать сообщение')
  }

  #createMessage = () => {
    const message = document.createElement('div')
    message.textContent = 'Данное сообщение пропадет через 5 секунд!'
    message.style.fontSize = '15px'
    message.style.color = '#fff'
    message.style.fontVariant = 'small-caps'
    message.style.backgroundColor = '#333'
    message.style.borderRadius = '5px'
    message.style.width = '270px'
    message.style.padding = '10px'
    message.style.boxSizing = 'content-box'

    body.prepend(message)

    setTimeout(function () {
      message.remove()
    }, 5000)

    return message
  }

  #showMessage = () => {
    body.append(this.#createMessage())
  }

  trigger() {
    this.#showMessage()
  }
}
