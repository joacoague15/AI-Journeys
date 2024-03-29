import Enemy from "./Enemy";
import Player from "./Player";
import { useContext, useEffect, useState } from "react";
import { handleAttackResult } from "../../Handlers";
import { Enemies } from "../../HardCodedData";
import VictoryContext from "../../contexts/VictoryContext";
import {boss_battle} from "../../constants";

const FirstBossFight = ({ experience, setExperience, stages, setStages, setLastAction, setSituation, characterStatuses, setCharacterStatuses, characterClass }) => {
    const [bossName, setBossName] = useState("");
    const [bossTotalHealth, setBossTotalHealth] = useState(null);
    const [bossCurrentHealth, setBossCurrentHealth] = useState(null);
    const [bossAttack, setBossAttack] = useState(0);
    const [bossVideo, setBossVideo] = useState("");
    const [turn, setTurn] = useState('player');
    const [boss, _] = useState(Enemies.bosses[Math.floor(Math.random() * Enemies.bosses.length)])
    // Animation states
    const [isBossHit, setIsBossHit] = useState(false);
    const [bossDodge, setBossDodge] = useState(false);
    const [isBossSpelled, setIsBossSpelled] = useState(false);
    const [isBossAttacking, setIsBossAttacking] = useState(false);

    const [, setVictory] = useContext(VictoryContext);

    useEffect(() => {
        if (bossCurrentHealth <= 0 && bossTotalHealth !== null) {
            setBossTotalHealth(null);
            setExperience(experience + 50);
            setStages(stages + 1);
            setTimeout(() => {
                setLastAction('');
            }, 1000)
            // SET SITUATION T0 WIN
            boss_battle.stop();
            setSituation('walking');
        }
    }, [bossCurrentHealth])

    useEffect(() => {
        boss_battle.play();
    }, []);

    useEffect(() => {
        if (bossTotalHealth === null) {
            setBossName(boss.name);
            setBossTotalHealth(boss.health);
            setBossCurrentHealth(boss.health);
            setBossVideo(boss.videos[0]);
            setLastAction('Be ready...');
            const attackResult = handleAttackResult(boss.attackMin, boss.attackMax , boss.critChance, boss.critDmg);
            setBossAttack(attackResult[0]);
        }
        if (bossCurrentHealth && bossCurrentHealth < 400) {
            // Boss is injured
            setBossVideo(boss.videos[1]);
        }
        if (bossCurrentHealth && bossCurrentHealth < 300) {
            // Boss is starting to worry
            setBossVideo(boss.videos[2]);
        }
        if (bossCurrentHealth && bossCurrentHealth < 200) {
            // Boss is furious
            setBossVideo(boss.videos[3]);
        }
        if (bossCurrentHealth && bossCurrentHealth < 100) {
            // Boss is in agony
            console.log(bossCurrentHealth);
            setBossVideo(boss.videos[4]);
        }
        if (bossCurrentHealth && bossCurrentHealth < 1) {
            setVictory(true);
        }
    }, [boss.attackMax, boss.attackMin, boss.critChance, boss.critDmg, boss.health, boss.name, boss.videos, bossCurrentHealth, bossTotalHealth, setLastAction, setVictory])

    return (
        <div id="handler-container">
            <Enemy enemyCurrentHealth={bossCurrentHealth} enemyTotalHealth={bossTotalHealth} enemyAttackMin= {boss.attackMin} enemyAttackMax= {boss.attackMax} enemyAttack={bossAttack} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyVideo={bossVideo} enemyName={bossName} isEnemyHit={isBossHit} enemyDodge={bossDodge} isEnemySpelled={isBossSpelled} isEnemyAttacking={isBossAttacking} setIsEnemyAttacking={setIsBossAttacking} setLastAction={setLastAction} characterClass={characterClass} muted={false} loop={false} />
            <Player enemyCurrentHealth={bossCurrentHealth} setEnemyCurrentHealth={setBossCurrentHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyDodge={bossDodge} setEnemyDodge={setBossDodge} isEnemyHit={isBossHit} setIsEnemyHit={setIsBossHit} isEnemySpelled={isBossSpelled} setIsEnemySpelled={setIsBossSpelled} setIsEnemyAttacking={setIsBossAttacking} characterClass={characterClass} setLastAction={setLastAction} />
        </div>
    )
}

export default FirstBossFight;