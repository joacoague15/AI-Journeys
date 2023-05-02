import AttributesHelp from "./AttributesHelp";
import Attributes from "../components/Attributes";
import { useEffect } from "react";

const FirstStatusesAssignment = ({ userClass, characterStatuses, setCharacterStatuses }) => {

    useEffect(() => {
        if (userClass === 'warrior') {
            setCharacterStatuses({
                health: 100,
                maxHealth: 100,
                attack: 100,
                mana: 0,
                maxMana: 0,
            })
        }
        if (userClass === 'wizard') {
            setCharacterStatuses({
                health: 60,
                maxHealth: 70,
                attack: 40,
                mana: 100,
                maxMana: 100,
            })
        }
        if (userClass === 'paladin') {
            setCharacterStatuses({
                health: 80,
                maxHealth: 90,
                attack: 60,
                mana: 60,
                maxMana: 60,
            })
        }
    }, [userClass, setCharacterStatuses]);

    return (
        <div className="animate__animated animate__fadeIn" style={{ color: "white", textAlign: "center", display: "flex", flexDirection: "column", padding: 10, marginTop: 10 }}>
            <Attributes characterStatuses={characterStatuses} userClass={userClass} />
            <AttributesHelp />
        </div>
    );
}

export default FirstStatusesAssignment;