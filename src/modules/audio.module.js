import {Module} from '../core/module'
import random from '../utils/random'

export class AudioModule extends Module {
  #sounds

  constructor() {
    super('AudioModule', 'Воспроизвести звук')      
    this.#sounds = [
      'https://www.pacdv.com/sounds/domestic_sound_effects/bathtub-lock-1.mp3',
      `https://www.pacdv.com/sounds/domestic_sound_effects/microwave-oven-timer-1.wav`,
      `https://www.pacdv.com/sounds/interface_sound_effects/sound2.mp3`,
      `https://www.pacdv.com/sounds/interface_sound_effects/sound18.mp3`,
      `https://www.pacdv.com/sounds/machine_sound_effects/electronic_stapler.wav`,
      `https://www.pacdv.com/sounds/miscellaneous_sounds/bottle_pop_3.wav`,
      `https://www.pacdv.com/sounds/miscellaneous_sounds/knocking-1.wav`,
    ]
  }

    #getRandomSound = () => {
      const index = random(0, this.#sounds.length - 1)
      return this.#sounds[index]
    }
  
    trigger() {
      const audio = new Audio(this.#getRandomSound())
      audio.play()
    }
  }
