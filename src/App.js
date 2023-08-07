import React, {useState, useEffect, createContext} from "react";
import './assets/base.css'
import CharacterCreationHandler from "./character_creation/CharacterCreationHandler";
import { resolverIDB } from "./IndexedDB/registerDB.js"
import CharacterStatus from "./CharacterStatus";
import SituationHandler from "./situations_system/SituationHandler";
import ExperienceIndicator from "./components/ExperienceIndicator";
import DeadScreen from "./components/DeadScreen";
import Initial from "./Menu";
import StoryText from "./components/StoryText";
import {SoundFX, cave, sound, storyTexts, bossStage} from "./constants";
import AudioController from "./components/AudioController";
import LevelUpModal from "./components/LevelUpModal";
import LastAction from "./components/LastAction";
import { IDBDeleteDB } from "./IndexedDB/CRUD";
import "./App.css";
import VictoryContext from './contexts/VictoryContext';
import VictoryScreen from "./components/VictoryScreen";

function App() {
    const [text, setText] = useState(storyTexts[0]);
    const [lastAction, setLastAction] = useState('');
    const [characterName, setCharacterName] = useState(''); // This is where we will store the character name
    const [characterClass, setCharacterClass] = useState(''); // This is where we will store the character class
    const [characterStatuses, setCharacterStatuses] = useState({
        health: 0,
        attackMin: 0,
        attackMax: 0,
        mana: 0,
        dodge: 0,
        critChance: 0,
        critDmg: 0,
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

    const [victory, setVictory] = React.useState(false);

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
        return <CharacterCreationHandler characterClass={characterClass} setUserClass={setCharacterClass} userName={characterName} setUserName={setCharacterName} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />

    if (victory) {
        return <VictoryScreen />
    }

    if (characterStatuses.health <= 0) {
        IDBDeleteDB()
        return <DeadScreen />
    }

    return (
        <div id="id-container">
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <div className="App">
                <CharacterStatus characterClass={characterClass} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            </div>
            <StoryText text={text} />
            <LastAction lastAction={lastAction} />
            <VictoryContext.Provider value={[ victory, setVictory ]}>
                <SituationHandler stages={stages} setStages={setStages} setText={setText} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} situation={situation} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} setChangeSound={setChangeSound} muted={muted} characterClass={characterClass} setLastAction={setLastAction} />
            </VictoryContext.Provider>
                <div id="stage-container" >
                <h3>STAGE {stages} / {bossStage}</h3>
            </div>
            <div id="experience-indicator-container">
                <ExperienceIndicator experience={experience} setPoints={setPoints} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
            </div>
            {points > 0 && <LevelUpModal userClass={characterClass} points={points} setPoints={setPoints} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />}
        </div>
    )
}

export default App;
