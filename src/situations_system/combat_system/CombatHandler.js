import Enemy from "./Enemy";
import {useEffect, useState} from "react";
import Player from "./Player";
import enemies from "../../HardCodedData";

const CombatHandler = ({characterStatuses, setCharacterStatuses, setSituation, experience, setExperience}) => {
    const enemyTotalHealth = enemies.lowLevel[0].health;
    const [enemyActualHealth, setEnemyActualHealth] = useState(enemyTotalHealth);
    const [turn, setTurn] = useState('player');

    useEffect(() => {
        if (enemyActualHealth <= 0) {
            setExperience(experience + 50);
            setSituation('walking');
        }
    }, [enemyActualHealth])

    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <Enemy enemyActualHealth={enemyActualHealth} enemyHealth={enemyTotalHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            <Player enemyActualHealth={enemyActualHealth} setEnemyActualHealth={setEnemyActualHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
        </div>
    )
}

export default CombatHandler;