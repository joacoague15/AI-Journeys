import {useState} from "react";

const CharacterStatus = () => {
    const [health, setHealth] = useState(10);

    if (health >= 8) {
        return (
            <div style={{position: "absolute", top: 10, left: 10}}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                         className="bi bi-heart-fill"
                         viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <p style={{color: "white", fontSize: 28}}>{health}</p>
                </div>
            </div>
        )
    }

    if (health >= 6) {
        return (
            <div style={{position: "absolute", top: 10, left: 10}}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi
                        bi-heartbreak-fill" viewBox="0 0 16 16">
                        <path
                            d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/>
                    </svg>
                    <p style={{color: "white", fontSize: 28}}>{health}</p>
                </div>
            </div>
        )
    }

    if (health >= 4) {
        return (
            <div style={{position: "absolute", top: 10, left: 10}}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                         className="bi bi-heart-half" viewBox="0 0 16 16">
                        <path
                            d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <p style={{color: "white", fontSize: 28}}>{health}</p>
                </div>
            </div>
        )
    }

        return (
            <div style={{position: "absolute", top: 10, left: 10}}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                         className="bi bi-activity" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                    </svg>
                    <p style={{color: "white", fontSize: 28}}>{health}</p>
                </div>
            </div>
        )
}

export default CharacterStatus;