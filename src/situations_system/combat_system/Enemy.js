import { useEffect } from "react";

const Enemy = ({ enemyCurrentHealth, enemyTotalHealth, turn, setTurn, characterStatuses, setCharacterStatuses, enemyImage, enemyName }) => {

    useEffect(() => {
        if (turn === 'enemy' && enemyCurrentHealth > 0) {
            setTimeout(() => {
                setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health - 1 });
                setTurn('player');
            }
                , 500);
        }
    }, [turn]);

    return (
        <>
            <h2 style={{ color: "white", fontSize: 24, textAlign: "center", marginBottom: 10, letterSpacing: 4 }}>{enemyName}</h2>
            <img src={enemyImage} alt="enemy" style={{ maxWidth: '600px', display: "flex", textAlign: "center", margin: "auto", filter: "grayscale(100%)" }} />
            <div className="progress" style={{ backgroundColor: "black", width: "600px", margin: "auto", display: "flex" }}>
                <div style={{ width: ((enemyCurrentHealth * 100) / enemyTotalHealth) + '%', backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                    aria-valuenow={enemyCurrentHealth} aria-valuemin="0" aria-valuemax={enemyTotalHealth}>
                </div>
            </div>
        </>
    )
}

export default Enemy;