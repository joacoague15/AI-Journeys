const VictoryScreen = () => {
    const dungeonStyle = {
        color: "white",
        opacity: 0.7,
        fontSize: 150,
        animationDuration: "10s",
        margin: 50
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }} className="dead-screen">
            <button onClick={() => window.location.reload()} style={{ border: "none" }}><i style={dungeonStyle} className="fa-solid fa-dungeon fa-beat"></i></button>
            <p style={{ fontSize: 56, opacity: 0.5, color: "white" }}>The labyrinth's embrace is broken, and destiny now unfurls its path.</p>
        </div>
    );
}

export default VictoryScreen;