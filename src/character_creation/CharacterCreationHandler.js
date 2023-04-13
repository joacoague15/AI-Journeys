import ClassSelection from "./ClassSelection";
import NameSelection from "./NameSelection";
import FirstAttributesAssignment from "./FirstAttributesAssignment";
import CharacterStatus from "../CharacterStatus";
import {useEffect, useState} from "react";

const CharacterCreationHandler = ({userClass, setUserClass, userName, setUserName, characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated, audioPlayGameSound}) => {
    const [isContinueBtnDisabled, setIsContinueBtnDisabled] = useState(true);

    useEffect(() => {
        if (userName.length < 4 || userClass === "" || points > 0)
            setIsContinueBtnDisabled(true);
        else
            setIsContinueBtnDisabled(false);
    }, [userName, userClass, points]);

    return (
                <div style={{ display: "flex", width: "30%", margin: "auto", flexDirection: "column" }}>
                    <NameSelection setUserName={setUserName} />
                    <ClassSelection userName={userName} userClass={userClass} setUserClass={setUserClass} />
                    <FirstAttributesAssignment characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} />
                    <CharacterStatus characterStatuses={characterStatuses} />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                        <button disabled={isContinueBtnDisabled} style={{ color: isContinueBtnDisabled ? "grey" : 'white', fontSize: 32, border: "1px solid white", padding: "8px 16px" }} onClick={() => console.log("Continue")}>Continue</button>
                    </div>
                </div>
            )
}

export default CharacterCreationHandler;