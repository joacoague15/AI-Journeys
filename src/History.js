const History = ({userResponses, chatGPTresponses}) => {
return (
        <div style={{ display: 'flex', flexDirection: 'column', width: "50%", color: "white", textAlign: "left", marginTop: 10, padding: 10, fontSize: 28, border: '2px solid white' }}>
            {userResponses.map((userResponse, index) => {
                return (
                    <div style={{ width: "50%" }} key={index}>
                        <p style={{ width: '100%' }}><b>DM:</b> {chatGPTresponses[index]}</p>
                        <p style={{ borderRadius: 1 }}><b>Player:</b> {userResponse}</p>
                    </div>
                )})
            }
        </div>
    );
};

export default History;