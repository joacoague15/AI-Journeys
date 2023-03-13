import Enemy from "./Enemy";
import {useState} from "react";
import Player from "./Player";

const CombatHandler = () => {
    const enemyHealth = 10;
    const [enemyActualHealth, setEnemyActualHealth] = useState(enemyHealth);

    return (
        <>
            <Enemy enemyActualHealth={enemyActualHealth} enemyHealth={enemyHealth} />
            <Player enemyActualHealth={enemyActualHealth} setEnemyActualHealth={setEnemyActualHealth} />
        </>
    )
}

export default CombatHandler;