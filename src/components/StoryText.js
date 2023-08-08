import React from "react";
import './StoryText.css';

const StoryText = ({ text }) => {
    return (
        <div className="animate__animated animate__fadeIn story-container">
            <p>{text}</p>
        </div>
    )
}

export default StoryText;
