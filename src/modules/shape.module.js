import {Module} from '../core/module'
import random from '../utils/random'
import getRandomRGBColor from '../utils/getRandomRGBColor'
import {body} from '../constants'
import '../assets/shape.css'

export default class ShapeModule extends Module {
  constructor() {
    super('ShapeModule', 'Создать фигуру')
  }

  trigger() {
    const prevShape = document.querySelector('.shape')

    if (!prevShape) {
      body.append(this.#createShape())
      return false
    }

    prevShape.remove()
  }

  #createShape = () => {
    const shapeInstance = document.createElement('div')
    shapeInstance.classList.add('shape')

    const width = random(50, 260)
    const height = random(30, 290)
    const coordinates = this.#getCoordinates(width)
    const radius = `${this.#getRandomPercent()}% ${this.#getRandomPercent()}% ${this.#getRandomPercent()}% ${this.#getRandomPercent()}%`

    shapeInstance.style.cssText = `
    top: ${coordinates.top}px;
    left: ${coordinates.left}px;
    width: ${width}px;
    height: ${height}px;
    background-color: rgb(${getRandomRGBColor()});
    border-radius: ${radius}`

    return shapeInstance
  }

  #getCoordinates = shapeSize => {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    return {
      top: random(0, clientHeight - shapeSize),
      left: random(0, clientWidth - shapeSize),
    }
  }

  #getRandomPercent = () => {
    return `${random(10, 90)}`
  }
}
