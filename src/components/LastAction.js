import React from "react";

const LastAction = ({ lastAction }) => {

        return <p className="animate__animated animate__fadeInLeft" style={{ position: "absolute", display: "flex", color: "white", fontSize: 32, top: "40%", left: "15%"}}>{lastAction}</p>
}

export default LastAction;