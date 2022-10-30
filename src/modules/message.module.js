import {Module} from '../core/module'
import {body} from '../constants'

export class MessageModule extends Module {
  constructor() {
    super('MessageModule', 'Вызвать сообщение')
  }

  createMessage = () => {
    const message = document.createElement('div')
    message.className = 'text'
    message.textContent = 'Данное сообщение пропадет через 5 секунд!'
    message.style.fontSize = '15px'
    message.style.color = '#ffffff'
    message.style.fontVariant = 'small-caps'
    message.style.backgroundColor = '#673ab7'
    message.style.borderRadius = '5px'
    message.style.width = '270px'
    message.style.padding = '10px'
    message.style.boxSizing = 'content-box'

    body.prepend(message)

    setTimeout(function () {
      message.remove()
    }, 5000)

    return  message
  }

  showMessage = () => {
    body.append(this.createMessage())
  }

  trigger() {
    this.showMessage()
  }
}
