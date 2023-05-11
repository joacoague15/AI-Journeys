import React, { useState, useEffect } from "react";
import './assets/base.css'
import CharacterCreationHandler from "./character_creation/CharacterCreationHandler";
import { resolverIDB } from "./IndexedDB/registerDB.js"
import CharacterStatus from "./CharacterStatus";
import SituationHandler from "./situations_system/SituationHandler";
import ExperienceIndicator from "./components/ExperienceIndicator";
import DeadScreen from "./components/DeadScreen";
import Initial from "./Menu";
import StoryText from "./components/StoryText";
import { SoundFX, cave, sound, storyTexts } from "./constants";
import AudioController from "./components/AudioController";
import LevelUpModal from "./components/LevelUpModal";

function App() {
    const [text, setText] = useState(storyTexts[0]);
    const [characterName, setCharacterName] = useState(''); // This is where we will store the character name
    const [characterClass, setCharacterClass] = useState(''); // This is where we will store the character class
    const [characterStatuses, setCharacterStatuses] = useState({
        health: 0,
        maxHealth: 0,
        attack: 0,
        mana: 0,
        maxMana: 0,
    });
    const [characterCreated, setCharacterCreated] = useState(false);
    const [situation, setSituation] = useState('walking');
    const [points, setPoints] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [experience, setExperience] = useState(1);
    const [newGame, setNewGame] = useState(true)
    const [muted, setMuted] = useState(false)
    const [FXmuted, setFXMuted] = useState(false)
    const [initialModal, setInitialModal] = useState(true)
    const [stages, setStages] = useState(1)
    const [changeSound, setChangeSound] = useState(false)
    const changeRangeVolume = (e) => {
        sound.volume(e.target.value / 100)
        cave.volume(e.target.value / 100)
        sound.mute(false)
        cave.mute(false)
        if (e.target.value === '0') {
            return setMuted(true)
        }
        setMuted(false)
    }

    const mutedFX = () => {
        SoundFX.forEach(x => {
            x.mute(!FXmuted)
        });
        setFXMuted(!FXmuted)
    }

    const changeVolume = () => {
        if (muted) {
            if (!changeSound) sound.mute(false)
            else cave.mute(false)
        }
        else {
            if (!changeSound) sound.mute(true)
            else cave.mute(true)
        }

        setMuted(!muted)
    }

    useEffect(() => {
        new Promise(resolverIDB)
    }, [])

    useEffect(() => {
        sound.play()
    }, [])

    const audioPlayGameSound = () => {
        const audio = document.getElementById('backSound')
        setTimeout(() => {
            audio?.play()
        }, 1)
    }


    if (newGame) return <Initial setCharacterCreated={setCharacterCreated} setNewGame={setNewGame} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} setInitialModal={setInitialModal} initialModal={initialModal} />

    if (!characterCreated)
        return <CharacterCreationHandler userClass={characterClass} setUserClass={setCharacterClass} userName={characterName} setUserName={setCharacterName} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />


    if (characterStatuses.health <= 0) {
        return <DeadScreen />
    }

    const healPerRoom = () => {
        if (characterStatuses.health < characterStatuses.maxHealth) setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health + 20 })
        if (characterStatuses.mana < characterStatuses.maxMana) setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + 1 })
    }

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: 12, position: 'relative' }} className="App">
                <CharacterStatus characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            </div>
            <StoryText text={text} />
            <SituationHandler stages={stages} setStages={setStages} setText={setText} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} situation={situation} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} healPerRoom={healPerRoom} setChangeSound={setChangeSound} muted={muted} characterClass={characterClass} />
            <div style={{ position: "absolute", top: 10, right: 140, width: "20%", zIndex: 10 }}>
                <p style={{ color: "white", fontSize: 28, marginTop: "20ppx" }}>Stage {stages}</p>
                <ExperienceIndicator experience={experience} setPoints={setPoints} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
            </div>
            {points > 0 && <div className="animate__animated animate__fadeIn animate__faster" style={{ position: "absolute", top: 0, width: "100%", height: "100%", zIndex: 3 }}>
                <LevelUpModal points={points} setPoints={setPoints} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            </div>}
        </div>
    )
}

export default App;
