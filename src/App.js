import {useState} from "react";
import History from "./History";
import CharacterCreationHandler from "./CharacterCreationHandler";

function App() {
    const [userResponses, setUserResponses] = useState([]); // This is where we will store all the user responses
    const [chatGPTresponses, setChatGPTresponses] = useState(['This is the initial story']); // This is where we will store all the chatGPT responses
    const [userName, setUserName] = useState(''); // This is where we will store the user name
    const [userClass, setUserClass] = useState(''); // This is where we will store the user class

    const randomChatGPTresponse = [
        `${userName} finds a potion`,
        `${userName} finds a sword`,
        `${userName} finds a shield`,
        `${userName} finds a helmet`,
        `${userName} finds a chestplate`,
        `${userName} finds a pair of boots`,
        `${userName} finds a pair of leggings`,
        `${userName} finds a pair of gloves`,
        `${userName} finds a pair of pants`,
        `${userName} finds a pair of socks`,
        `${userName} finds a pair of shoes`,
        `${userName} finds a pair of sandals`,
    ]

    const submitPrompt = (userChoose) => {
        setUserResponses([...userResponses, userChoose]);
        setChatGPTresponses([...chatGPTresponses, randomChatGPTresponse[Math.floor(Math.random() * randomChatGPTresponse.length)]]);
    }

    if (!userName || !userClass)
        return <CharacterCreationHandler userClass={userClass} setUserClass={setUserClass} userName={userName} setUserName={setUserName} />

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
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
