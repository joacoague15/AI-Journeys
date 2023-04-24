import AttributesHelp from "./AttributesHelp";
import Attributes from "../components/Attributes";
import { useEffect } from "react";

const FirstAttributesAssignment = ({ userClass, characterAttributes, setCharacterAttributes, setCharacterStatuses }) => {

    useEffect(() => {
        if (userClass === 'warrior') {
            setCharacterAttributes({
                strength: 10,
                constitution: 10,
                intelligence: 5
            })
        }
        if (userClass === 'wizard') {
            setCharacterAttributes({
                strength: 5,
                constitution: 5,
                intelligence: 10
            })
        }
        if (userClass === 'paladin') {
            setCharacterAttributes({
                strength: 7,
                constitution: 7,
                intelligence: 7
            })
        }
    }, [userClass, setCharacterAttributes]);

    useEffect(() => {
        setCharacterStatuses({
            health: characterAttributes.constitution * 10,
            maxHealth: characterAttributes.constitution * 10,
            attack: characterAttributes.strength * 10,
            mana: characterAttributes.intelligence * 10,
            maxMana: characterAttributes.intelligence * 10,
        })
        }, [characterAttributes, setCharacterStatuses]);

    return (
        <div className="animate__animated animate__fadeIn" style={{ color: "white", textAlign: "center", display: "flex", flexDirection: "column", padding: 10, marginTop: 10 }}>
            <Attributes characterAttributes={characterAttributes} userClass={userClass} />
            <AttributesHelp />
        </div>
    );
}

export default FirstAttributesAssignment;