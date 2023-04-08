import songInicio from "./assets/sounds/songInicio.mp3"
import footsteps from "./footsteps.mp3"
import hoverOption from "./assets/sounds/hoverOption.mp3"
import { Howl } from 'howler';

export const playerAttackDuration = 500;
export const enemyAttackDuration = 1000;
export const sound = new Howl({
    src: [songInicio],
    html5: true,
    loop: true,
    volume: 1,
})

export const hover = new Howl({
    src: [hoverOption],
    html5: true,
    volume: 1,
})

export const footstep = new Howl({
    src: [footsteps],
    html5: true,
    volume: 0.7,
})