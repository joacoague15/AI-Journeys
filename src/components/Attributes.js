const Attributes = ({characterAttributes, setCharacterAttributes, characterStatuses, setCharacterStatuses, points, setPoints, characterCreated}) => {
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

    const handleStrengthChange = (attributeValue, statValue) => {
        handleAttributeChange('str', characterAttributes.strength + attributeValue);
        setCharacterStatuses({ ...characterStatuses, attack: characterStatuses.attack + statValue });
    }

    const handleConstitutionChange = (attributeValue, statValue) => {
        handleAttributeChange('con', characterAttributes.constitution + attributeValue);
        if (!characterCreated)
            setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health + statValue, maxHealth: characterStatuses.maxHealth + statValue });
        else
            setCharacterStatuses({ ...characterStatuses, maxHealth: characterStatuses.maxHealth + statValue });
    }

    const handleIntelligenceChange = (attributeValue, statValue) => {
        handleAttributeChange('int', characterAttributes.intelligence + attributeValue);
        if (!characterCreated)
            setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + statValue, maxMana: characterStatuses.maxMana + statValue });
        else
            setCharacterStatuses({ ...characterStatuses, maxMana: characterStatuses.maxMana + statValue });
    }

    return (
        <>
            <ul style={{ textAlign: "left", zIndex: 20 }}>
                <li style={{ listStyle: "none" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}>
                        <span style={{ color: "white" }}>Strength (STR): {characterAttributes.strength}</span>
                        <div>
                            {!characterCreated && <button
                                style={{ border: "none", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                disabled={characterAttributes.strength <= 1}
                                onClick={() => handleStrengthChange(-1, -1)}
                            >
                                -
                            </button>}
                            {points > 0 && <button
                                style={{ border: "none", color: "white", cursor: 'pointer' }}
                                disabled={points === 0}
                                onClick={() => handleStrengthChange(1, 1)}
                            >
                                +
                            </button>}
                            {points > 0 && <button
                                style={{ border: "none", color: "white", marginLeft: 5, cursor: 'pointer' }}
                                onClick={() => handleStrengthChange(points, points)}
                            >
                                All
                            </button>}
                        </div>
                    </div>
                </li>
                <li style={{ listStyle: "none" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}>
                        <span style={{ color: "white" }}>Constitution (CON): {characterAttributes.constitution}{' '}</span>
                        <div>
                            {!characterCreated && <button
                                style={{ border: "none", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                disabled={characterAttributes.constitution <= 1}
                                onClick={() => handleConstitutionChange(-1, -1)}
                            >
                                -
                            </button>}
                            {points > 0 && <button
                                style={{ border: "none", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                disabled={points === 0}
                                onClick={() => handleConstitutionChange(1, 1)}
                            >
                                +
                            </button>}
                            {points > 0 && <button
                                style={{ border: "none", color: "white", marginLeft: 5, cursor: 'pointer' }}
                                onClick={() => handleConstitutionChange(points, points)}
                            >
                                All
                            </button>}
                        </div>
                    </div>
                </li>
                <li style={{ listStyle: "none" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}>
                        <span style={{ color: "white" }}>Intelligence (INT): {characterAttributes.intelligence}{' '}</span>
                        <div>
                            {!characterCreated && <button
                                style={{ border: "none", color: "white", marginLeft: 5, width: 25,  cursor: 'pointer' }}
                                disabled={characterAttributes.intelligence <= 1}
                                onClick={() => handleIntelligenceChange(-1, -1)}
                            >
                                -
                            </button>}
                            {points > 0 && <button
                                style={{ border: "none", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                disabled={characterAttributes.intelligence >= 10 || points === 0}
                                onClick={() => handleIntelligenceChange(1, 1)}
                            >
                                +
                            </button>}
                            {points > 0 && <button
                                style={{ border: "none", color: "white", marginLeft: 5, width: 'auto', cursor: 'pointer'}}
                                disabled={characterAttributes.intelligence >= 10 || points === 0}
                                onClick={() => handleIntelligenceChange(points, points)}
                            >
                                All
                            </button>}
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Attributes;