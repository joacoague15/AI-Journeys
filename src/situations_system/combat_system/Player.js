/* eslint-disable react-hooks/rules-of-hooks */
import {attackMissed, attackSword, fire, lighting, meditate, playerAttackDuration} from "../../constants";
import { handleAttackResult } from "../../Handlers";
import './Player.css';

const Player = ({ enemyCurrentHealth, setEnemyCurrentHealth, turn, setTurn, characterStatuses, setCharacterStatuses, isEnemyHit, setIsEnemyHit, enemyDodge, setEnemyDodge, isEnemySpelled, setIsEnemySpelled, characterClass, setLastAction }) => {
    const SPEELL_COST_LIGHTNING = 30;
    const SPEELL_COST_fIRE = 10;

    const LIGHT_ATTACK_CHANCE = 0.8;
    const MEDIUM_ATTACK_CHANCE = 0.6;
    const HEAVY_ATTACK_CHANCE = 0.5;

    const FIRE_SPELL = 0.8;
    const LIGHTNING_SPELL = 0.5;
    const MEDITATE = 1;

    const useMagic = (attackType) => {
        let hitChance;

        if (attackType === 'lightning')
            hitChance = LIGHTNING_SPELL
        else if (attackType === "fire")
            hitChance = FIRE_SPELL;
        else if (attackType === "meditate")
            hitChance = MEDITATE;

        const randomNum = Math.random();
        const isHit = randomNum <= hitChance;

        if (!isHit) {
            attackMissed.play()
            setEnemyDodge(true);
            setLastAction('You missed!');

            if (attackType === 'lightning')
                setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - SPEELL_COST_LIGHTNING })
            else if (attackType === "fire")
                setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - SPEELL_COST_fIRE })

            setTimeout(() => {
                setIsEnemyHit(false);
                setEnemyDodge(false);
                setTurn('enemy');
            }, playerAttackDuration);

            return
        }

        if (attackType === "lightning") {
            lighting.play();
            setIsEnemyHit(true);
            const attackResult = handleAttackResult(characterStatuses.attackMin, characterStatuses.attackMax, characterStatuses.critChance, characterStatuses.critDmg);
            setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - SPEELL_COST_LIGHTNING })
            setEnemyCurrentHealth(enemyCurrentHealth - attackResult[0]);

            if (attackResult[1])
                setLastAction(`You crit for ${attackResult[0]}!`);
            else
                setLastAction(`You zap for ${attackResult[0]} damage!`);
        } else if (attackType === "fire") {
            fire.play();
            setIsEnemyHit(true);
            const attackResult = handleAttackResult(characterStatuses.attackMin, characterStatuses.attackMax, characterStatuses.critChance, characterStatuses.critDmg);
            setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - SPEELL_COST_fIRE })
            setEnemyCurrentHealth(enemyCurrentHealth - attackResult[0]);

            if (attackResult[1])
                setLastAction(`You crit for ${attackResult[0]}!`);
            else
                setLastAction(`You burn for ${attackResult[0]} damage!`);
        } else if (attackType === "meditate") {
            meditate.play();
            setLastAction(`You restore 5 mana and 5 health!`);
            setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana + 5, health: characterStatuses.health + 5 })
        }

        setTimeout(() => {
            setIsEnemyHit(false);
            setEnemyDodge(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }

    /*const useMagic = () => {
        attackSpell.play()
        setEnemyCurrentHealth(enemyCurrentHealth - (SPEELL_COST * 4));
        setCharacterStatuses({ ...characterStatuses, mana: characterStatuses.mana - SPEELL_COST });
        setIsEnemySpelled(true);
        setTimeout(() => {
            setIsEnemySpelled(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }*/

    const attack = (attackType) => {
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
        const isHit = randomNum <= hitChance;

        if (!isHit) {
            attackMissed.play()
            setEnemyDodge(true);
            setLastAction('You missed!');

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
            attackSword.play();
            const attackResult = handleAttackResult(characterStatuses.attackMin, characterStatuses.attackMin + 10, characterStatuses.critChance, characterStatuses.critDmg);
            setEnemyCurrentHealth(enemyCurrentHealth - attackResult[0]);
            if (attackResult[1]) setLastAction(`You crit for ${attackResult[0]}!`);
            else setLastAction(`You hit for ${attackResult[0]} damage!`);
        } else if (attackType === "medium") {
            setIsEnemyHit(true);
            attackSword.play();
            const attackResult = handleAttackResult(characterStatuses.attackMin + 10 , characterStatuses.attackMax - 10, characterStatuses.critChance, characterStatuses.critDmg);
            setEnemyCurrentHealth(enemyCurrentHealth - attackResult[0]);
            if (attackResult[1]) setLastAction(`You crit for ${attackResult[0]}!`);
            else setLastAction(`You hit for ${attackResult[0]} damage!`);
        } else if (attackType === "heavy") {
            setIsEnemyHit(true);
            attackSword.play();
            const attackResult = handleAttackResult(characterStatuses.attackMax - 10, characterStatuses.attackMax, characterStatuses.critChance, characterStatuses.critDmg);
            setEnemyCurrentHealth(enemyCurrentHealth - attackResult[0]);
            if (attackResult[1]) setLastAction(`You crit for ${attackResult[0]}!`);
            else setLastAction(`You hit for ${attackResult[0]} damage!`);
        }

        setTimeout(() => {
            setIsEnemyHit(false);
            setEnemyDodge(false);
            setTurn('enemy');
        }, playerAttackDuration);
    }

    if (characterClass === 'warrior') {
        return (
            <div className="character-container">
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} onClick={() => attack('light')} type="button" className="btn btn-light action-button">
                    <i style={{ color: "grey" }} className="fa-solid fa-gavel"></i>
                    <p className="chance-indicator">{LIGHT_ATTACK_CHANCE * 100}%</p>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} onClick={() => attack('medium')} type="button" className="btn btn-light action-button">
                    <i style={{ color: "wheat" }} className="fa-solid fa-gavel"></i>
                    <p className="chance-indicator">{MEDIUM_ATTACK_CHANCE * 100}%</p>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} onClick={() => attack('heavy')} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
                    <p className="chance-indicator">{HEAVY_ATTACK_CHANCE * 100}%</p>
                </button>
            </div>
        )
    }

    if (characterClass === 'wizard') {
        return (
            <div className="character-container">
                <button disabled={turn === 'enemy' || characterStatuses.mana < SPEELL_COST_LIGHTNING || isEnemyHit || isEnemySpelled || enemyDodge} onClick={() => useMagic('fire')} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-fire"></i>
                    <p className="chance-indicator">{FIRE_SPELL * 100}%</p>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < SPEELL_COST_LIGHTNING || isEnemyHit || isEnemySpelled || enemyDodge} onClick={() => useMagic('lightning')} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                    <p className="chance-indicator">{LIGHTNING_SPELL * 100}%</p>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled || enemyDodge} onClick={() => useMagic('meditate')} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-sharp fa-solid fa-hand-sparkles"></i>
                    <p className="chance-indicator">{MEDITATE * 100}%</p>
                </button>
            </div>
        )
    }

    if (characterClass === 'paladin') {
        return (
            <div className="character-container">
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled} onClick={attack} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
                </button>
                <button disabled={turn === 'enemy' || isEnemyHit || isEnemySpelled} onClick={attack} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-gavel"></i>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} onClick={useMagic} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
                <button disabled={turn === 'enemy' || characterStatuses.mana < 3 || isEnemyHit || isEnemySpelled} onClick={useMagic} type="button" className="btn btn-light action-button">
                    <i style={{ color: "white" }} className="fa-solid fa-bolt-lightning"></i>
                </button>
            </div>
        )
    }
}

export default Player;