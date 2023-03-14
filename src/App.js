import { useState, useEffect } from "react";
import History from "./components/History";
import CharacterCreationHandler from "./character_creation/CharacterCreationHandler";
// import Inventory from "./components/Inventory"
import { resolverIDB } from "./IndexedDB/registerDB.js"
import CharacterStatus from "./CharacterStatus";
import SituationHandler from "./situations_system/SituationHandler";
import Attributes from "./components/Attributes";

function App() {
    const [userResponses, setUserResponses] = useState([]); // This is where we will store all the character responses
    const [chatGPTresponses, setChatGPTresponses] = useState(['This is the initial story']); // This is where we will store all the chatGPT responses
    const [characterName, setCharacterName] = useState(''); // This is where we will store the character name
    const [characterClass, setCharacterClass] = useState(''); // This is where we will store the character class
    const [characterAttributes, setCharacterAttributes] = useState({
        strength: 1,
        constitution: 1,
        intelligence: 1,
    }); // This is where we will store the user attributes
    const [characterStatuses, setCharacterStatuses] = useState({
        health: 10,
        attack: 10,
        mana: 0,
    });
    const [characterCreated, setCharacterCreated] = useState(false);
    const [situation, setSituation] = useState('walking');
    const [points, setPoints] = useState(5);

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

    useEffect(() => {
        resolverIDB()
    }, [])

    const submitPrompt = (userChoose) => {
        setUserResponses([...userResponses, userChoose]);
        setChatGPTresponses([...chatGPTresponses, randomChatGPTresponse[Math.floor(Math.random() * randomChatGPTresponse.length)]]);
    }

    if (!characterCreated)
        return <CharacterCreationHandler userClass={characterClass} setUserClass={setCharacterClass} userName={characterName} setUserName={setCharacterName} characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} setCharacterCreated={setCharacterCreated} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} />

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <div style={{ width: "50%", color: "white", textAlign: "center", margin: 'auto', fontSize: 32, paddingTop: '20px' }}>
                <p style={{ borderRadius: 1 }}>{chatGPTresponses[chatGPTresponses.length - 1]}</p>
            </div>
            <CharacterStatus characterStatuses={characterStatuses} />
            <History userResponses={userResponses} chatGPTresponses={chatGPTresponses} />
            <SituationHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} situation={situation} setSituation={setSituation} />
            <div style={{ position: "absolute", bottom: 40, right: 40 }}>
                <Attributes characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} />
            </div>
            {/*<Inventory />*/}
        </div>
    )
}

export default App;
