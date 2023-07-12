import { useEffect } from "react";
import {attackBlocked, attackMissed, attackSword, enemyAttackDuration} from "../../constants";
import { handleBlockResult } from "../../Handlers";
import './Enemy.css';

const Enemy = ({ enemyCurrentHealth, enemyTotalHealth, enemyAttack, turn, setTurn, characterStatuses, setCharacterStatuses, enemyVideo, isEnemyHit, enemyDodge, isEnemySpelled, isEnemyAttacking, setIsEnemyAttacking, setLastAction, enemyAttackMin, enemyAttackMax, characterClass }) => {

    const blockEffectDependingOnClass = () => {
            if (characterClass === 'warrior') {
                setLastAction('You blocked the attack!');
                attackBlocked.play();
            }
            else if (characterClass === 'wizard') {
                setLastAction('You dodged the attack!');
                attackMissed.play();
            }
    }

    useEffect(() => {
        if (turn === 'enemy' && enemyCurrentHealth > 0) {
            setIsEnemyAttacking(true);
            setTimeout(() => {
                const playerBlocks = handleBlockResult(characterStatuses.dodge);

                if (playerBlocks) {
                    blockEffectDependingOnClass();
                }
                else {
                    setLastAction(`Enemy dealt ${enemyAttack} damage!`);
                    setCharacterStatuses({ ...characterStatuses, health: characterStatuses.health - enemyAttack });
                    attackSword.play();
                }

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

    return (
        <div id="enemy-container">
            <div id="enemy-status-container">
                <h2 id="enemy-health">
                    <svg id="health-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                        className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    {Math.ceil(enemyCurrentHealth)}
                </h2>
                <h2 id="enemy-attack">
                    <i id="attack-icon" className="fa-solid fa-gavel"></i>{enemyAttackMin}-{enemyAttackMax}
                </h2>
            </div>
            <div id="enemy-display-container">
                <video className={`animate__animated ${handleAnimation()} enemy-video`} src={enemyVideo} autoPlay muted={true} loop={true}>
                    Tu navegador no admite el elemento <code>video</code>.
                </video>
                <div className="progress progress-container">
                    <div style={{ width: ((enemyCurrentHealth * 100) / enemyTotalHealth) + '%', backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                        aria-valuenow={enemyCurrentHealth} aria-valuemin="0" aria-valuemax={enemyTotalHealth}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enemy;
