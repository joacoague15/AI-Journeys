import ClassSelection from "./ClassSelection";
import NameSelection from "./NameSelection";
import FirstStatusesAssignment from "./FirstStatusesAssignment";
import { useEffect, useState } from "react";
import warrior_presentation from "../assets/videos/warrior_presentation.mp4";
import wizard_presentation from "../assets/videos/wizard_presentation.mp4";
import paladin_presentation from "../assets/videos/paladin_presentation.mp4";
import AudioController from "../components/AudioController";
import { IDBTransactionAddStatuses, IDBTransactionAddCharacter } from "../IndexedDB/CRUD";
import { classPresentation } from "../constants";
import './CharacterCreationHandler.css';

const CharacterCreationHandler = ({ characterClass, setUserClass, userName, setUserName, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated, audioPlayGameSound, changeRangeVolume, mutedFX, changeVolume, muted, FXmuted, initialModal }) => {
    const [isContinueBtnDisabled, setIsContinueBtnDisabled] = useState(true);

    useEffect(() => {
        if (userName.length < 4 || characterClass === "")
            setIsContinueBtnDisabled(true);
        else
            setIsContinueBtnDisabled(false);
    }, [userName, characterClass, points]);

    const indexedDBInput = () => {
        IDBTransactionAddCharacter({ Name: userName, Class: characterClass })
        addStatusesIndexedDB()
        setCharacterCreated(true)
    }

    const addStatusesIndexedDB = () => {
        IDBTransactionAddStatuses({
            health: { ...characterStatuses }.health,
            attackMin: { ...characterStatuses }.attackMin,
            attackMax: {...characterStatuses }.attackMax,
            mana: { ...characterStatuses }.mana,
            dodge: { ...characterStatuses }.dodge,
            critChance: { ...characterStatuses }.critChance,
            critDmg: { ...characterStatuses }.critDmg
        })
    }

    const onHandleContinue = () => {
        indexedDBInput();
        classPresentation.stop();
    }

    return (
        <div id="character-creation-container">
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <NameSelection setUserName={setUserName} />
            <ClassSelection setUserClass={setUserClass} />
            <div id="character-info-container">
                <div id="assignment-container">
                    <p id="user-name-input">{userName}</p>
                    <FirstStatusesAssignment characterClass={characterClass} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} />
                </div>
                <div id="videos-container">
                    <video src={warrior_presentation} className={characterClass === "warrior" ? "class-video-selected" : "class-video-not-selected"} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                    <video src={wizard_presentation} className={characterClass === "wizard" ? "class-video-selected" : "class-video-not-selected"} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                    <video src={paladin_presentation} className={characterClass === "paladin" ? "class-video-selected" : "class-video-not-selected"} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
            </div>
            <div id="continue-button-container">
                <button disabled={isContinueBtnDisabled} style={{ color: isContinueBtnDisabled ? "grey" : 'white', fontSize: 32, border: "1px solid white", padding: "8px 16px" }} onClick={onHandleContinue}>Continue</button>
            </div>
        </div>
    )
}

export default CharacterCreationHandler;
