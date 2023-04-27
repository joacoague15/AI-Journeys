import Enemy from "./Enemy";
import { useEffect, useState } from "react";
import Player from "./Player";
import { Enemies } from "../../HardCodedData";

const CombatHandler = ({ characterStatuses, setCharacterStatuses, setSituation, experience, setExperience, characterClass }) => {

    const [enemyName, setEnemyName] = useState("");
    const [enemyTotalHealth, setEnemyTotalHealth] = useState(null);
    const [enemyAttack, setEnemyAttack] = useState(0);
    const [enemyVideo, setEnemyVideo] = useState("");
    const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(enemyTotalHealth);
    const [turn, setTurn] = useState('player');

    // Animation states
    const [isEnemyHit, setIsEnemyHit] = useState(false);
    const [isEnemySpelled, setIsEnemySpelled] = useState(false);
    const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);

    useEffect(() => {
        if (enemyCurrentHealth <= 0 && enemyTotalHealth !== null) {
            setEnemyTotalHealth(null);
            setExperience(experience + 50);
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
            setEnemyAttack(randomEnemy.attack);
        }
    }, [enemyTotalHealth])

    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '90%' }}>
            <Enemy enemyCurrentHealth={enemyCurrentHealth} enemyTotalHealth={enemyTotalHealth} setEnemyTotalHealth={setEnemyTotalHealth} enemyAttack={enemyAttack} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyVideo={enemyVideo} enemyName={enemyName} isEnemyHit={isEnemyHit} isEnemySpelled={isEnemySpelled} isEnemyAttacking={isEnemyAttacking} setIsEnemyAttacking={setIsEnemyAttacking} />
            <Player enemyCurrentHealth={enemyCurrentHealth} setEnemyCurrentHealth={setEnemyCurrentHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} isEnemyHit={isEnemyHit} setIsEnemyHit={setIsEnemyHit} isEnemySpelled={isEnemySpelled} setIsEnemySpelled={setIsEnemySpelled} setIsEnemyAttacking={setIsEnemyAttacking} characterClass={characterClass} />
        </div>
    )
}

export default CombatHandler;