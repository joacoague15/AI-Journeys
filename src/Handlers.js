export const handleAttackResult = (attack) => {
    const minAttack = Math.floor(attack / 1.5);
    const maxAttack = Math.floor(attack * 1.5);

    return Math.floor(Math.random() * (maxAttack - minAttack)  + minAttack);
}