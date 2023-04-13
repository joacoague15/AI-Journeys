import { IDBTransactionAddCharacter } from "../IndexedDB/CRUD"

import warriorClassImg from "../assets/images/warrior_class.jpg";
import wizardClassImg from "../assets/images/wizard_class.png";
import { useState } from "react";
import { hover } from "../constants";

const ClassSelection = ({ userName, setUserClass }) => {
    const [isWarriorHovering, setIsWarriorHovering] = useState(false);
    const [isWizardHovering, setIsWizardHovering] = useState(false);

    const indexedDBInput = (classChoice) => {
        IDBTransactionAddCharacter({ Name: userName, Class: classChoice })
        setUserClass(classChoice)
    }

    const selectClass = (indexDBInput) => {
        setTimeout(() => {
            indexedDBInput(indexDBInput)
        }, 1000)
    }

    return (
        <div className={"animate__animated animate__fadeIn"} style={{ display: "flex", flexDirection: "row", width: "100%", marginTop: 20, justifyContent: "center", alignItems: "center", }}>
            <button onMouseEnter={() => setIsWarriorHovering(true)}
                onMouseLeave={() => setIsWarriorHovering(false)}
                style={{ fontSize: 48, backgroundColor: "black", border: "none", margin: "0 20px" }} onClick={() => selectClass('warrior')} type="button" className="btn btn-light"><img onMouseOver={() => hover.play()} style={{ width: 300, border: "2px solid white", filter: isWarriorHovering ? "none" : "grayscale(100%)", transition: "filter 0.3s ease-in-out" }} src={warriorClassImg} alt="warrior-img" /></button>
            <button onMouseEnter={() => setIsWizardHovering(true)}
                onMouseLeave={() => setIsWizardHovering(false)}
                style={{ fontSize: 48, backgroundColor: "black", border: "none", margin: "0 20px" }} onClick={() => selectClass('archer')} type="button" className="btn btn-light"><img onMouseOver={() => hover.play()} style={{ width: 300, border: "2px solid white", filter: isWizardHovering ? "none" : "grayscale(100%)", transition: "filter 0.3s ease-in-out" }} src={wizardClassImg} alt="mage-img" /></button>
        </div>
    )
}

export default ClassSelection;