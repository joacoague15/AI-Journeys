import welcomeVoice from "./assets/sounds/welcomeToMyPlace.wav"
import songInicio from "./assets/sounds/songInicio.mp3"
import footsteps from "./assets/sounds/footsteps.mp3"
import hoverOption from "./assets/sounds/hoverOption.mp3"
import sword from "./assets/sounds/sword.wav"
import spell from "./assets/sounds/spell.wav"
import warrior_selected from "./assets/sounds/warrior_selected.wav"
import wizard_selected from "./assets/sounds/wizard_selected.wav"
import paladin_selected from "./assets/sounds/paladin_selected.wav"

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
    volume: 1,
})

export const warriorSelected = new Howl({
    src: [warrior_selected],
    html5: true,
    loop: false,
    volume: 1,
})

export const wizardSelected = new Howl({
    src: [wizard_selected],
    html5: true,
    loop: false,
    volume: 1,
})

export const paladinSelected = new Howl({
    src: [paladin_selected],
    html5: true,
    loop: false,
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