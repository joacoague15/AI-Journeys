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
        setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health + statValue });
    }

    const handleIntelligenceChange = (attributeValue, statValue) => {
        handleAttributeChange('int', characterAttributes.intelligence + attributeValue);
        setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + statValue });
    }

    return (
        <>
            <ul style={{ textAlign: "left" }}>
                <li style={{ listStyle: "none" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: "white" }}>Strength (STR): {characterAttributes.strength}</span>
                        <div>
                            {!characterCreated && <button
                                style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                disabled={characterAttributes.strength <= 1}
                                onClick={() => handleStrengthChange(-1, -1)}
                            >
                                -
                            </button>}
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
                        <span style={{ color: "white" }}>Constitution (CON): {characterAttributes.constitution}{' '}</span>
                        <div>
                            {!characterCreated && <button
                                style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25, cursor: 'pointer' }}
                                disabled={characterAttributes.constitution <= 1}
                                onClick={() => handleConstitutionChange(-1, -1)}
                            >
                                -
                            </button>}
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
                        <span style={{ color: "white" }}>Intelligence (INT): {characterAttributes.intelligence}{' '}</span>
                        <div>
                            {!characterCreated && <button
                                style={{ border: "1px solid white", color: "white", marginLeft: 5, width: 25,  cursor: 'pointer' }}
                                disabled={characterAttributes.intelligence <= 1}
                                onClick={() => handleIntelligenceChange(-1, -1)}
                            >
                                -
                            </button>}
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
        </>
    )
}

export default Attributes;