import './assets/styles.css'
import ContextMenu from './menu'
import {ShapeModule} from './modules/shape.module'

const menu = new ContextMenu('#menu', {
  modules: [
    ShapeModule,
  ]
})

menu.run()
