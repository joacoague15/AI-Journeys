import Enemy from "./Enemy";
import { useEffect, useState } from "react";
import Player from "./Player";
import { Enemies } from "../../HardCodedData";

const CombatHandler = ({ characterStatuses, setCharacterStatuses, setSituation, experience, setExperience }) => {

    const [enemyName, setEnemyName] = useState("");
    const [enemyTotalHealth, setEnemyTotalHealth] = useState(null);
    const [enemyImage, setEnemyImage] = useState("");
    const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(enemyTotalHealth);
    const [turn, setTurn] = useState('player');

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
            setEnemyImage(randomEnemy.image);
        }
    }, [enemyTotalHealth])

    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <Enemy enemyCurrentHealth={enemyCurrentHealth} enemyTotalHealth={enemyTotalHealth} setEnemyTotalHealth={setEnemyTotalHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} enemyImage={enemyImage} enemyName={enemyName} />
            <Player enemyCurrentHealth={enemyCurrentHealth} setEnemyCurrentHealth={setEnemyCurrentHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
        </div>
    )
}

export default CombatHandler;