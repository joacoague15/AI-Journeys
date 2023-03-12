import { useState } from "react";
import CharacterStatus from "../CharacterStatus";
import AttributesHelp from "./AttributesHelp";

const Attributes = ({ characterAttributes, setCharacterAttributes, setCharacterCreated, characterStatuses, setCharacterStatuses }) => {
    const [points, setPoints] = useState(30);

    const handleAttributeChange = (attribute, value) => {
        switch (attribute) {
            case 'str':
                setCharacterAttributes({ ...characterAttributes, strength: value });
                setPoints(points + (characterAttributes.strength - value));
                break;
            case 'dex':
                setCharacterAttributes({ ...characterAttributes, dexterity: value });
                setPoints(points + (characterAttributes.dexterity - value));
                break;
            case 'con':
                setCharacterAttributes({ ...characterAttributes, constitution: value });
                setPoints(points + (characterAttributes.constitution - value));
                break;
            case 'int':
                setCharacterAttributes({ ...characterAttributes, intelligence: value });
                setPoints(points + (characterAttributes.intelligence - value));
                break;
            case 'wis':
                setCharacterAttributes({ ...characterAttributes, wisdom: value });
                setPoints(points + (characterAttributes.wisdom - value));
                break;
            case 'cha':
                setCharacterAttributes({ ...characterAttributes, charisma: value });
                setPoints(points + (characterAttributes.charisma - value));
                break;
            default:
                break;
        }
    };

    const addAllAttributes = (attribute) => {
        if (points < 10 && attribute + points < 10)
            return points
        return 10 - attribute
    }

    const clearButton = () => {
        setCharacterAttributes({
            strength: 1,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1,
        })

        setCharacterStatuses({
            health: 10,
            mana: 0,
        })

        setPoints(30)
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
            <CharacterStatus characterStatuses={characterStatuses} />
            <h2 style={{ fontSize: 32, color: "white", textAlign: "center" }}>Attribute Allocation</h2>
            <p style={{ fontSize: 32 }}>You have {points} points to spend on attributes:</p>
            <div style={{ margin: 'auto', width: '60%' }}>
                <ul style={{ textAlign: "left" }}>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Strength ( STR ): {characterAttributes.strength}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.strength <= 1}
                                    onClick={() => handleAttributeChange('str', characterAttributes.strength - 1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", listStyleType: "none", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.strength >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('str', characterAttributes.strength + 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.strength >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('str', characterAttributes.strength + addAllAttributes(characterAttributes.strength))}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Dexterity ( DEX ): {characterAttributes.dexterity}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.dexterity <= 1}
                                    onClick={() => handleAttributeChange('dex', characterAttributes.dexterity - 1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.dexterity >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('dex', characterAttributes.dexterity + 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.dexterity >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('dex', characterAttributes.dexterity + addAllAttributes(characterAttributes.dexterity))}
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
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.constitution <= 1}
                                    onClick={() => handleConstitutionChange(-1, -1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.constitution >= 10 || points === 0}
                                    onClick={() => handleConstitutionChange(1, 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.constitution >= 10 || points === 0}
                                    onClick={() => handleConstitutionChange(addAllAttributes(characterAttributes.constitution), addAllAttributes(characterAttributes.constitution))}
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
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.intelligence <= 1}
                                    onClick={() => handleIntelligenceChange(-1, -1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.intelligence >= 10 || points === 0}
                                    onClick={() => handleIntelligenceChange(1, 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.intelligence >= 10 || points === 0}
                                    onClick={() => handleIntelligenceChange(addAllAttributes(characterAttributes.intelligence), addAllAttributes(characterAttributes.intelligence))}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Wisdom (WIS): {characterAttributes.wisdom}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.wisdom <= 1}
                                    onClick={() => handleAttributeChange('wis', characterAttributes.wisdom - 1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.wisdom >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('wis', characterAttributes.wisdom + 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.wisdom >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('wis', characterAttributes.wisdom + addAllAttributes(characterAttributes.wisdom))}
                                >
                                    All
                                </button>
                            </div>
                        </div>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Charisma (CHA): {characterAttributes.charisma}{' '}
                            <div>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.charisma <= 1}
                                    onClick={() => handleAttributeChange('cha', characterAttributes.charisma - 1)}
                                >
                                    -
                                </button>{' '}
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.charisma >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('cha', characterAttributes.charisma + 1)}
                                >
                                    +
                                </button>
                                <button
                                    style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 'auto', '&:hover': { cursor: 'pointer' } }}
                                    disabled={characterAttributes.charisma >= 10 || points === 0}
                                    onClick={() => handleAttributeChange('cha', characterAttributes.charisma + addAllAttributes(characterAttributes.charisma))}
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