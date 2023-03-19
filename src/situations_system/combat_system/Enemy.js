import enemy from "../../images/enemy1.jpg";
import { useEffect } from "react";

const Enemy = ({ enemyHealth, enemyActualHealth, turn, setTurn, characterStatuses, setCharacterStatuses }) => {

    useEffect(() => {
        if (turn === 'enemy' && enemyActualHealth > 0) {
            setTimeout(() => {
                setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health - 1 });
                setTurn('player');
            }
                , 500);
        }
    }, [turn]);

    return (
        <>
            <div className="progress" style={{ backgroundColor: "black", width: "50%", margin: "auto", position: "absolute", left: "50%", transform: 'translate(-50%)', bottom: '20%', zIndex: 10 }}>
                <div style={{ width: ((enemyActualHealth * 100) / enemyHealth) + '%', backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                    aria-valuenow={enemyActualHealth} aria-valuemin="0" aria-valuemax={enemyHealth}>
                </div>
            </div>
            <img src={enemy} alt="enemy" style={{ maxWidth: '65%', left: '50%', position: 'absolute', transform: 'translate(-50%)', zIndex: 1, filter: "grayscale(100%)" }} />
        </>
    )
}

export default Enemy;