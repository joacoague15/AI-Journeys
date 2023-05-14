export const handleAttackResult = (attack, critChance, critDmg) => {
    const minAttack = Math.floor(attack / 1.5);
    const maxAttack = Math.floor(attack * 1.5);
    const finalAttack = Math.floor(Math.random() * (maxAttack - minAttack) + minAttack);
    const probability = Math.floor(Math.random() * (100))
    if (critChance < probability) return [finalAttack];
    return [Math.floor(finalAttack * (1 + (critDmg / 100))), 'crit']
}

export const handleBlockResult = (dodge) => {
    const randomNumber = Math.random();
    return randomNumber <= (dodge / 100);
}