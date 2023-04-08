import ClassSelection from "./ClassSelection";
import NameSelection from "./NameSelection";
import FirstAttributesAssignment from "./FirstAttributesAssignment";
import CharacterStatus from "../CharacterStatus";

const CharacterCreationHandler = ({ userClass, setUserClass, userName, setUserName, characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated, audioPlayGameSound }) => {

    if (!userName) {
        return <NameSelection setUserName={setUserName} />
    }
    else if (!userClass) {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
                <ClassSelection userName={userName} userClass={userClass} setUserClass={setUserClass} />
            </div>
        )
    }
    else {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
                <CharacterStatus characterStatuses={characterStatuses} />
                <FirstAttributesAssignment characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} audioPlayGameSound={audioPlayGameSound} />
            </div>
        )
    }
}

export default CharacterCreationHandler;