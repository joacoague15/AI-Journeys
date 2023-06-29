export const handleAttackResult = (attackMin, attackMax, critChance, critDmg) => {
    const finalAttack = Math.floor(Math.random() * (attackMin - attackMax) + attackMax);
    const probability = Math.floor(Math.random() * 100)

    if (critChance < probability) return [finalAttack];
    return [Math.floor(finalAttack * (1 + (critDmg / 100))), 'crit']
}

export const handleBlockResult = (dodge) => {
    const randomNumber = Math.floor(Math.random() * 100);
     return randomNumber <= dodge;
}