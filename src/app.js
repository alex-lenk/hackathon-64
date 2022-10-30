import './assets/styles.css'
import ContextMenu from './menu'
import ShapeModule from './modules/shape.module'
import {BackgroundModule} from './modules/background.module'
import {MessageModule} from './modules/message.module'
import {ClicksModule} from './modules/clicks.module'

const menu = new ContextMenu('#menu', {
  modules: [
    ShapeModule,
    BackgroundModule,
    MessageModule,
    ClicksModule,
  ]
})

menu.run()
