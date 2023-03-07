import ClassSelection from "./ClassSelection";
import CharacterNameSelection from "./CharacterNameSelection";

const CharacterCreationHandler = ({userClass, setUserClass, userName, setUserName}) => {

    if (!userName) {
        return <CharacterNameSelection setUserName={setUserName} />
    }
    else if (!userClass) {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
                <ClassSelection userName={userName} userClass={userClass} setUserClass={setUserClass} />
            </div>
        )
    }
}

export default CharacterCreationHandler;