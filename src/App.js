import { useState } from "react";

function App() {
    const [currentPrompt, setCurrentPrompt] = useState("");
    const [prompts, setPrompts] = useState([]); // This is where we will store all the prompts
    const [chatGPTresponses, setChatGPTresponses] = useState([]); // This is where we will store all the chatGPT responses

    const submitPrompt = e => {
        if (e.key === "Enter" && currentPrompt !== "") {
            setPrompts([...prompts, currentPrompt]);
            setChatGPTresponses([...chatGPTresponses, "This is some random response from GPT-3"]);
            setCurrentPrompt("");
        }
    }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
        <textarea value={currentPrompt} onKeyDown={submitPrompt} onChange={event => setCurrentPrompt(event.target.value)} style={{ width: "50%", color: "white", fontSize: 18 }} aria-label="With textarea"></textarea>

        {prompts.map((prompt, index) => {
            return <div style={{ width: "50%", color: "white", textAlign: "left", marginTop: 10, fontSize: 18 }}>
                <p>{prompt}</p>
                <p style={{ backgroundColor: "grey", borderRadius: 1 }}>{chatGPTresponses[index]}</p>
            </div>
        })}
    </div>
  );
}

export default App;
