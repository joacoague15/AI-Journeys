import { attackSpell, attackSword, playerAttackDuration } from "../../constants";

const Player = ({ enemyCurrentHealth, setEnemyCurrentHealth, turn, setTurn, characterStatuses, setCharacterStatuses, isEnemyHit, setIsEnemyHit, isEnemySpelled, setIsEnemySpelled }) => {
    const useMagic = () => {
        attackSpell.play()
        setEnemyCurrentHealth(enemyCurrentHealth - 3);
        setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - 3 });
        setIsEnemySpelled(true);
        setTimeout(() => {
            setIsEnemySpelled(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }

    const attack = () => {
        attackSword.play()
        setEnemyCurrentHealth(enemyCurrentHealth - 1);
        setIsEnemyHit(true);
        setTimeout(() => {
            setIsEnemyHit(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }

    return (
        <div style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
            </button>
            <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={attack} type="button" className="btn btn-light">
                <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
            </button>
        </div>
    )
}

export default Player;