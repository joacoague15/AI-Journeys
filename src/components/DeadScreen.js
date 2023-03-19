const DeadScreen = () => {
    const skullStyle = {
        color: "white",
        opacity: 0.5,
        fontSize: 150,
        animationDuration: "10s",
        margin: 50
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="dead-screen">
            <button onClick={() => window.location.reload()} style={{ border: "none" }}><i style={skullStyle} className="fa-solid fa-skull fa-beat"></i></button>
            <p style={{ fontSize: 56, opacity: 0.5, color: "white" }}>You died</p>
        </div>
    );
}

export default DeadScreen;