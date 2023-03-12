import Helmet from '../images/helmet.jpg'
import Boots from '../images/boots.jpg'
import Chest from '../images/chest.jpg'

const Inventory = () => {

    const squaresInventory = {
        width: '100px',
        height: '100px',
        border: '1px solid white',

    }

    const squaresWeapons = {
        width: '100px',
        height: '220px',
        border: '1px solid white',

    }

    return (
        <div style={{ position: 'absolute', bottom: '1%', right: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%', backgroundColor: 'transparent' }}>
            <h2 style={{ color: 'white', textAlign: 'center' }}>Inventory</h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: 'transparent' }}>
                <div id="leftArm" style={squaresWeapons}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '33%' }}>
                    <div id="helmet" style={squaresInventory}><img src={Helmet} style={{ objectFit: 'cover', width: '98px', height: '98px' }} alt="" /></div>
                    <div id="chest" style={squaresInventory}><img src={Chest} style={{ objectFit: 'cover', width: '98px', height: '98px' }} alt="" /></div>
                    <div id="leggins" style={squaresInventory}></div>
                    <div id="boots" style={squaresInventory}><img src={Boots} style={{ objectFit: 'cover', width: '98px', height: '98px' }} alt="" /></div>
                </div>
                <div id="righttArm" style={squaresWeapons}></div>
            </div>
        </div>
    )
}

export default Inventory