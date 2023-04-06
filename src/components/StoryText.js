import React from "react";

const StoryText = ({ chatGPTresponse }) => {
    return (
        <div className="animate__animated animate__fadeIn" style={{ width: "25%", color: "white", display: "flex", textAlign: "center", margin: 'auto', fontSize: 32, paddingTop: '20px', alignItems: "flex-end" }}>
            <p style={{ borderRadius: 1, width: "100%", margin: "auto", fontSize: 16, alignItems: "flex-end", alignContent: "flex-end" }}>{chatGPTresponse}</p>
        </div>
    )
}

export default StoryText;