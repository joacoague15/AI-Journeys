import {useState} from "react";

const CharacterNameSelection = ({setUserName}) => {
    const [inputValue, setInputValue] = useState('');


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="App">
            <h2 style={{ fontSize: 32, color: "white" }}>Character name</h2>
            <input style={{ width: "40%", border: "2px solid white", color: "white", textAlign: "center", fontSize: 42, letterSpacing: 16 }} onChange={e => setInputValue(e.target.value)}/>
            <button style={{ margin: 20, fontSize: 36 }} type="button" className="btn btn-light" onClick={() => setUserName(inputValue)}>Continue</button>
        </div>
    )
}

export default CharacterNameSelection;