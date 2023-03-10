import {useState} from "react";
import AttributesHelp from "./AttributesHelp";

const Attributes = ({characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses}) => {
    const [points, setPoints] = useState(30);

    const handleAttributeChange = (attribute, value) => {
        switch (attribute) {
            case 'str':
                setCharacterAttributes({ ...characterAttributes, strength: value});
                setPoints(points + (characterAttributes.strength - value));
                break;
            case 'dex':
                setCharacterAttributes({ ...characterAttributes, dexterity: value});
                setPoints(points + (characterAttributes.dexterity - value));
                break;
            case 'con':
                setCharacterAttributes({ ...characterAttributes, constitution: value});
                setPoints(points + (characterAttributes.constitution - value));
                break;
            case 'int':
                setCharacterAttributes({ ...characterAttributes, intelligence: value});
                setPoints(points + (characterAttributes.intelligence - value));
                break;
            case 'wis':
                setCharacterAttributes({ ...characterAttributes, wisdom: value});
                setPoints(points + (characterAttributes.wisdom - value));
                break;
            case 'cha':
                setCharacterAttributes({ ...characterAttributes, charisma: value});
                setPoints(points + (characterAttributes.charisma - value));
                break;
            default:
                break;
        }
    };

    const handleConstitutionChange = (attributeValue, statValue) => {
        handleAttributeChange('con', characterAttributes.constitution + attributeValue);
        setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health + statValue });
    }

    const handleIntelligenceChange = (attributeValue, statValue) => {
        handleAttributeChange('int', characterAttributes.intelligence + attributeValue);
        setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + statValue });
    }

    return (
        <div style={{ color: "white", textAlign: "left", display: "flex", flexDirection: "column" }}>
                <h2 style={{ fontSize: 32, color: "white", textAlign: "center" }}>Attribute Allocation</h2>
                <p style={{ fontSize: 32 }}>You have {points} points to spend on attributes:</p>
                <ul style={{ textAlign: "center" }}>
                    <li style={{  listStyle: "none" }}>
                        Strength ( STR ): {characterAttributes.strength}{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.strength <= 1}
                            onClick={() => handleAttributeChange('str', characterAttributes.strength - 1)}
                        >
                            -
                        </button>{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", listStyleType: "none", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.strength >= 10 || points === 0}
                            onClick={() => handleAttributeChange('str', characterAttributes.strength + 1)}
                        >
                            +
                        </button>
                    </li>
                    <li style={{  listStyle: "none" }}>
                        Dexterity ( DEX ): {characterAttributes.dexterity}{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.dexterity <= 1}
                            onClick={() => handleAttributeChange('dex', characterAttributes.dexterity - 1)}
                        >
                            -
                        </button>{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.dexterity >= 10 || points === 0}
                            onClick={() => handleAttributeChange('dex', characterAttributes.dexterity + 1)}
                        >
                            +
                        </button>
                    </li>
                    <li style={{  listStyle: "none" }}>
                        Constitution (CON): {characterAttributes.constitution}{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.constitution <= 1}
                            onClick={() => handleConstitutionChange(-1, -1)}
                        >
                            -
                        </button>{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.constitution >= 10 || points === 0}
                            onClick={() => handleConstitutionChange(1, 1)}
                        >
                            +
                        </button>
                    </li>
                    <li style={{  listStyle: "none" }}>
                        Intelligence (INT): {characterAttributes.intelligence}{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.intelligence <= 1}
                            onClick={() => handleIntelligenceChange(-1, -1)}
                        >
                            -
                        </button>{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.intelligence >= 10 || points === 0}
                            onClick={() => handleIntelligenceChange(1, 1)}
                        >
                            +
                        </button>
                    </li>
                    <li style={{  listStyle: "none" }}>
                        Wisdom (WIS): {characterAttributes.wisdom}{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.wisdom <= 1}
                            onClick={() => handleAttributeChange('wis', characterAttributes.wisdom - 1)}
                        >
                            -
                        </button>{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.wisdom >= 10 || points === 0}
                            onClick={() => handleAttributeChange('wis', characterAttributes.wisdom + 1)}
                        >
                            +
                        </button>
                    </li>
                    <li style={{  listStyle: "none" }}>
                        Charisma (CHA): {characterAttributes.charisma}{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.charisma <= 1}
                            onClick={() => handleAttributeChange('cha', characterAttributes.charisma - 1)}
                        >
                            -
                        </button>{' '}
                        <button
                            style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25 }}
                            disabled={characterAttributes.charisma >= 10 || points === 0}
                            onClick={() => handleAttributeChange('cha', characterAttributes.charisma + 1)}
                        >
                            +
                        </button>
                    </li>
                </ul>

                <div style={{ margin: "auto", marginTop: 20 }}>
                    <button onClick={() => setCharacterCreated(true)} disabled={points > 0} style={{ border: "1px solid white", color: "white", textAlign: "center", fontSize: 36, padding: 10, borderRadius: 2, opacity: points > 0 ? 0.5 : 1 }}>Confirm</button>
                </div>

            <AttributesHelp />
        </div>
    );
}

export default Attributes;