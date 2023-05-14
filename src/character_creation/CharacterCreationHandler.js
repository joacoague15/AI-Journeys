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

const CharacterCreationHandler = ({ userClass, setUserClass, userName, setUserName, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated, audioPlayGameSound, changeRangeVolume, mutedFX, changeVolume, muted, FXmuted, initialModal }) => {
    const [isContinueBtnDisabled, setIsContinueBtnDisabled] = useState(true);

    useEffect(() => {
        if (userName.length < 4 || userClass === "")
            setIsContinueBtnDisabled(true);
        else
            setIsContinueBtnDisabled(false);
    }, [userName, userClass, points]);

    const indexedDBInput = () => {
        IDBTransactionAddCharacter({ Name: userName, Class: userClass })
        addStatusesIndexedDB()
        setCharacterCreated(true)
    }

    const addStatusesIndexedDB = () => {
        IDBTransactionAddStatuses({
            health: { ...characterStatuses }.health,
            attack: { ...characterStatuses }.attack,
            mana: { ...characterStatuses }.mana,
            dodge: { ...characterStatuses }.dodge,
            critChance: { ...characterStatuses }.critChance,
            critDmg: { ...characterStatuses }.critDmg
        })
    }

    const handleDescription = () => {
        if (userClass === "warrior") {
            return " A mighty champion clad in unyielding armor, the Warrior dominates the battlefield with raw strength and unbreakable resolve. They wield deadly weapons and protect their allies from harm, embodying the essence of a fearless warrior."
        }

        if (userClass === "wizard") {
            return "A master of arcane secrets, the Wizard wields devastating spells that can alter reality itself. With unrivaled knowledge and sheer power, they unleash cataclysmic forces from afar, obliterating foes and bending the elements to their will."
        }

        if (userClass === "paladin") {
            return "A divine crusader merging steel and spell, the Paladin stands as a beacon of justice and righteousness. Clad in hallowed armor, they smite evil with divine wrath and shield their comrades with divine grace, embodying the perfect union of might and magic."
        }
    }

    const onHandleContinue = () => {
        indexedDBInput();
        classPresentation.stop();
    }

    return (
        <div style={{ display: "flex", width: "30%", margin: "auto", flexDirection: "column" }}>
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <NameSelection setUserName={setUserName} />
            <ClassSelection setUserClass={setUserClass} />
            <div style={{ display: "flex", margin: 20, flexDirection: "row" }}>
                <div style={{ display: "flex", flex: 2, flexDirection: "column", lineHeight: 2, marginRight: 5 }}>
                    <p style={{ color: "white", fontSize: 24 }}>{userName}</p>
                    <p style={{ color: "white", fontSize: 18 }}>{handleDescription()}</p>
                </div>
                <div style={{ display: "flex", flex: 2 }}>
                    <video src={warrior_presentation} style={{ width: "100%", objectFit: "cover", borderRadius: 180, display: userClass === "warrior" ? "flex" : "none" }} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                    <video src={wizard_presentation} style={{ width: "100%", objectFit: "cover", borderRadius: 180, display: userClass === "wizard" ? "flex" : "none" }} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                    <video src={paladin_presentation} style={{ width: "100%", objectFit: "cover", borderRadius: 180, display: userClass === "paladin" ? "flex" : "none" }} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
            </div>
            <FirstStatusesAssignment userClass={userClass} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                <button disabled={isContinueBtnDisabled} style={{ color: isContinueBtnDisabled ? "grey" : 'white', fontSize: 32, border: "1px solid white", padding: "8px 16px" }} onClick={onHandleContinue}>Continue</button>
            </div>
        </div>
    )
}

export default CharacterCreationHandler;