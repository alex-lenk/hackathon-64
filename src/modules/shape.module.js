import {Module} from '../core/module'
import random from '../utils/random'
import {body} from '../constants'

export class ShapeModule extends Module {
  #colors

  static TYPE = 'ShapeModule'
  static TEXT = 'Создать фигуру'

  constructor() {
    super(ShapeModule.TYPE, ShapeModule.TEXT)
    this.#colors = [
      '#4652FF', '#616FFF', '#A7B8FF', '#1D00B0', '#342EDD', '#ECF0FF', '#FC612E', '#FF37BB', '#8CCA08', '#2FD1BE',
      '#57D08E', '#956CED', '#FFCA2A', '#282828', '#7C7B7B', '#747474',
    ]
  }

  getRandomColor = () => {
    const index = random(0, this.#colors.length - 1)
    return this.#colors[index]
  }

  createNewShape = () => {
    const newShape = document.createElement('div')
    newShape.classList.add('petal', 'shape')
    newShape.display = 'block'
    newShape.style.borderRadius = '50% / 70% 10% 50%'

    const widthShape = random(50, 260)
    const heightShape = widthShape * 1.5
    const top = random(heightShape, window.innerHeight - (heightShape + 50))
    const left = random(widthShape, window.innerWidth - (widthShape + 50))

    newShape.style.marginTop = `${top}px`
    newShape.style.marginLeft = `${left}px`
    newShape.style.width = `${widthShape}px`
    newShape.style.height = `${heightShape}px`
    newShape.style.backgroundColor = this.getRandomColor()

    return newShape
  }

  displayNewShape = () => {
    body.append(this.createNewShape())
  }

  trigger() {
    const prevShape = document.querySelector('.shape')

    if (!prevShape) {
      this.displayNewShape()
      return false
    }

    prevShape.remove()
  }
}
