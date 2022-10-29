import {Menu} from './core/menu'
import {classOpen} from './constants'

export default class ContextMenu extends Menu {
  #modules
  #pointsMenu

  constructor(selector, settings) {
    super(selector)
    this.#modules = settings.modules
    this.#pointsMenu = []
  }

  #open() {
    this.el.classList.add(classOpen)
  }

  close() {
    this.el.classList.remove(classOpen)
  }

  #add(module) {
    this.el.innerHTML = module
  }

  #purge() {
    const filteredElements = Array.from(this.el.parentNode.children).filter(child => {
      return child !== this.el
    })
    filteredElements.forEach(el => el.remove())
  }

  #renderMenu() {
    this.#modules = this.#modules.map(module => new module)

    this.#modules.forEach(instance => {
      const moduleEl = instance.toHTML()
      this.#pointsMenu.push(moduleEl)
      return this.#add(this.#pointsMenu.join(''))
    })
  }

  run() {
    this.#renderMenu()

    this.el.addEventListener('click', ({target}) => {
      if (!target.classList.contains('menu-item')) return false

      this.#purge()
      this.close()

      const clickModule = this.#modules.filter(instance => {
        return instance.type === target.dataset.type
      })[0]

      clickModule.trigger()
    })

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      const {pageX, pageY} = event
      this.el.style.left = `${pageX}px`
      this.el.style.top = `${pageY}px`

      if (this.#modules !== [] && this.el.classList.contains(classOpen)) {
        return false
      } else {
        this.#open()
      }
    })
  }
}
