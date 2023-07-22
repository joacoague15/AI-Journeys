import { useState } from "react"
import { IDBDeleteDB, IDBTransactionGetAll } from "./IndexedDB/CRUD"
import { hover, sound } from "./constants";
import 'animate.css';
import madameVideo from "./assets/videos/madame.mp4";
import AudioController from "./components/AudioController";
import './Menu.css';

const Initial = ({ setCharacterCreated, setNewGame, changeRangeVolume, mutedFX, changeVolume, muted, FXmuted, initialModal }) => {
    const [data, setData] = useState()
    const [animation, setAnimation] = useState(false)
    const [modal, setModal] = useState(false)

    const indexedDB = async () => {
        setData(await IDBTransactionGetAll('statuses'))
    }

    // const continueGame = () => {
    //     setAnimation(true)
    //     setTimeout(() => {
    //         setNewGame(false)
    //         setCharacterCreated(true)
    //     }, 2000)
    // }

    const newGameStart = () => {
        IDBDeleteDB()
        sound.play()
        setAnimation(true)
        setTimeout(() => {
            setNewGame(false)
            setCharacterCreated(false)
        }, 2000)
    }

    // useEffect(() => {
    //     indexedDB()
    // }, [])

    return (
        <div id="menu-container" className={!animation ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
            <AudioController initialModal={initialModal} changeRangeVolume={changeRangeVolume} mutedFX={mutedFX} changeVolume={changeVolume} muted={muted} FXmuted={FXmuted} />
            <h1 className="animate__animated animate__slideInDown" id="title">AI Journeys</h1>
            {modal && <div id="modal-container">
                <p id="confirmation-sentence">Are you ready to enter the dungeon?</p>
                <div id="options-container">
                    <button className="option" onClick={() => setModal(false)}>Yes</button>
                    <button className="option" onClick={() => newGameStart()}>No</button>
                </div>
            </div>}
            <div id="new-game-video-container">
                <div id="video-container">
                    <video id="madame-video" className="animate__animated animate__fadeInLeft" src={madameVideo} autoPlay muted={true} loop={true}>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
                <div id="new-game-container">
                    <h2 id="new-game-title" onMouseOver={() => hover.play()} className="menu" onClick={data && data?.length !== 0 ? () => setModal(true) : () => newGameStart()}>New Game</h2>
                    {/*{data && data?.length !== 0 ? <h2 style={{ cursor: 'pointer', color: 'white', fontSize: 72, margin: 50 }} onMouseOver={() => hover.play()} className="menu" onClick={() => continueGame()}>Continue</h2> : <h2 style={{ cursor: 'default' }}>Continue</h2>}*/}
                </div>
            </div>
        </div>
    )
}

export default Initial
