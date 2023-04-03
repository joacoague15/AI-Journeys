import { useEffect } from "react";
import {enemyAttackDuration} from "../../constants";

const Enemy = ({ enemyCurrentHealth, enemyTotalHealth, turn, setTurn, characterStatuses, setCharacterStatuses, enemyImage, enemyName, isEnemyHit, isEnemySpelled, isEnemyAttacking, setIsEnemyAttacking}) => {

    useEffect(() => {
        if (turn === 'enemy' && enemyCurrentHealth > 0) {
            setIsEnemyAttacking(true);
            setTimeout(() => {
                setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health - 1 });
                setIsEnemyAttacking(false);
                setTurn('player');
            }, enemyAttackDuration);
        }
    }, [turn]);

    const handleAnimation = () => {
        if (isEnemyHit)
            return 'animate__shakeX';
        else if (isEnemySpelled)
            return 'animate__flash';
        else if (isEnemyAttacking)
            return 'animate__bounce';
        return '';
    }

    return (
        <>
            <h2 style={{ color: "white", fontSize: 24, textAlign: "center", marginBottom: 10, letterSpacing: 4 }}>{enemyName}</h2>
            <img className={`animate__animated ${handleAnimation()}`} src={enemyImage} alt="enemy" style={{ maxWidth: '600px', display: "flex", textAlign: "center", margin: "auto", filter: "grayscale(100%)" }} />
            <div className="progress" style={{ backgroundColor: "black", width: "600px", margin: "auto", display: "flex" }}>
                <div style={{ width: ((enemyCurrentHealth * 100) / enemyTotalHealth) + '%', backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                    aria-valuenow={enemyCurrentHealth} aria-valuemin="0" aria-valuemax={enemyTotalHealth}>
                </div>
            </div>
        </>
    )
}

export default Enemy;