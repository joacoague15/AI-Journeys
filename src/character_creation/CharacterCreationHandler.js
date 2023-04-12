import ClassSelection from "./ClassSelection";
import NameSelection from "./NameSelection";
import FirstAttributesAssignment from "./FirstAttributesAssignment";
import CharacterStatus from "../CharacterStatus";
import {useState} from "react";

const CharacterCreationHandler = ({userClass, setUserClass, userName, setUserName, characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated, audioPlayGameSound}) => {
        const [firstCreationStageFinished, setFirstCreationStageFinished] = useState(false);

        if (!firstCreationStageFinished) {
            return (
                <div style={{ display: "flex", width: "30%", margin: "auto", flexDirection: "column" }}>
                    <NameSelection setUserName={setUserName} />
                    <ClassSelection userName={userName} userClass={userClass} setUserClass={setUserClass} />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                        <button style={{ color: "white", fontSize: 32, border: "1px solid white", padding: "8px 16px" }} onClick={() => setFirstCreationStageFinished(true)}>Continue</button>
                    </div>
                </div>
            )
        }

        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
                <CharacterStatus characterStatuses={characterStatuses} />
                <FirstAttributesAssignment characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} />
            </div>
        )
}

export default CharacterCreationHandler;