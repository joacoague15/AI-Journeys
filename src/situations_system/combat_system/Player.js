import { attackSpell, attackSword, playerAttackDuration } from "../../constants";
import {useEffect} from "react";

const Player = ({ enemyCurrentHealth, setEnemyCurrentHealth, turn, setTurn, characterStatuses, setCharacterStatuses, isEnemyHit, setIsEnemyHit, enemyDodge, setEnemyDodge, isEnemySpelled, setIsEnemySpelled, characterClass }) => {
    const SPEELL_COST = 30;

    const LIGHT_ATTACK_CHANCE = 0.8;
    const MEDIUM_ATTACK_CHANCE = 0.6;
    const HEAVY_ATTACK_CHANCE = 0.5;

    useEffect(() => {
        console.log("STATUS: ", characterStatuses)
    }, [characterStatuses])

    const useMagic = () => {
        attackSpell.play()
        setEnemyCurrentHealth(enemyCurrentHealth - (SPEELL_COST * 4));
        setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - SPEELL_COST });
        setIsEnemySpelled(true);
        setTimeout(() => {
            setIsEnemySpelled(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }

    function attack(attackType) {
        // Determine hit chance based on attack type
        let hitChance;
        if (attackType === "light") {
            hitChance = LIGHT_ATTACK_CHANCE;
        } else if (attackType === "medium") {
            hitChance = MEDIUM_ATTACK_CHANCE;
        } else if (attackType === "heavy") {
            hitChance = HEAVY_ATTACK_CHANCE;
        }

        const randomNum = Math.random();
        const isHit = randomNum < hitChance;

        if (!isHit) {
            // miss sound
            setEnemyDodge(true);

            setTimeout(() => {
                setIsEnemyHit(false);
                setEnemyDodge(false);
                setTurn('enemy');
            }, playerAttackDuration);

            return
        }

        // Otherwise, calculate the damage based on the attack type
        if (attackType === "light") {
            setIsEnemyHit(true);
            attackSword.play()
            setEnemyCurrentHealth(enemyCurrentHealth - (characterStatuses.attack / 3));
            console.log(`Dealt ${characterStatuses.attack / 3} damage!`);
        } else if (attackType === "medium") {
            setIsEnemyHit(true);
            attackSword.play()
            setEnemyCurrentHealth(enemyCurrentHealth - (characterStatuses.attack / 2));
            console.log(`Dealt ${characterStatuses.attack / 2} damage!`);
        } else if (attackType === "heavy") {
            setIsEnemyHit(true);
            attackSword.play()
            setEnemyCurrentHealth(enemyCurrentHealth - characterStatuses.attack);
            console.log(`Dealt ${characterStatuses.attack} damage!`);
        }

        setTimeout(() => {
            setIsEnemyHit(false);
            setEnemyDodge(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }

    if (characterClass === 'warrior') {
        return (
            <div style={{ width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={() => attack('light')} type="button" className="btn btn-light">
                    <i style={{ color: "grey" }} className="fa-solid fa-gavel"></i>
                    <p style={{ color: "white", fontSize: 24, textAlign: "center" }}>{LIGHT_ATTACK_CHANCE * 100}%</p>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={() => attack('medium')} type="button" className="btn btn-light">
                    <i style={{ color: "wheat" }} className="fa-solid fa-gavel"></i>
                    <p style={{ color: "white", fontSize: 24, textAlign: "center" }}>{MEDIUM_ATTACK_CHANCE * 100}%</p>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={() => attack('heavy')} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
                    <p style={{ color: "white", fontSize: 24, textAlign: "center" }}>{HEAVY_ATTACK_CHANCE * 100}%</p>
                </button>
            </div>
        )
    }

    if (characterClass === 'wizard') {
        return (
            <div style={{ width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 6 || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
            </div>
        )
    }

    if (characterClass === 'paladin') {
        return (
            <div style={{ width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={attack} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={attack} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={useMagic} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
            </div>
        )
    }
}

export default Player;