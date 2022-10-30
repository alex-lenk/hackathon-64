import {Module} from '../core/module'
import {body} from '../constants'

export class Messege extends Module {


  static TYPE = 'Messege'
  static TEXT = 'Вызвать сообщение'

  constructor() {
    super(Messege.TYPE, Messege.TEXT)
  }

  createMessege = () => {
    const messege = document.createElement('div')
    messege.className = 'text'
    messege.textContent = 'Данное сообщение пропадет через 5 секунд!'
    messege.style.fontSize = '15px'
    messege.style.color = '#ffffff'
    messege.style.fontVariant = 'small-caps'
    messege.style.backgroundColor = '#673ab7'
    messege.style.borderRadius = '5px'
    messege.style.width = '270px'
    messege.style.padding = '10px'
    messege.style.boxSizing = 'content-box'

    body.prepend(messege)

    setTimeout(function () {
      messege.remove()
    }, 5000)

    return  messege
  }

  showMessege = () => {
    body.append(this.createMessege())
  }

  trigger() {
    this.showMessege()
  }
}
