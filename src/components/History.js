const History = ({ userResponses, chatGPTresponses }) => {
    return (
        <div style={{ position: 'absolute', left: 5, bottom: 10, color: "white", textAlign: "left", marginTop: 10, padding: 10, fontSize: 28, border: '2px solid white', height: '80%', overflow: 'auto', width: '25%' }}>
            {userResponses.map((userResponse, index) => {
                return (
                    <div style={{ width: "100%" }} key={index}>
                        <p style={{ width: '100%' }}><b>DM:</b> {chatGPTresponses[index]}</p>
                        <p style={{ borderRadius: 1 }}><b>Player:</b> {userResponse}</p>
                    </div>
                )
            })
            }
        </div>
    );
};

export default History;