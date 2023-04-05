import { IDBTransactionAddCharacter } from "../IndexedDB/CRUD"
import ImageWithHover from "../components/ImageWithHover";

import warriorImg from "../assets/gifs/warrior.gif";
import mageImg from "../assets/gifs/mage.gif";
import {useState} from "react";

const ClassSelection = ({ userName, setUserClass }) => {

    const indexedDBInput = (classChoice) => {
        IDBTransactionAddCharacter({ Name: userName, Class: classChoice })
        setUserClass(classChoice)
    }

    const [fadeOutAnimation, setFadeOutAnimation] = useState(false);

    const selectClass = (indexDBInput) => {
        setFadeOutAnimation(true);
        setTimeout(() => {
            indexedDBInput(indexDBInput)
        }, 1000)
    }

    return (
        <div className={`animate__animated ${fadeOutAnimation ? 'animate__fadeOut' : 'animate__fadeIn'}`}>
            <h2 style={{ fontSize: 48, color: "white", marginBottom: 50 }}>Class of {userName}</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
                    <button style={{ margin: 20, fontSize: 48, backgroundColor: "black", border: "none" }} onClick={() => selectClass('warrior')} type="button" className="btn btn-light"><ImageWithHover src={warriorImg} alt="warrior-img" /></button>
                    <h3 style={{ fontSize: 32, color: "white", marginBottom: 5, letterSpacing: 2 }}>Warrior</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
                    <button style={{ margin: 20, fontSize: 48, backgroundColor: "black", border: "none" }} onClick={() => selectClass('archer')} type="button" className="btn btn-light"><ImageWithHover src={mageImg} alt="mage-img" /></button>
                    <h3 style={{ fontSize: 32, color: "white", marginBottom: 5, letterSpacing: 2 }}>Mage</h3>
                </div>
            </div>
        </div>
    )
}

export default ClassSelection;