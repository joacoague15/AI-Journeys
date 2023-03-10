import ClassSelection from "./ClassSelection";
import NameSelection from "./NameSelection";
import Attributes from "./Attributes";

const Handler = ({userClass, setUserClass, userName, setUserName, characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses}) => {

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
                <Attributes characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            </div>
        )
    }
}

export default Handler;