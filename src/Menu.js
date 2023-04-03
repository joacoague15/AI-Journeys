import { useState, useEffect } from "react"
import { IDBTransactionGetAll, IDBTransactionGetFirst } from "./IndexedDB/CRUD"
import 'animate.css';
import heroCompany from './assets/company.gif'

const Initial = ({ setCharacterCreated, setNewGame }) => {
    const [data, setData] = useState()
    const [animation, setAnimation] = useState(false)
    const [modal, setModal] = useState(false)
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

    const deleteIndexedDB = async () => {
        const existingDevice = await IDBTransactionGetFirst("character")
        if (existingDevice && existingDevice.length !== 0) {
            return new Promise((res, rej) => {
                indexedDB.deleteDatabase("profile")
            })
        }
    }

    const newGameStart = () => {
        deleteIndexedDB()
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
            <h1 style={{ color: 'white', textAlign: 'center', cursor: 'default', letterSpacing: 20 }}>TYPING TALES</h1>
            {modal && <div style={{ position: 'absolute', border: '1px white solid', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20%', height: '20%' }} >
                <p style={{ color: 'white', textAlign: 'center' }}>Your previous run will be deleted</p>
                <p style={{ color: 'white', textAlign: 'center' }}>Do you want to start a new run?</p>
                <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', bottom: 0, left: '50%', transform: 'translate(-50%, -14%)', gap: '20px' }}>
                    <button style={{ width: '50%', border: '1px white solid', color: 'white' }} onClick={() => newGameStart()}>Continue</button>
                    <button style={{ width: '50%', border: '1px white solid', color: 'white' }} onClick={() => setModal(false)}>Cancel</button>
                </div>
            </div>}
            <img src={heroCompany} alt="heroes-company" style={{ width: '50%', height: '50%', marginBottom: 20 }} />
            <h2 style={{ cursor: 'pointer', color: 'white' }} className="menu" onClick={data && data.length !== 0 ? () => setModal(true) : () => newGameStart()}>New Game</h2>
            {data && data.length !== 0 ? <h2 style={{ cursor: 'pointer', color: 'white' }} className="menu" onClick={() => continueGame()}>Continue</h2> : <h2 style={{ cursor: 'default' }}>Continue</h2>}
        </div>
    )
}

export default Initial