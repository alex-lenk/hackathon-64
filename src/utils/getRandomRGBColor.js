import random from './random'

export default function getRandomRGBColor () {
  return `${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}`
}
