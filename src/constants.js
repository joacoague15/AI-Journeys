import welcomeVoice from "./assets/sounds/welcomeToMyPlace.wav"
import songInicio from "./assets/sounds/songInicio.mp3"
import footsteps from "./assets/sounds/footsteps.mp3"
import hoverOption from "./assets/sounds/hoverOption.mp3"
import sword from "./assets/sounds/sword.wav"
import spell from "./assets/sounds/spell.wav"
import warrior_presenting_herself from "./assets/sounds/warriorPresentingHerself.mp3"
import wizard_presenting_himself from "./assets/sounds/wizardPresentingHimself.mp3"
import paladin_presenting_himself from "./assets/sounds/paladinPresentingHimself.mp3"
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
    volume: 0.4,
})

export const cave = new Howl({
    src: [darkCave],
    html5: true,
    loop: true,
    volume: 0.1
})

export const warriorPresentingHerself = new Howl({
    src: [warrior_presenting_herself],
    html5: true,
    loop: false,
    volume: 0.6,
})

export const wizardPresentingHimself = new Howl({
    src: [wizard_presenting_himself],
    html5: true,
    loop: false,
    volume: 0.6,
})

export const paladinPresentingHimself = new Howl({
    src: [paladin_presenting_himself],
    html5: true,
    loop: false,
    volume: 0.6,
})

export const hover = new Howl({
    src: [hoverOption],
    html5: true,
    volume: 1,
})

export const footstep = new Howl({
    src: [footsteps],
    html5: true,
    volume: 0.8,
})

export const attackSword = new Howl({
    src: [sword],
    html5: true,
    volume: 0.7,
})

export const attackSpell = new Howl({
    src: [spell],
    html5: true,
    volume: 0.5,
})

export const SoundFX = [hover, attackSpell, attackSword, footstep, paladinPresentingHimself, warriorPresentingHerself, wizardPresentingHimself]
