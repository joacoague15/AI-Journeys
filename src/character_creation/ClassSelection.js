import { IDBTransactionAddCharacter } from "../IndexedDB/CRUD"
import ImageWithHover from "../components/ImageWithHover";

import warriorImg from "../assets/warrior.gif";
import mageImg from "../assets/mage.gif";

const ClassSelection = ({ userName, setUserClass }) => {

    const indexedDBInput = (classChoice) => {
        IDBTransactionAddCharacter({ Name: userName, Class: classChoice })
        setUserClass(classChoice)
    }

    return (
        <div>
            <h2 style={{ fontSize: 48, color: "white", marginBottom: 50 }}>Class of {userName}</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
                    <button style={{ margin: 20, fontSize: 48, backgroundColor: "black", border: "none" }} onClick={() => indexedDBInput('warrior')} type="button" className="btn btn-light"><ImageWithHover src={warriorImg} alt="warrior-img" /></button>
                    <h3 style={{ fontSize: 32, color: "white", marginBottom: 5, letterSpacing: 2 }}>Warrior</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
                    <button style={{ margin: 20, fontSize: 48, backgroundColor: "black", border: "none" }} onClick={() => indexedDBInput('archer')} type="button" className="btn btn-light"><ImageWithHover src={mageImg} alt="mage-img" /></button>
                    <h3 style={{ fontSize: 32, color: "white", marginBottom: 5, letterSpacing: 2 }}>Mage</h3>
                </div>
            </div>
        </div>
    )
}

export default ClassSelection;