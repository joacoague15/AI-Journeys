export const handleAttackResult = (attack, critChance, critDmg) => {
    const minAttack = Math.floor(attack / 1.5);
    const maxAttack = Math.floor(attack * 1.5);
    const finalAttack = Math.floor(Math.random() * (maxAttack - minAttack) + minAttack);
    const probability = Math.floor(Math.random() * (100))
    if (critChance < probability) return finalAttack;
    return finalAttack * (1 + (critDmg / 100))
}

export const handleBlockResult = () => {
    const randomNumber = Math.random();
    return randomNumber <= 0.2;
}