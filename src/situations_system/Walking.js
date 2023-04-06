import door from "../images/puerta.jpg";

const Walking = ({ setSituation, audioPlay, healPerRoom }) => {

    const situationHandler = (place) => {
        healPerRoom()
        audioPlay()
        setSituation(place)
    }

    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>

            <img src={door} alt="door" style={{ maxWidth: '65%', left: '50%', position: 'absolute', transform: 'translate(-50%)', zIndex: 1, filter: "grayscale(100%)" }} />
            <div style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button style={{ fontSize: 100, backgroundColor: "transparent", border: "none", zIndex: 10 }} onClick={() => situationHandler('loot')} type="button" className="btn btn-light">
                    <i style={{ color: "white", backgroundColor: "transparent" }} className="fa-solid fa-arrow-left"></i>
                </button>
                <button style={{ fontSize: 100, backgroundColor: "transparent", border: "none", zIndex: 10 }} onClick={() => situationHandler('combat')} type="button" className="btn btn-light">
                    <i style={{ color: "white", backgroundColor: "transparent" }} className="fa-solid fa-arrow-up"></i>
                </button>
                <button style={{ fontSize: 100, backgroundColor: "transparent", border: "none", zIndex: 10 }} onClick={() => situationHandler('walking')} type="button" className="btn btn-light">
                    <i style={{ color: "white", backgroundColor: "transparent" }} className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Walking;