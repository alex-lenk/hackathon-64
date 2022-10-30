import {Module} from '../core/module'
import getRandomRGBColor from '../utils/getRandomRGBColor'
import {body} from '../constants'

export default class BackgroundModule extends Module {
  constructor() {
    super('BackgroundModule', 'Поменять цвет')
  }

  trigger() {
    body.style.background = `rgb(${getRandomRGBColor()})`
  }
}
