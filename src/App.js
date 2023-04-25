import React, { useState, useEffect } from "react";
import './assets/base.css'
import CharacterCreationHandler from "./character_creation/CharacterCreationHandler";
import { resolverIDB } from "./IndexedDB/registerDB.js"
import CharacterStatus from "./CharacterStatus";
import SituationHandler from "./situations_system/SituationHandler";
import ExperienceIndicator from "./components/ExperienceIndicator";
import DeadScreen from "./components/DeadScreen";
import Initial from "./Menu";
import { textExamples } from "./HardCodedData";
import StoryText from "./components/StoryText";
import { SoundFX, cave, sound } from "./constants";
import AudioController from "./components/AudioController";
import LevelUpModal from "./components/LevelUpModal";

function App() {
    const [chatGPTresponse, setChatGPTresponse] = useState(''); // This is where we will store all the chatGPT responses
    const [characterName, setCharacterName] = useState(''); // This is where we will store the character name
    const [characterClass, setCharacterClass] = useState(''); // This is where we will store the character class
    const [characterAttributes, setCharacterAttributes] = useState({
        strength: 1,
        constitution: 1,
        intelligence: 1,
    });
    const [characterStatuses, setCharacterStatuses] = useState({
        health: 10,
        maxHealth: 10,
        attack: 1,
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
        if (situation === 'walking')
            setChatGPTresponse(textExamples.walkingText[Math.floor(Math.random() * textExamples.walkingText.length)]);
        if (situation === 'combat')
            setChatGPTresponse(textExamples.fightText[Math.floor(Math.random() * textExamples.fightText.length)]);
        if (situation === 'loot')
            setChatGPTresponse(textExamples.lootText[Math.floor(Math.random() * textExamples.lootText.length)]);
    }, [situation])

    const audioPlayGameSound = () => {
        const audio = document.getElementById('backSound')
        setTimeout(() => {
            audio?.play()
        }, 1)
    }

    if (newGame) return <Initial setCharacterCreated={setCharacterCreated} setNewGame={setNewGame} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} setInitialModal={setInitialModal} initialModal={initialModal} />

    if (!characterCreated)
        return <CharacterCreationHandler userClass={characterClass} setUserClass={setCharacterClass} userName={characterName} setUserName={setCharacterName} setCharacterCreated={setCharacterCreated} characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />

    if (characterStatuses.health <= 0) {
        return <DeadScreen />
    }

    const healPerRoom = () => {
        if (characterStatuses.health < characterStatuses.maxHealth) setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health + 1 })
        if (characterStatuses.mana < characterStatuses.maxMana) setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + 1 })
    }

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }} className="App">
                <CharacterStatus characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            </div>
            <StoryText chatGPTresponse={chatGPTresponse} />
            <SituationHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} situation={situation} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} healPerRoom={healPerRoom} setChangeSound={setChangeSound} muted={muted} />
            <div style={{ position: "absolute", top: 10, right: 140, width: "20%" }}>
                <ExperienceIndicator experience={experience} setPoints={setPoints} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
            </div>
            {points > 0 && <div className="animate__animated animate__fadeIn animate__faster" style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 3 }}>
                <LevelUpModal points={points} setPoints={setPoints} characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} />}
            </div>}
        </div>
    )
}

export default App;
