import Enemy from "./Enemy";
import Player from "./Player";
import { useEffect, useState } from "react";
import { handleAttackResult } from "../../Handlers";
import { Enemies } from "../../HardCodedData";

const FirstBossFight = ({ experience, setExperience, stages, setStages, setLastAction, setSituation, characterStatuses, setCharacterStatuses, characterClass }) => {
    const [bossCurrentHealth, setBossCurrentHealth] = useState(null);

    const [bossName, setBossName] = useState("");
    const [bossTotalHealth, setBossTotalHealth] = useState(null);
    const [bossAttack, setBossAttack] = useState(0);
    const [bossVideo, setBossVideo] = useState("");
    const [turn, setTurn] = useState('player');
    const [boss, _] = useState(Enemies.bosses[Math.floor(Math.random() * Enemies.bosses.length)])
    // Animation states
    const [isBossHit, setIsBossHit] = useState(false);
    const [bossDodge, setBossDodge] = useState(false);
    const [isBossSpelled, setIsBossSpelled] = useState(false);
    const [isBossAttacking, setIsBossAttacking] = useState(false);

    useEffect(() => {
        if (bossCurrentHealth <= 0 && bossTotalHealth !== null) {
            setBossTotalHealth(null);
            setExperience(experience + 50);
            setStages(stages + 1);
            setTimeout(() => {
                setLastAction('');
            }, 1000)
            // SET SITUATION T0 WIN
            setSituation('walking');
        }
    }, [bossCurrentHealth])

    useEffect(() => {
        if (bossTotalHealth === null) {
            setBossName(boss.name);
            setBossTotalHealth(boss.health);
            setBossCurrentHealth(boss.health);
            setBossVideo(boss.video);
            setLastAction('Be ready...');
            const attackResult = handleAttackResult(boss.attackMin, boss.attackMax , boss.critChance, boss.critDmg);
            setBossAttack(attackResult[0]);
        }
    }, [bossTotalHealth])

    return (
        <div id="handler-container">
            <Enemy enemyCurrentHealth={bossCurrentHealth} enemyTotalHealth={bossTotalHealth} enemyAttackMin= {boss.attackMin} enemyAttackMax= {boss.attackMax} enemyAttack={bossAttack} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyVideo={bossVideo} enemyName={bossName} isEnemyHit={isBossHit} enemyDodge={bossDodge} isEnemySpelled={isBossSpelled} isEnemyAttacking={isBossAttacking} setIsEnemyAttacking={setIsBossAttacking} setLastAction={setLastAction} characterClass={characterClass} muted={false} loop={false} />
            <Player enemyCurrentHealth={bossCurrentHealth} setEnemyCurrentHealth={setBossCurrentHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyDodge={bossDodge} setEnemyDodge={setBossDodge} isEnemyHit={isBossHit} setIsEnemyHit={setIsBossHit} isEnemySpelled={isBossSpelled} setIsEnemySpelled={setIsBossSpelled} setIsEnemyAttacking={setIsBossAttacking} characterClass={characterClass} setLastAction={setLastAction} />
        </div>
    )
}

export default FirstBossFight;