import Enemy from "./Enemy";
import { useEffect, useState } from "react";
import Player from "./Player";
import { Enemies } from "../../HardCodedData";
import { handleAttackResult } from "../../Handlers";
import './CombatHandler.css';

const CombatHandler = ({ characterStatuses, setCharacterStatuses, setSituation, experience, setExperience, characterClass, setLastAction, setStages, stages, healPerRoom }) => {

    const [enemyName, setEnemyName] = useState("");
    const [enemyTotalHealth, setEnemyTotalHealth] = useState(null);
    const [enemyAttack, setEnemyAttack] = useState(0);
    const [enemyVideo, setEnemyVideo] = useState("");
    const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(enemyTotalHealth);
    const [turn, setTurn] = useState('player');
    const [enemy, setEnemy] = useState(Enemies.lowLevel[Math.floor(Math.random() * Enemies.lowLevel.length)])
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
            setTimeout(() => {
                setLastAction('');
            }, 1000)
            setSituation('walking');
        }
    }, [enemyCurrentHealth])

    useEffect(() => {
        if (enemyTotalHealth === null) {
            setEnemyName(enemy.name);
            setEnemyTotalHealth(enemy.health);
            setEnemyCurrentHealth(enemy.health);
            setEnemyVideo(enemy.video);
            setLastAction('Be ready...');
            const attackResult = handleAttackResult(enemy.attackMin, enemy.attackMax , enemy.critChance, enemy.critDmg);
            setEnemyAttack(attackResult[0]);
        }
    }, [enemyTotalHealth])

    return (
        <div id="handler-container">
            <Enemy enemyCurrentHealth={enemyCurrentHealth} enemyTotalHealth={enemyTotalHealth} enemyAttackMin= {enemy.attackMin} enemyAttackMax= {enemy.attackMax} setEnemyTotalHealth={setEnemyTotalHealth} enemyAttack={enemyAttack} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyVideo={enemyVideo} enemyName={enemyName} isEnemyHit={isEnemyHit} enemyDodge={enemyDodge} isEnemySpelled={isEnemySpelled} isEnemyAttacking={isEnemyAttacking} setIsEnemyAttacking={setIsEnemyAttacking} setLastAction={setLastAction} characterClass={characterClass} />
            <Player enemyCurrentHealth={enemyCurrentHealth} setEnemyCurrentHealth={setEnemyCurrentHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyDodge={enemyDodge} setEnemyDodge={setEnemyDodge} isEnemyHit={isEnemyHit} setIsEnemyHit={setIsEnemyHit} isEnemySpelled={isEnemySpelled} setIsEnemySpelled={setIsEnemySpelled} setIsEnemyAttacking={setIsEnemyAttacking} characterClass={characterClass} setLastAction={setLastAction} />
        </div>
    )
}

export default CombatHandler;