import { useEffect } from "react";
import {enemyAttackDuration} from "../../constants";

const Enemy = ({ enemyCurrentHealth, enemyTotalHealth, enemyAttack, turn, setTurn, characterStatuses, setCharacterStatuses, enemyVideo, enemyName, isEnemyHit, isEnemySpelled, isEnemyAttacking, setIsEnemyAttacking}) => {

    useEffect(() => {
        if (turn === 'enemy' && enemyCurrentHealth > 0) {
            setIsEnemyAttacking(true);
            setTimeout(() => {
                setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health - enemyAttack });
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
        <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
            <h2 style={{ color: "white", fontSize: 32, textAlign: "center", marginBottom: 10, letterSpacing: 10 }}>{enemyName}</h2>
            <div style={{ display: "inline-block", position: "relative" }}>
                <video className={`animate__animated ${handleAnimation()}`} style={{ width: "100%", borderRadius: 5 }} src={enemyVideo} autoPlay muted={true} loop={true}>
                    Tu navegador no admite el elemento <code>video</code>.
                </video>
                <div className="progress" style={{
                    position: "absolute", bottom: 0, backgroundColor: "black", width: "100%",
                    borderRadius: "0 0 5px 5px"
                }}>
                    <div style={{ width: ((enemyCurrentHealth * 100) / enemyTotalHealth) + '%', backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                         aria-valuenow={enemyCurrentHealth} aria-valuemin="0" aria-valuemax={enemyTotalHealth}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enemy;