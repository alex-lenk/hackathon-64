import {Module} from '../core/module'
import {body} from '../constants'

export class ClicksModule extends Module {
    constructor() {
        super('ClicksModule', 'Считать клики')
        this.timeEl
        this.scoreEl
    }

    trigger = () => {
        let time = this.#timeToFinish()
        const stopTime = time
        const timeHTMLEl = this.#createHTMLElement()
        timeHTMLEl.textContent = 'Время пошло!'
        this.scoreEl = document.querySelector('.score')
        this.timeEl = document.querySelector('.time')
        let score = 0
        const timeCount = setInterval( () => {
            time = this.#decreaseTime(time, score)
        }, 1000)
        
        setTimeout(() => {
            clearInterval(timeCount)
        }, (stopTime + 1) * 1000)
        
        body.onclick = () => {
            this.#setScore(score)
            return score += 1
        }
    }

    #timeToFinish = () => {
        return Number(prompt('Сколько секунд Вы хотите, чтобы я считал клики?'))
    }

    #createHTMLElement = () => {
        const createTimeEl = document.createElement('p')
        createTimeEl.className = 'time'
        createTimeEl.style.userSelect = 'none'
        createTimeEl.innerHTML += '<br>'

        const createScoreEl = document.createElement('p')
        createScoreEl.className ='score'
        createScoreEl.style.userSelect = 'none'
        body.append(createTimeEl, createScoreEl)
        return createTimeEl
    }

    #decreaseTime = (time, score) => {
        if (time === 0) {
            this.#finishGame(score)
        } else {
            let current = --time

            if (current < 9) {
                current = `0${current + 1}`
            } else {
                current = current + 1
            }
            this.#setTime(current)
            
        }
        return time
    }

    #setTime = (value) => {
        if (this.timeEl) this.timeEl.textContent = `00:${value}`
    }

    #setScore = (value) => {
        if (this.scoreEl) this.scoreEl.textContent = `Счет: ${value}`
    }

    #finishGame = (result) => {
        this.scoreEl.remove()
        this.timeEl.remove()
        
        setTimeout(() => {
            alert(`Итоговый счет: ${result - 1}`)
        }, 50) 
    }
}