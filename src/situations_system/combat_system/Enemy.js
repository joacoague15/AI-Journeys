import { useEffect } from "react";
import {attackBlocked, enemyAttackDuration} from "../../constants";
import {handleBlockResult} from "../../Handlers";

const Enemy = ({ enemyCurrentHealth, enemyTotalHealth, enemyAttack, turn, setTurn, characterStatuses, setCharacterStatuses, enemyVideo, isEnemyHit, enemyDodge, isEnemySpelled, isEnemyAttacking, setIsEnemyAttacking}) => {

    useEffect(() => {
        if (turn === 'enemy' && enemyCurrentHealth > 0) {
            setIsEnemyAttacking(true);
            setTimeout(() => {
                const playerBlocks = handleBlockResult();

                if (playerBlocks)
                    attackBlocked.play();
                else
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
        else if (enemyDodge)
            return 'animate__swing';
        return '';
    }

    const minAttack = Math.floor(enemyAttack / 1.5);
    const maxAttack = Math.floor(enemyAttack * 1.5);

    return (
        <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h2 style={{ color: "white", fontSize: 32, textAlign: "center", marginBottom: 10, letterSpacing: 10 }}>
                    <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                         className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    {Math.ceil(enemyCurrentHealth)}
                </h2>
                <h2 style={{ color: "white", fontSize: 32, textAlign: "center", marginBottom: 10, marginLeft: 20, letterSpacing: 10 }}>
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>{minAttack}-{maxAttack}
                </h2>
            </div>
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
