import { useEffect, useState } from "react";
import { IDBTransactionGetAll } from "./IndexedDB/CRUD";

const CharacterStatus = ({ characterStatuses, setCharacterStatuses, characterClass }) => {
    const { health, mana } = characterStatuses;

    useEffect(() => {
        IDBTransactionGetAll('statuses').then((data) => {
            setCharacterStatuses({
                health: data[0].health,
                attackMin: data[0].attackMin,
                attackMax: data[0].attackMax,
                mana: data[0].mana,
                dodge: data[0].dodge,
                critChance: data[0].critChance,
                critDmg: data[0].critDmg,
            });
        })

    }, [setCharacterStatuses]);

    const manaDisplay = () => {
        if (characterClass !== 'warrior') {
            return (
                <div style={{ margin: 15 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                         className="bi bi-magic" viewBox="0 0 16 16">
                        <path
                            d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
                    </svg>
                    <p style={{ color: "white", fontSize: 28 }}>{mana}</p>
                </div>
            )
        }
    }

    if (health >= 60) {
        return (
            <div className="animate__animated animate__flipInX" style={{ position: "absolute", display: "flex", top: 10, left: 10 }}>
                <div style={{ margin: 15 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    <p style={{ color: "white", fontSize: 28 }}>{health} </p>
                </div>
                {manaDisplay()}
            </div>
        )
    }

    if (health >= 30) {
        return (
            <div style={{ position: "absolute", display: "flex", top: 10, left: 10 }}>
                <div style={{ margin: 15 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi
                        bi-heartbreak-fill" viewBox="0 0 16 16">
                        <path
                            d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z" />
                    </svg>
                    <p style={{ color: "white", fontSize: 28 }}>{health} </p>
                </div>
                {manaDisplay()}
            </div>
        )
    }

    if (health >= 10) {
        return (
            <div style={{ position: "absolute", display: "flex", top: 10, left: 10 }}>
                <div style={{ margin: 15 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                        className="bi bi-heart-half" viewBox="0 0 16 16">
                        <path
                            d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <p style={{ color: "white", fontSize: 28 }}>{health} </p>
                </div>
                {manaDisplay()}
            </div>
        )
    }

    return (
        <div style={{ position: "absolute", display: "flex", top: 10, left: 10 }}>
            <div style={{ margin: 15 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white"
                    className="bi bi-activity" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                </svg>
                <p style={{ color: "white", fontSize: 28 }}>{health} </p>
            </div>
            {manaDisplay()}
        </div>
    )
}

export default CharacterStatus;