import welcomeVoice from "./assets/sounds/welcomeToMyPlace.wav"
import songInicio from "./assets/sounds/songInicio.mp3"
import footsteps from "./assets/sounds/footsteps.mp3"
import hoverOption from "./assets/sounds/hoverOption.mp3"
import sword from "./assets/sounds/sword.wav"
import spell from "./assets/sounds/spell.wav"
import darkCave from "./assets/sounds/darkCave.mp3"
import { Howl } from 'howler';

export const playerAttackDuration = 500;
export const enemyAttackDuration = 1000;

export const welcome = new Howl({
    src: [welcomeVoice],
    html5: true,
    loop: false,
    volume: 1,
})

export const sound = new Howl({
    src: [songInicio],
    html5: true,
    loop: true,
    volume: 0.5,
})

export const cave = new Howl({
    src: [darkCave],
    html5: true,
    loop: true,
    volume: 0.5
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

export const attackSword = new Howl({
    src: [sword],
    html5: true,
    volume: 0.7,
})

export const attackSpell = new Howl({
    src: [spell],
    html5: true,
    volume: 0.7,
})