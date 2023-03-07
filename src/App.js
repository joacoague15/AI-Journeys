import { useState } from "react";
import History from "./History";

function App() {
    const [userResponses, setUserResponses] = useState([]); // This is where we will store all the user responses
    const [chatGPTresponses, setChatGPTresponses] = useState(['This is the initial story']); // This is where we will store all the chatGPT responses

    const randomChatGPTresponse = [
        'Dragon attacks the player',
        'This is some random response from GPT-3',
        'Another random response from GPT-3',
        'An orc attacks the player',
        'The player finds a potion',
        'The player finds a sword',
        'The player finds a shield',
        'The player finds a helmet',
        'The player finds a chestplate',
        'The player finds a pair of boots',
        'The player finds a pair of leggings',
        'The player finds a pair of gloves',
    ]

    const submitPrompt = (userChoose) => {
        setUserResponses([...userResponses, userChoose]);
        setChatGPTresponses([...chatGPTresponses, randomChatGPTresponse[Math.floor(Math.random() * randomChatGPTresponse.length)]]);
    }

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
  );
}

export default App;
