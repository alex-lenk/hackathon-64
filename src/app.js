import './assets/styles.css'
import ContextMenu from './menu'
import { ShapeModule } from './modules/shape.module'
import { ClicksModule } from './modules/clicks.module'

const menu = new ContextMenu('#menu', {
  modules: [
    
    ClicksModule,
    ShapeModule,
  ]
})

menu.run()
