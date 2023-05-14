import React from "react";

const LastAction = ({ lastAction }) => {

        return <p className="animate__animated animate__fadeInLeft" style={{ position: "absolute", width: '100%', color: "white", fontSize: 32, top: "12%", textAlign: 'center' }}>{lastAction}</p>
}

export default LastAction;