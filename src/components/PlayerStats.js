import React from 'react'

function PlayerStats({ characterClass, characterStatuses }) {
    return (
        <div style={{ position: 'absolute', bottom: '2%', color: 'white' }}>
            <h2 style={{ marginLeft: '30px' }}>Stats</h2>
            <ul style={{ listStyle: 'none', fontSize: '20px' }}>
                <li>{characterClass === 'wizard' && 'Magic '}Attack: {characterStatuses.attackMin} - {characterStatuses.attackMax}</li>
                {/*{characterClass === 'wizard' ? <li>Dodge: {characterStatuses.dodge}%</li> : <li>Parry: {characterStatuses.dodge}%</li>}*/}
                {/*<li>Crit dmg: {characterStatuses.critDmg}%</li>*/}
                {/*<li>Crit chance: {characterStatuses.critChance}%</li>*/}
            </ul>
        </div>
    )
}

export default PlayerStats