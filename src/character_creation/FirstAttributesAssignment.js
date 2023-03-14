import AttributesHelp from "./AttributesHelp";
import Attributes from "../components/Attributes";

const FirstAttributesAssignment = ({ characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated }) => {

    const clearButton = () => {
        setCharacterAttributes({
            strength: 1,
            constitution: 1,
            intelligence: 1,
        })

        setCharacterStatuses({
            health: 10,
            mana: 0,
            attack: 10,
        })

        setPoints(5)
    }

    return (
        <div style={{ color: "white", textAlign: "center", display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: 32, color: "white", textAlign: "center" }}>Attribute Allocation</h2>
            <p style={{ fontSize: 32 }}>You have {points} points to spend on attributes:</p>
            <div style={{ margin: 'auto', width: '60%' }}>
                <Attributes characterAttributes={characterAttributes} setCharacterAttributes={setCharacterAttributes} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} points={points} setPoints={setPoints} characterCreated={characterCreated} />
            </div>
            <div style={{ margin: "auto", marginTop: 20, display: 'flex', gap: '20px' }}>
                <button onClick={() => setCharacterCreated(true)} disabled={points > 0} style={{ border: "1px solid white", color: "white", textAlign: "center", fontSize: 36, padding: 10, borderRadius: 2, opacity: points > 0 ? 0.5 : 1 }}>Confirm</button>
                <button onClick={() => clearButton()} style={{ border: "1px solid white", color: "white", textAlign: "center", fontSize: 36, padding: 10, borderRadius: 2 }}>Clear</button>
            </div>
            <AttributesHelp />
        </div>
    );
}

export default FirstAttributesAssignment;