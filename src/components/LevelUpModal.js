import heartIcon from '../assets/images/heart_icon.jpg';
import swordIcon from '../assets/images/sword_icon.jpg';
import wandIcon from '../assets/images/wand_icon.jpg';

const LevelUpModal = ({ points, setPoints, characterAttributes, setCharacterAttributes }) => {
    const {constitution, intelligence, strength} = characterAttributes;

    const upgradeAttribute = (attribute) => {
        if (points > 0) {
            setPoints(points - 1);
            setCharacterAttributes({
                ...characterAttributes,
                [attribute]: characterAttributes[attribute] + 1,
            });
        }
    }

    return (
        <div style={{ display: "flex", width: "50vw", justifyItems: "center", height: "90vh", margin: "auto" }}>
            <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                <button onClick={() => upgradeAttribute(constitution)} className="buttonToUpgrade" style={{ margin: 20, border: "none" }}><img style={{ width: 300, border: "1px solid white" }} src={heartIcon} alt="heart-icon" /></button>
                <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>+1 Constitution</p>
            </div>
            <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                <button onClick={() => upgradeAttribute(intelligence)} className="buttonToUpgrade" style={{ margin: 20, border: "none" }}><img style={{ width: 300, border: "1px solid white" }} src={wandIcon} alt="wand-icon" /></button>
                <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>+1 Intelligence</p>
            </div>
            <div style={{ display: "flex", margin: "auto", flexDirection: "column" }}>
                <button onClick={() => upgradeAttribute(strength)} className="buttonToUpgrade" style={{ margin: 20, border: "none" }}><img style={{ width: 300, border: "1px solid white" }} src={swordIcon} alt="sword-icon" /></button>
                <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>+1 Strength </p>
            </div>
        </div>
    )
}

export default LevelUpModal;