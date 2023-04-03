import {timeoutBetweenAttacks} from "../../constants";

const Player = ({enemyCurrentHealth, setEnemyCurrentHealth, turn, setTurn, characterStatuses, setCharacterStatuses, setIsEnemyHit, setIsEnemySpelled}) => {
    const useMagic = () => {
        setEnemyCurrentHealth(enemyCurrentHealth - 3);
        setCharacterStatuses({...characterStatuses, mana: characterStatuses.mana - 3});
        setIsEnemySpelled(true);
        setTimeout(() => {
            setIsEnemySpelled(false);
        }, timeoutBetweenAttacks);
        setTurn('enemy');
    }

    const attack = () => {
        setEnemyCurrentHealth(enemyCurrentHealth - 1);
        setIsEnemyHit(true);
        setTimeout(() => {
            setIsEnemyHit(false);
        }, timeoutBetweenAttacks);
        setTurn('enemy');
    }

    return (
        <div style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button disabled={turn === 'enemy' || characterStatuses.mana < 3} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
            </button>
            <button disabled={turn === 'enemy'} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={attack} type="button" className="btn btn-light">
                <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
            </button>
        </div>
    )
}

export default Player;