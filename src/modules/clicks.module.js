import {Module} from '../core/module'
import {body} from '../constants'


export class ClicksModule extends Module {
 
    static TYPE = 'ClicksModule'
    static TEXT = 'Считать клики'
    
    constructor() {
        super(ClicksModule.TYPE, ClicksModule.TEXT)
    }

    timeToFinish = () => {
        const time = Number(prompt('Сколько секунд Вы хотите, чтобы я считал клики?'))
        return time
    }

    createHTMLElement = () => {
        const timeEl = document.createElement('h2')
        timeEl.className ='time'
        timeEl.style.userSelect = 'none'
        timeEl.innerHTML += `<br>`

        const scoreEl = document.createElement('h1')
        scoreEl.className ='score'
        scoreEl.style.userSelect = 'none'
        body.append(timeEl, scoreEl)
        return timeEl
    }

    trigger = () => {
        let time = this.timeToFinish()
        const stopTime = time
        // this.createHTMLElement()
        const timeCount = setInterval( () => {
            time = this.decreaseTime(time, score)
        }, 1000)
        setTimeout(() => {
            clearInterval(timeCount)
        }, (stopTime + 1) * 1000)
        const timeEl = this.createHTMLElement()
        timeEl.textContent = `Время пошло:`
        let score = 0
        body.onclick = () => {
            this.setScore(score)
            return score += 1
        }
    }
    decreaseTime = (time, score) => {
        if (time === 0) {
            
            this.finishGame(time, score)
        } else {
            let current = --time
            if (current < 10) {
                current = `0${current + 1}`
            }
            this.setTime(current)
        }
        return time
    }

    setTime = (value) => {
        const timeEl = document.querySelector('.time')
        if (timeEl) timeEl.textContent = `00:${value}` //, Счет: ${score}`
    }

    setScore = (value) => {
        const scoreEl = document.querySelector('.score')
        if (scoreEl) scoreEl.textContent = `Счет: ${value}`
    }

    finishGame = (time, score) => {
        this.setTime(time)
        const timeEl = document.querySelector('.time')
        timeEl.innerHTML = ''
        const scoreEl = document.querySelector('.score')
        scoreEl.remove()
        timeEl.remove()
        
        setTimeout(() => {
            alert(`Итоговый счет: ${score - 1}`)
        }, 1) 
    }
}