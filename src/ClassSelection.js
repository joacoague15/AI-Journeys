const ClassSelection = ({userName, setUserClass}) => {
    return (
        <div>
            <h2 style={{ fontSize: 32, color: "white" }}>Character class of {userName}</h2>
            <button style={{ margin: 20, fontSize: 48 }} onClick={() => setUserClass('warrior')} type="button" className="btn btn-light">Warrior</button>
            <button style={{ margin: 20, fontSize: 48 }} onClick={() => setUserClass('archer')} type="button" className="btn btn-light">Archer</button>
            <button style={{ margin: 20, fontSize: 48 }} onClick={() => setUserClass('mage')} type="button" className="btn btn-light">Mage</button>
        </div>
    )
}

export default ClassSelection;