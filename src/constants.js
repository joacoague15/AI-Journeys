import presentationAudio from "./assets/sounds/presentation.mp3"
import classPresentationAudio from "./assets/sounds/classPresentation.mp3"
import entranceAudio from "./assets/sounds/entrance.mp3"
import songInicio from "./assets/sounds/songInicio.mp3"
import battleBackground from "./assets/sounds/battle_background.wav";
import boss_music from "./assets/sounds/boss_music.mp3";
import walkBackground from "./assets/sounds/walk_background.wav";
import footsteps from "./assets/sounds/footsteps.mp3"
import hoverOption from "./assets/sounds/hoverOption.mp3"
import sword from "./assets/sounds/sword.wav"
import fireSpell from "./assets/sounds/fire_spell.wav"
import lightingSpell from "./assets/sounds/lighting_spell.wav"
import meditationSound from "./assets/sounds/meditate.wav"
import block from "./assets/sounds/block.wav"
import miss from "./assets/sounds/miss.wav"
import warrior_presenting_herself from "./assets/sounds/warriorPresentingHerself.mp3"
import wizard_presenting_himself from "./assets/sounds/wizardPresentingHimself.mp3"
import paladin_presenting_himself from "./assets/sounds/paladinPresentingHimself.mp3"
import darkCave from "./assets/sounds/darkCave.mp3"
import miss1 from "./assets/sounds/miss1.mp3"
import miss2 from "./assets/sounds/miss2.mp3"
import miss3 from "./assets/sounds/miss3.mp3"
import miss4 from "./assets/sounds/miss4.mp3"
import { Howl } from 'howler';

export const playerAttackDuration = 500;
export const enemyAttackDuration = 1000;

export const bossStage = 50;

export const presentation = new Howl({
    src: [presentationAudio],
    html5: true,
    loop: false,
    volume: 1,
})

export const classPresentation = new Howl({
    src: [classPresentationAudio],
    html5: true,
    loop: false,
    volume: 1,
})

export const entrance = new Howl({
    src: [entranceAudio],
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

export const walking_music = new Howl({
    src: [walkBackground],
    html5: true,
    loop: true,
    volume: 1,
})

export const boss_battle = new Howl({
    src: [boss_music],
    html5: true,
    loop: true,
    volume: 1,
})

export const battle_music = new Howl({
    src: [battleBackground],
    html5: true,
    loop: true,
    volume: 1,
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
    volume: 0.5,
})

export const wizardPresentingHimself = new Howl({
    src: [wizard_presenting_himself],
    html5: true,
    loop: false,
    volume: 0.5,
})

const missing1 = new Howl({
    src: [miss1],
    html5: true,
    loop: false,
    volume: 0.5,
})

const missing2 = new Howl({
    src: [miss2],
    html5: true,
    loop: false,
    volume: 0.5,
})

const missing3 = new Howl({
    src: [miss3],
    html5: true,
    loop: false,
    volume: 0.5,
})

const missing4 = new Howl({
    src: [miss4],
    html5: true,
    loop: false,
    volume: 0.5,
})

export const paladinPresentingHimself = new Howl({
    src: [paladin_presenting_himself],
    html5: true,
    loop: false,
    volume: 0.5,
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

export const fire = new Howl({
    src: [fireSpell],
    html5: true,
    volume: 0.5,
})

export const lighting = new Howl({
    src: [lightingSpell],
    html5: true,
    volume: 0.5,
})

export const meditate = new Howl({
    src: [meditationSound],
    html5: true,
    volume: 1,
})

export const attackBlocked = new Howl({
    src: [block],
    html5: true,
    volume: 1,
})

export const attackMissed = new Howl({
    src: [miss],
    html5: true,
    volume: 1,
})

export const storyTexts = [
    "Our hero stands before the ominous entrance of the dungeon. Shadows dance and flicker at the edges of their vision, teasing the sinister darkness that lies just beyond the threshold."]

export const SoundFX = [hover, fire, lighting, attackSword, footstep, paladinPresentingHimself, warriorPresentingHerself, wizardPresentingHimself]

export const missing = [missing1, missing2, missing3, missing4]
