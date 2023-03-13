import door from "../images/puerta.jpg";

const Walking = ({setSituation}) => {
    return (
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <img src={door} alt="door" style={{ maxWidth: '450px', left: '50%', position: 'absolute', transform: 'translate(-50%)', zIndex: 1, filter: "grayscale(100%)" }} />
            <div style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={() => setSituation('combat')} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-arrow-left"></i>
                </button>
                <button style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={() => setSituation('combat')} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-arrow-up"></i>
                </button>
                <button style={{ fontSize: 100, backgroundColor: "black", border: "none" }} onClick={() => setSituation('combat')} type="button" className="btn btn-light">
                    <i style={{ color: "white" }} className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Walking;