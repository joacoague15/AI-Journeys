const Player = ({enemyActualHealth, setEnemyActualHealth}) => {
    const useMagic = () => {
        setEnemyActualHealth(enemyActualHealth - 3);
    }

    const attack = () => {
        setEnemyActualHealth(enemyActualHealth - 1);
    }

    return (
        <div style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
            </button>
            <button style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={attack} type="button" className="btn btn-light">
                <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
            </button>
        </div>
    )
}

export default Player;