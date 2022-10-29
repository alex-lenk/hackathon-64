import './assets/styles.css'
import ContextMenu from './menu'
import ShapeModule from './modules/shape.module'
import {BackgroundModule} from './modules/background.module'

const menu = new ContextMenu('#menu', {
  modules: [
    ShapeModule,
    BackgroundModule,
  ]
})

menu.run()
