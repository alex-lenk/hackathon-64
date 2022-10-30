import {Menu} from './core/menu'
import {classOpen} from './constants'

export default class ContextMenu extends Menu {
  constructor(selector, settings) {
    super(selector)
    this.modules = settings.modules
  }

  open() {
    this.el.classList.add(classOpen)
  }

  close() {
    this.el.classList.remove(classOpen)
  }

  add(module) {
    this.el.innerHTML += module
  }

  purge() {
    const filteredElements = [].slice.call(this.el.parentNode.children).filter(child => {
      return child !== this.el
    })
    filteredElements.forEach(el => el.remove())
  }

  renderMenu() {
    this.modules = this.modules.map(Module => new Module)

    this.modules.forEach(instance => {
      const moduleElement = instance.toHTML()

      this.add(moduleElement)
    })
  }

  run() {
    this.renderMenu()

    this.el.addEventListener('click', ({target}) => {
      if (!target.classList.contains('menu-item')) return false

      this.purge()
      this.close()

      const clickedModuleInstance = this.modules.filter(moduleInstance => {
        return moduleInstance.type === target.dataset.type
      })[0]

      clickedModuleInstance.trigger()
    })

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      const {pageX, pageY} = event
      this.el.style.left = `${pageX}px`
      this.el.style.top = `${pageY}px`

      if (this.modules !== [] && this.el.classList.contains(classOpen)) {
        return false
      } else {
        this.open()
      }
    })
  }
}
