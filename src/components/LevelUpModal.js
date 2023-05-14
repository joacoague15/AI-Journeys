import heartIcon from '../assets/images/heart_icon.jpg';
import swordIcon from '../assets/images/sword_icon.jpg';
import wandIcon from '../assets/images/wand_icon.jpg';

const LevelUpModal = ({ points, setPoints, characterStatuses, setCharacterStatuses, userClass }) => {
    const upgradeHealth = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    health: characterStatuses.health + 20,
                }
            )
        }
    }

    const upgradeMana = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    mana: characterStatuses.mana + 40,
                }
            )
        }
    }

    const upgradeAttack = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    attack: characterStatuses.attack + (characterStatuses.attack * 0.1),
                }
            )
        }
    }

    const upgradeDodge = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    dodge: characterStatuses.dodge + 1,
                }
            )
        }
    }

    const upgradeCritDmg = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    critDmg: characterStatuses.critDmg + 10,
                }
            )
        }
    }

    const upgradeCritChance = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    critChance: characterStatuses.critChance + 1,
                }
            )
        }
    }

    return (
        <div className="animate__animated animate__fadeInRight" style={{ display: "flex", position: "absolute", width: "20vw", gap: '10px', height: "60vh", flexDirection: "column", right: 10, top: "20%" }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                    <button onClick={upgradeHealth} className="buttonToUpgrade" style={{ border: "none" }}><img style={{ width: 150, border: "1px solid white" }} src={heartIcon} alt="heart-icon" /></button>
                    <p style={{ color: "white", fontSize: 26, textAlign: "center" }}>Health <br />(+20)</p>
                </div>
                {userClass === 'wizard' &&
                    <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                        <button onClick={upgradeMana} className="buttonToUpgrade" style={{ border: "none" }}><img style={{ width: 150, border: "1px solid white" }} src={wandIcon} alt="wand-icon" /></button>
                        <p style={{ color: "white", fontSize: 26, textAlign: "center" }}>Magic attack<br />(+10%)</p>
                    </div>
                }
                {userClass === 'warrior' &&
                    <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                        <button onClick={upgradeAttack} className="buttonToUpgrade" style={{ border: "none" }}><img style={{ width: 150, border: "1px solid white" }} src={swordIcon} alt="sword-icon" /></button>
                        <p style={{ color: "white", fontSize: 26, textAlign: "center" }}>+ Attack</p>
                    </div>
                }
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                    <button onClick={upgradeDodge} className="buttonToUpgrade" style={{ border: "none" }}><img style={{ width: 150, border: "1px solid white" }} src={swordIcon} alt="sword-icon" /></button>
                    <p style={{ color: "white", fontSize: 26, textAlign: "center" }}>Dodge <br />(+1%)</p>
                </div>
                <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                    <button onClick={upgradeCritDmg} className="buttonToUpgrade" style={{ border: "none" }}><img style={{ width: 150, border: "1px solid white" }} src={swordIcon} alt="sword-icon" /></button>
                    <p style={{ color: "white", fontSize: 26, textAlign: "center" }}>Crtitical Damage <br />(+ 10%)</p>
                </div>
                <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                    <button onClick={upgradeCritChance} className="buttonToUpgrade" style={{ border: "none" }}><img style={{ width: 150, border: "1px solid white" }} src={swordIcon} alt="sword-icon" /></button>
                    <p style={{ color: "white", fontSize: 26, textAlign: "center" }}>Crtitical Chance <br />(+ 1%)</p>
                </div>
            </div>
        </div>
    )
}

export default LevelUpModal;