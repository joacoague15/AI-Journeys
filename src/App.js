import {useState} from "react";
import History from "./History";
import Handler from "./character_creation/Handler";
import CharacterStatus from "./CharacterStatus";

function App() {
    const [userResponses, setUserResponses] = useState([]); // This is where we will store all the character responses
    const [chatGPTresponses, setChatGPTresponses] = useState(['This is the initial story']); // This is where we will store all the chatGPT responses
    const [characterName, setCharacterName] = useState(''); // This is where we will store the character name
    const [characterClass, setCharacterClass] = useState(''); // This is where we will store the character class
    const [characterAttributes, setCharacterAttributes] = useState({
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
    }); // This is where we will store the user attributes
    const [characterStatuses, setCharacterStatuses] = useState({
        health: 10,
        mana: 0,
    });
    const [characterCreated, setCharacterCreated] = useState(false);

    const randomChatGPTresponse = [
        `${characterName} finds a potion`,
        `${characterName} finds a sword`,
        `${characterName} finds a shield`,
        `${characterName} finds a helmet`,
        `${characterName} finds a chestplate`,
        `${characterName} finds a pair of boots`,
        `${characterName} finds a pair of leggings`,
        `${characterName} finds a pair of gloves`,
        `${characterName} finds a pair of pants`,
        `${characterName} finds a pair of socks`,
        `${characterName} finds a pair of shoes`,
        `${characterName} finds a pair of sandals`,
    ]

    const submitPrompt = (userChoose) => {
        setUserResponses([...userResponses, userChoose]);
        setChatGPTresponses([...chatGPTresponses, randomChatGPTresponse[Math.floor(Math.random() * randomChatGPTresponse.length)]]);
    }

    if (!characterCreated)
        return <Handler userClass={characterClass} setUserClass={setCharacterClass} userName={characterName} setUserName={setCharacterName} characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
            <CharacterStatus characterStatuses={characterStatuses} />

            <div style={{ width: "50%", color: "white", textAlign: "center", marginTop: 10, fontSize: 32 }}>
                <p style={{ borderRadius: 1 }}>{chatGPTresponses[chatGPTresponses.length - 1]}</p>
            </div>

            <div>
                <button style={{ margin: 20, fontSize: 48 }} onClick={() => submitPrompt('left')} type="button" className="btn btn-light">Left</button>
                <button style={{ margin: 20, fontSize: 48 }} onClick={() => submitPrompt('center')} type="button" className="btn btn-light">Center</button>
                <button style={{ margin: 20, fontSize: 48 }} onClick={() => submitPrompt('right')} type="button" className="btn btn-light">Right</button>
            </div>

            <History userResponses={userResponses} chatGPTresponses={chatGPTresponses} />
        </div>
    )
}

export default App;
