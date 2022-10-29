import './assets/styles.css'
import ContextMenu from './menu'
import {ShapeModule} from './modules/shape.module'
import {MessegeModule} from './modules/messege.module'

const menu = new ContextMenu('#menu', {
  modules: [
    ShapeModule,
    MessegeModule
  ]
})

menu.run()
