import {Module} from '../core/module'
import {body} from '../constants'
import minesweeper from '../libs/minesweeper'
import '../assets/minesweeper.css'

export default class MinesweeperModule extends Module {
  constructor() {
    super('MinesweeperModule', 'Поиграть в сапёра')
  }

  #insertDom = () => {
    const HTML = `
<div class="col-left">
  <div class="settings">
    <label for="boardSize">Размер поля:</label>
    <input id="boardSize" type="range" value="10" min="4" max="20">
    <fieldset>
      <input type="radio" id="easy" name="difficulty" value="0.1" class="difficulty">
      <label for="easy">Легко</label>
      <input type="radio" id="normal" name="difficulty" value="0.2" class="difficulty" checked>
      <label for="normal">Нормально</label>
      <input type="radio" id="hard" name="difficulty" value="0.4" class="difficulty">
      <label for="hard">Сложно</label>
    </fieldset>
  </div>
</div>
<div class="col-right">
  <button class="minesweeper-btn">Новая игра</button>
</div>
<div class="board-wrap">
  <div class="board"></div>
</div>
<div class="endscreen"></div>
    `

    body.insertAdjacentHTML('beforebegin', HTML)
  }

  trigger() {
    this.#insertDom()
    minesweeper()
  }
}
