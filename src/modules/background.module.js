import {Module} from '../core/module'
import random from '../utils/random'
import {body} from '../constants'

export class BackgroundModule extends Module {
  #colors

  constructor() {
    super('BackgroundModule', 'Поменять цвет')
    this.#colors = [
      '#4652FF', '#616FFF', '#A7B8FF', '#1D00B0', '#342EDD', '#ECF0FF', '#FC612E', '#FF37BB', '#8CCA08', '#2FD1BE',
      '#57D08E', '#956CED', '#FFCA2A', '#282828', '#7C7B7B', '#747474',
    ]
  }

  #getRandomColor = () => {
    const index = random(0, this.#colors.length - 1)
    return this.#colors[index]
  }

  trigger() {
    body.style.background = this.#getRandomColor()
  }
}
