import './assets/styles.css'
import ContextMenu from './menu'
import ShapeModule from './modules/shape.module'
import {BackgroundModule} from './modules/background.module'
import {MessegeModule} from './modules/messege.module'

const menu = new ContextMenu('#menu', {
  modules: [
    ShapeModule,
    BackgroundModule,
    MessegeModule
  ]
})

menu.run()
