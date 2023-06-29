import { useState, useEffect } from "react"
import { IDBDeleteDB, IDBTransactionGetAll } from "./IndexedDB/CRUD"
import { hover, sound } from "./constants";
import 'animate.css';
import madameVideo from "./assets/videos/madame.mp4";
import AudioController from "./components/AudioController";

const Initial = ({ setCharacterCreated, setNewGame, changeRangeVolume, mutedFX, changeVolume, muted, FXmuted, initialModal }) => {
    const [data, setData] = useState()
    const [animation, setAnimation] = useState(false)
    const [modal, setModal] = useState(false)

    const indexedDB = async () => {
        setData(await IDBTransactionGetAll('statuses'))
    }

    const continueGame = () => {
        setAnimation(true)
        setTimeout(() => {
            setNewGame(false)
            setCharacterCreated(true)
        }, 2000)
    }

    const newGameStart = () => {
        IDBDeleteDB()
        sound.play()
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
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <h1 className="animate__animated animate__slideInDown" style={{ color: 'white', textAlign: 'center', cursor: 'default', letterSpacing: 20 }}>TYPING TALES</h1>
            {modal && <div style={{ position: 'absolute', border: '1px white solid', top: '50%', left: '50%', borderRadius: '12px', transform: 'translate(-50%, -50%)', width: '25%', height: '20%', zIndex: 1 }} >
                <p style={{ color: 'white', textAlign: 'center', margin: '20px auto auto auto', width: '90%' }}>Your previous run will be deleted</p>
                <p style={{ color: 'white', textAlign: 'center', margin: '20px auto auto auto', width: '90%' }}>Do you want to start a new run?</p>
                <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', bottom: '10%', left: '50%', transform: 'translate(-50%, -14%)', gap: '20px' }}>
                    <button style={{ width: '50%', border: '1px white solid', borderRadius: '12px', color: 'white' }} onClick={() => setModal(false)}>Cancel</button>
                    <button style={{ width: '50%', border: '1px white solid', borderRadius: '12px', color: 'white' }} onClick={() => newGameStart()}>Continue</button>
                </div>
            </div>}
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flex: 1, marginRight: 50 }}>
                    <video style={{ borderRadius: 5 }} className="animate__animated animate__fadeInLeft" src={madameVideo} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1, marginLeft: 50, margin: "auto" }}>
                    <h2 style={{ display: "flex", cursor: 'pointer', color: 'white', fontSize: 72, margin: 50 }} onMouseOver={() => hover.play()} className="menu" onClick={data && data?.length !== 0 ? () => setModal(true) : () => newGameStart()}>New Game</h2>
                    {/*{data && data?.length !== 0 ? <h2 style={{ cursor: 'pointer', color: 'white', fontSize: 72, margin: 50 }} onMouseOver={() => hover.play()} className="menu" onClick={() => continueGame()}>Continue</h2> : <h2 style={{ cursor: 'default' }}>Continue</h2>}*/}
                </div>
            </div>
        </div>
    </>
    )
}

export default Initial