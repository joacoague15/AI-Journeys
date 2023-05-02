import heartIcon from '../assets/images/heart_icon.jpg';
import swordIcon from '../assets/images/sword_icon.jpg';
import wandIcon from '../assets/images/wand_icon.jpg';

const LevelUpModal = ({ points, setPoints, characterStatuses, setCharacterStatuses }) => {
    const upgradeHealth = () => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterStatuses(
                {
                    ...characterStatuses,
                    health: characterStatuses.health + 40,
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
                    attack: characterStatuses.attack + 20,
                }
            )
        }
    }

    return (
        <div style={{ display: "flex", width: "50vw", justifyItems: "center", height: "90vh", margin: "auto" }}>
            <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                <button onClick={upgradeHealth} className="buttonToUpgrade" style={{ margin: 20, border: "none" }}><img style={{ width: 300, border: "1px solid white" }} src={heartIcon} alt="heart-icon" /></button>
                <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>+ Health</p>
            </div>
            <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                <button onClick={upgradeMana} className="buttonToUpgrade" style={{ margin: 20, border: "none" }}><img style={{ width: 300, border: "1px solid white" }} src={wandIcon} alt="wand-icon" /></button>
                <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>+ Mana</p>
            </div>
            <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                <button onClick={upgradeAttack} className="buttonToUpgrade" style={{ margin: 20, border: "none" }}><img style={{ width: 300, border: "1px solid white" }} src={swordIcon} alt="sword-icon" /></button>
                <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>+ Attack</p>
            </div>
        </div>
    )
}

export default LevelUpModal;