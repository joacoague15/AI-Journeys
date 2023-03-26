//import { IDBTransactionUpdateCharacter } from "../IndexedDB/CRUD"

import warrior from '../images/warrior.gif';
import mage from '../images/mage.gif';

const ClassSelection = ({ userName, setUserClass }) => {

    /*const ClassChoice = (classChoice) => {
        IDBTransactionUpdateCharacter({ Class: classChoice })
        setUserClass(classChoice)
    }*/

    return (
        <div>
            <h2 style={{ fontSize: 48, color: "white", marginBottom: 50 }}>Class of {userName}</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
                    <button style={{ margin: 20, fontSize: 48, backgroundColor: "black", border: "none" }} onClick={() => setUserClass('warrior')} type="button" className="btn btn-light"><img style={{ filter: "grayscale(100%)" }} src={warrior} alt="warrior"/></button>
                    <h3 style={{ fontSize: 32, color: "white", marginBottom: 5, letterSpacing: 2 }}>Warrior</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
                    <button style={{ margin: 20, fontSize: 48, backgroundColor: "black", border: "none" }} onClick={() => setUserClass('archer')} type="button" className="btn btn-light"><img style={{ filter: "grayscale(100%)" }} alt="mage" src={mage}/></button>
                    <h3 style={{ fontSize: 32, color: "white", marginBottom: 5, letterSpacing: 2 }}>Mage</h3>
                </div>
            </div>
        </div>
    )
}

export default ClassSelection;