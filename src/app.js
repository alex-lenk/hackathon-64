import './assets/styles.css'
import ContextMenu from './menu'
import ShapeModule from './modules/shape.module'
import {BackgroundModule} from './modules/background.module'
import {MessegeModule} from './modules/messege.module'
import {ClicksModule} from './modules/clicks.module'
import {AudioModule} from './modules/audio.module'

const menu = new ContextMenu('#menu', {
  modules: [
    ShapeModule,
    BackgroundModule,
    MessegeModule,
    ClicksModule,
    AudioModule,
  ]
})

menu.run()
