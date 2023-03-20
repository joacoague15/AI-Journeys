import { useState } from "react";
import { LootInventory } from "../HardCodedData"

const Loot = ({ setSituation }) => {
    const [loot, setLoot] = useState(LootInventory)
    const [modal, setModal] = useState(false)

    console.log(loot)
    const getItem = () => {
        const min = 0
        let wichLoot = Math.round(Math.random())
        if (!modal) {
            setModal(true)
            if (wichLoot === 1) return setLoot(loot.weapons[Math.floor(Math.random() * (13 - min) + min)]);
            return setLoot(loot.armor[Math.floor(Math.random() * (8 - min) + min)])
        }
    }

    return (
        <><div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <img src="https://image.lexica.art/full_jpg/0e8f0411-65cb-4839-be04-e34aae1fedf6" alt="lootchest" style={{ maxWidth: '75%', left: '50%', position: 'absolute', transform: 'translate(-50%)', zIndex: 1, borderRadius: '12px' }} onClick={() => getItem()} />
            {modal && (<div style={{ backgroundColor: 'black', position: 'absolute', zIndex: 2, left: '50%', bottom: '40%', transform: 'translate(-50%)', textAlign: 'center', border: '1px white solid', padding: '30px' }}>
                <p style={{ backgroundColor: 'transparent', color: 'white' }}>
                    Found: {loot.name}</p>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', gap: '10px' }}>
                    <img src={loot.src} alt={loot.name} style={{ maxWidth: '100%', borderRadius: '12px' }} />
                    <button style={{ backgroundColor: 'white', padding: ' 5px 10px', borderRadius: '12px' }} onClick={() => setSituation('walking')}>Grab item</button>
                </div>
            </div>)}
        </div>
        </>
    )
}

export default Loot