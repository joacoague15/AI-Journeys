import React, { useState } from "react";
import { hover } from "../constants";

const ImageWithHover = ({ src, alt }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseOver={() => hover.play()}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    filter: isHovering ? "none" : "grayscale(100%)",
                    transition: "filter 0.3s ease-in-out",
                    display: "block",
                    maxWidth: "100%",
                    height: "auto",
                }}
            />
        </div>
    );
}

export default ImageWithHover;