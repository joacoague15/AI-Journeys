import Enemy from "./Enemy";
import { useEffect, useState } from "react";
import Player from "./Player";
import { Enemies } from "../../HardCodedData";
import { handleAttackResult } from "../../Handlers";

const CombatHandler = ({ characterStatuses, setCharacterStatuses, setSituation, experience, setExperience, characterClass, setLastAction, setStages, stages }) => {

    const [enemyName, setEnemyName] = useState("");
    const [enemyTotalHealth, setEnemyTotalHealth] = useState(null);
    const [enemyAttack, setEnemyAttack] = useState(0);
    const [enemyVideo, setEnemyVideo] = useState("");
    const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(enemyTotalHealth);
    const [turn, setTurn] = useState('player');

    // Animation states
    const [isEnemyHit, setIsEnemyHit] = useState(false);
    const [enemyDodge, setEnemyDodge] = useState(false);
    const [isEnemySpelled, setIsEnemySpelled] = useState(false);
    const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);

    useEffect(() => {
        if (enemyCurrentHealth <= 0 && enemyTotalHealth !== null) {
            setEnemyTotalHealth(null);
            setExperience(experience + 50);
            setStages(stages + 1);
            setLastAction('');
            setSituation('walking');
        }
    }, [enemyCurrentHealth])

    useEffect(() => {
        if (enemyTotalHealth === null) {
            const randomEnemy = Enemies.lowLevel[Math.floor(Math.random() * Enemies.lowLevel.length)];
            setEnemyName(randomEnemy.name);
            setEnemyTotalHealth(randomEnemy.health);
            setEnemyCurrentHealth(randomEnemy.health);
            setEnemyVideo(randomEnemy.video);
            setLastAction('Combat started!');

            const attackResult = handleAttackResult(randomEnemy.attack, 1, 0);
            setEnemyAttack(attackResult);
        }
    }, [enemyTotalHealth])

    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <Enemy enemyCurrentHealth={enemyCurrentHealth} enemyTotalHealth={enemyTotalHealth} setEnemyTotalHealth={setEnemyTotalHealth} enemyAttack={enemyAttack} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyVideo={enemyVideo} enemyName={enemyName} isEnemyHit={isEnemyHit} enemyDodge={enemyDodge} isEnemySpelled={isEnemySpelled} isEnemyAttacking={isEnemyAttacking} setIsEnemyAttacking={setIsEnemyAttacking} setLastAction={setLastAction} />
            <Player enemyCurrentHealth={enemyCurrentHealth} setEnemyCurrentHealth={setEnemyCurrentHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyDodge={enemyDodge} setEnemyDodge={setEnemyDodge} isEnemyHit={isEnemyHit} setIsEnemyHit={setIsEnemyHit} isEnemySpelled={isEnemySpelled} setIsEnemySpelled={setIsEnemySpelled} setIsEnemyAttacking={setIsEnemyAttacking} characterClass={characterClass} setLastAction={setLastAction} />
        </div>
    )
}

export default CombatHandler;