import { useState } from "react";
import AttributesHelp from "./AttributesHelp";

const Attributes = ({ characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses }) => {
    const INITIAL_POINTS = 5;
    const [points, setPoints] = useState(INITIAL_POINTS);

    const handleAttributeChange = (attribute, value) => {
        switch (attribute) {
            case 'str':
                setCharacterAttributes({ ...characterAttributes, strength: value });
                setPoints(points + (characterAttributes.strength - value));
                break;
            case 'con':
                setCharacterAttributes({ ...characterAttributes, constitution: value });
                setPoints(points + (characterAttributes.constitution - value));
                break;
            case 'int':
                setCharacterAttributes({ ...characterAttributes, intelligence: value });
                setPoints(points + (characterAttributes.intelligence - value));
                break;
            default:
                break;
        }
    };

    const addAllAttributes = () => {
            return points
    }

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

        setPoints(INITIAL_POINTS)
    }

    const handleStrengthChange = (attributeValue, statValue) => {
        handleAttributeChange('str', characterAttributes.strength + attributeValue);
        setCharacterStatuses({ ...characterStatuses, attack: characterStatuses.attack + statValue });
    }

    const handleConstitutionChange = (attributeValue, statValue) => {
        handleAttributeChange('con', characterAttributes.constitution + attributeValue);
        setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health + statValue });
    }

    const handleIntelligenceChange = (attributeValue, statValue) => {
        handleAttributeChange('int', characterAttributes.intelligence + attributeValue);
        setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + statValue });
    }

    return (
        <div style={{ color: "white", textAlign: "center", display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: 32, color: "white", textAlign: "center" }}>Attribute Allocation</h2>
            <p style={{ fontSize: 32 }}>You have {points} points to spend on attributes:</p>
            <div style={{ margin: 'auto', width: '60%' }}>
                <ul style={{ textAlign: "left" }}>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Strength (STR): {characterAttributes.strength}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                    disabled={characterAttributes.strength <= 1}
                                    onClick={() => handleStrengthChange(-1, -1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                    disabled={points === 0}
                                    onClick={() => handleStrengthChange(1, 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', cursor: 'pointer' }}
                                    onClick={() => handleStrengthChange(points, points)}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Constitution (CON): {characterAttributes.constitution}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                    disabled={characterAttributes.constitution <= 1}
                                    onClick={() => handleConstitutionChange(-1, -1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                    disabled={points === 0}
                                    onClick={() => handleConstitutionChange(1, 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', cursor: 'pointer' }}
                                    onClick={() => handleConstitutionChange(points, points)}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Intelligence (INT): {characterAttributes.intelligence}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25,  cursor: 'pointer' }}
                                    disabled={characterAttributes.intelligence <= 1}
                                    onClick={() => handleIntelligenceChange(-1, -1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                    disabled={characterAttributes.intelligence >= 10 || points === 0}
                                    onClick={() => handleIntelligenceChange(1, 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', cursor: 'pointer'}}
                                    disabled={characterAttributes.intelligence >= 10 || points === 0}
                                    onClick={() => handleIntelligenceChange(points, points)}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div style={{ margin: "auto", marginTop: 20, display: 'flex', gap: '20px' }}>
                <button onClick={() => setCharacterCreated(true)} disabled={points > 0} style={{ border: "1px solid white", color: "white", textAlign: "center", fontSize: 36, padding: 10, borderRadius: 2, opacity: points > 0 ? 0.5 : 1 }}>Confirm</button>
                <button onClick={() => clearButton()} style={{ border: "1px solid white", color: "white", textAlign: "center", fontSize: 36, padding: 10, borderRadius: 2 }}>Clear</button>
            </div>

            <AttributesHelp />
        </div>
    );
}

export default Attributes;