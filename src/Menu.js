import { useState, useEffect } from "react"
import { IDBDeleteDB, IDBTransactionGetAll } from "./IndexedDB/CRUD"
import { hover, sound } from "./constants";
import 'animate.css';
import heroCompany from './assets/gifs/company.gif'

const Initial = ({ setCharacterCreated, setNewGame }) => {
    const [data, setData] = useState()
    const [animation, setAnimation] = useState(false)
    const [modal, setModal] = useState(false)
    const [initialModal, setInitialModal] = useState(true)

    const indexedDB = async () => {
        setData(await IDBTransactionGetAll('attributes'))
    }

    const continueGame = () => {
        setAnimation(true)
        setTimeout(() => {
            setNewGame(false)
            setCharacterCreated(true)
        }, 2000)
    }

    const welcomeModal = () => {
        sound.play()
        setInitialModal(false)
    }

    const newGameStart = () => {
        IDBDeleteDB()
        setAnimation(true)
        setTimeout(() => {
            setNewGame(false)
            setCharacterCreated(false)
        }, 2000)
    }

    useEffect(() => {
        indexedDB()
    }, [])

    return (<>

        <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className={!animation ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
            <h1 style={{ color: 'white', textAlign: 'center', cursor: 'default', letterSpacing: 20 }}>TYPING TALES</h1>
            {modal && <div style={{ position: 'absolute', borderRadius: '10px', border: '1px white solid', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20%', height: '20%' }} >
                <p style={{ color: 'white', textAlign: 'center', margin: '10px 0 0 0' }}>Your previous run will be deleted</p>
                <p style={{ color: 'white', textAlign: 'center', margin: '10px 0 0 0' }}>Do you want to start a new run?</p>
                <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', bottom: 0, left: '50%', transform: 'translate(-50%, -14%)', gap: '20px' }}>
                    <button style={{ width: '50%', border: '1px white solid', borderRadius: '10px', color: 'white' }} onMouseOver={() => hover.play()} onClick={() => newGameStart()}>Continue</button>
                    <button style={{ width: '50%', border: '1px white solid', borderRadius: '10px', color: 'white' }} onMouseOver={() => hover.play()} onClick={() => setModal(false)}>Cancel</button>
                </div>
            </div>}
            <img src={heroCompany} alt="heroes-company" style={{ width: '50%', height: '50%', marginBottom: 20 }} />
            <h2 style={initialModal ? { color: 'white', cursor: 'default' } : { cursor: 'pointer', color: 'white' }} className={initialModal ? '' : "menu"} onMouseOver={() => hover.play()} onClick={initialModal ? null : data && data?.length !== 0 ? () => setModal(true) : () => newGameStart()}>New Game</h2>
            {data && data.length !== 0 ? <h2 style={initialModal ? { color: 'white', cursor: 'default' } : { cursor: 'pointer', color: 'white' }} onMouseOver={() => hover.play()} className={initialModal ? '' : "menu"} onClick={initialModal ? null : () => continueGame()}>Continue</h2> : <h2 style={{ cursor: 'default' }}>Continue</h2>}
        </div>
        {initialModal &&
            <div style={{ borderRadius: '10px', border: 'white 1px solid', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '50px' }}>
                <h1 style={{ color: "white", textAlign: 'center' }}>Welcome to Typing Tales!</h1>
                <p style={{ color: "white", textAlign: 'center' }}>This is an adventure game that will take you through a world full of surprises and challenges. With Typing Tales, you'll have the opportunity to explore a variety of exciting stories, and best of all, each playthrough will be different.<br />
                    The game has been designed with advanced artificial intelligence, which means that the path you choose and the decisions you make will affect the final outcome. You'll need to make wise choices and pay attention to details in order to advance in the game.<br />
                    In Typing Tales, you'll have the freedom to choose your own path. You'll be able to explore different locations, interact with fascinating characters, and discover hidden objects that will help you progress.<br />
                    This game is perfect for those seeking an exciting and unique gaming experience. Get ready to immerse yourself in a world full of adventure and challenges, and discover the secrets that Typing Tales has in store for you!</p>
                <button style={{ borderRadius: '10px', border: 'white 1px solid', color: 'white', position: 'absolute', left: '50%', transform: 'translate(-50%)', fontSize: '20px' }} onMouseOver={() => hover.play()} onClick={() => welcomeModal()}>Continue</button>
            </div>}
    </>
    )
}

export default Initial