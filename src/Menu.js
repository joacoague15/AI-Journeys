import { useState, useEffect } from "react"
import { IDBTransactionGetAll } from "./IndexedDB/CRUD"
import 'animate.css';

const Initial = ({ setCharacterCreated, setNewGame }) => {
    const [data, setData] = useState()
    const [animation, setAnimation] = useState(false)
    const indexedDB = async () => {
        setData(await IDBTransactionGetAll('character'))
    }

    const continueGame = () => {
        setAnimation(true)
        setTimeout(() => {
            setNewGame(false)
            setCharacterCreated(true)
        }, 2000)
    }

    const newGameStart = () => {
        setAnimation(true)
        setTimeout(() => {
            setNewGame(false)
            setCharacterCreated(false)
        }, 2000)
    }

    useEffect(() => {
        indexedDB()
    }, [])

    return (
        <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className={!animation ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
            <h1 style={{ color: 'white', textAlign: 'center', cursor: 'default' }}>Typing tales</h1>
            <h2 style={{ cursor: 'pointer', color: 'white' }} className="menu" onClick={() => newGameStart()}>New Game</h2>
            {data.length !== 0 ? <h2 style={{ cursor: 'pointer', color: 'white' }} className="menu" onClick={() => continueGame()}>Continue</h2> : <h2 style={{ cursor: 'default' }}>Continue</h2>}
        </div>
    )
}

export default Initial