import AttributesHelp from "./AttributesHelp";
import Attributes from "../components/Attributes";
import { IDBTransactionAddAttributes } from "../IndexedDB/CRUD";
import {useEffect} from "react";

const FirstAttributesAssignment = ({ userClass, characterAttributes, setCharacterAttributes }) => {

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
    }, [userClass]);

    const addAttributesIndexedDB = () => {
        IDBTransactionAddAttributes({
            strength: { ...characterAttributes }.strength,
            constitution: { ...characterAttributes }.constitution,
            maxConstitution: { ...characterAttributes }.constitution,
            intelligence: { ...characterAttributes }.intelligence,
            maxIntelligence: { ...characterAttributes }.intelligence
        })
    }

    return (
        <div className="animate__animated animate__fadeIn" style={{ color: "white", textAlign: "center", display: "flex", flexDirection: "column", padding: 10, marginTop: 10 }}>
            <Attributes characterAttributes={characterAttributes} userClass={userClass} />
            <AttributesHelp />
        </div>
    );
}

export default FirstAttributesAssignment;