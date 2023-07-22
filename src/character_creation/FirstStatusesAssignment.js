import AttributesHelp from "./AttributesHelp";
import Attributes from "../components/Attributes";
import { useEffect } from "react";
import './FirstStatusesAssignment.css';

const FirstStatusesAssignment = ({ characterClass, characterStatuses, setCharacterStatuses }) => {

    useEffect(() => {
        if (characterClass === 'warrior') {
            setCharacterStatuses({
                health: 140,
                attackMin: 70,
                attackMax: 100,
                mana: 0,
                dodge: 25,
                critChance: 20,
                critDmg: 10,
            })
        }
        if (characterClass === 'wizard') {
            setCharacterStatuses({
                health: 100,
                attackMin: 50,
                attackMax: 80,
                mana: 100,
                dodge: 15,
                critChance: 10,
                critDmg: 20,
            })
        }
        if (characterClass === 'paladin') {
            setCharacterStatuses({
                health: 80,
                attack: 60,
                mana: 60,
                dodge: 10,
                critChance: 0,
                critDmg: 0,
            })
        }
    }, [characterClass, setCharacterStatuses]);

    return (
        <div className="animate__animated animate__fadeIn first-statuses-container">
            <Attributes characterStatuses={characterStatuses} characterClass={characterClass} />
            <AttributesHelp />
        </div>
    );
}

export default FirstStatusesAssignment;
