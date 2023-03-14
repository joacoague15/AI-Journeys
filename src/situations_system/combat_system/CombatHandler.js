import Enemy from "./Enemy";
import {useEffect, useState} from "react";
import Player from "./Player";

const CombatHandler = ({characterStatuses, setCharacterStatuses, setSituation, experience, setExperience}) => {
    const enemyHealth = 10;
    const [enemyActualHealth, setEnemyActualHealth] = useState(enemyHealth);
    const [turn, setTurn] = useState('player');

    useEffect(() => {
        if (enemyActualHealth <= 0) {
            setExperience(experience + 50);
            setSituation('walking');
        }
    }, [enemyActualHealth])

    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <Enemy enemyActualHealth={enemyActualHealth} enemyHealth={enemyHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
            <Player enemyActualHealth={enemyActualHealth} setEnemyActualHealth={setEnemyActualHealth} turn={turn} setTurn={setTurn} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} />
        </div>
    )
}

export default CombatHandler;