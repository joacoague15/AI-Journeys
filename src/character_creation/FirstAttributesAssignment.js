import AttributesHelp from "./AttributesHelp";
import Attributes from "../components/Attributes";
import { IDBTransactionAddAttributes } from "../IndexedDB/CRUD";
import { hover } from "../constants";

const FirstAttributesAssignment = ({ characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated }) => {

    const clearButton = () => {
        setCharacterAttributes({
            strength: 1,
            constitution: 1,
            intelligence: 1,
        })

        setCharacterStatuses({
            health: 10,
            maxHealth: 10,
            mana: 0,
            maxMana: 0,
            attack: 1,
        })

        setPoints(5)
    }

    const addAttributesIndexedDB = () => {
        IDBTransactionAddAttributes({
            strength: { ...characterAttributes }.strength,
            constitution: { ...characterAttributes }.constitution,
            maxConstitution: { ...characterAttributes }.constitution,
            intelligence: { ...characterAttributes }.intelligence,
            maxIntelligence: { ...characterAttributes }.intelligence
        })
        setCharacterCreated(true)
    }

    return (
        <div className="animate__animated animate__fadeIn" style={{ color: "white", textAlign: "center", display: "flex", flexDirection: "column", border: "2px solid white", padding: 10, marginTop: 10 }}>
            <h2 style={{ fontSize: 32, color: "white", textAlign: "center" }}>Attribute Allocation</h2>
            <p style={{ fontSize: 32 }}>You have {points} points to spend on attributes:</p>
            <div style={{ margin: 'auto', width: '100%' }}>
                <Attributes characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} />
            </div>
            <div style={{ margin: "auto", marginTop: 20, display: 'flex', gap: '20px' }}>
                <button onClick={() => clearButton()} onMouseOver={() => hover.play()} style={{ border: "1px solid white", color: "white", textAlign: "center", fontSize: 36, padding: 10, borderRadius: 2 }}>Clear</button>
            </div>
            <AttributesHelp />
        </div>
    );
}

export default FirstAttributesAssignment;