const NameSelection = ({ setUserName }) => {

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: 20 }} className="animate__animated animate__fadeIn">
            <h2 style={{ fontSize: 32, color: "white", border: "none" }}>Who's typing?</h2>
            <input style={{ border: "1px solid white", width: "100%", color: "white", textAlign: "center", fontSize: 42, letterSpacing: 16 }} onChange={e => setUserName(e.target.value)} />
        </div>
    )
}

export default NameSelection;