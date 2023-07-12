import { footstep } from "../constants";
import { useEffect, useState } from "react";
import { Scenarios } from "../HardCodedData";
import ReactHowler from 'react-howler';
import './Walking.css';

const Walking = ({ setSituation, setText, setStages, stages }) => {
    const [img, setImg] = useState();
    const [playing, setPlaying] = useState(false);
    const [randomScenario, _] = useState(Scenarios.walking[Math.floor(Math.random() * Scenarios.walking.length)]);
    const [characterDialog, setCharacterDialog] = useState(null);
    const [soundReady, setSoundReady] = useState(false);


    const situationHandler = (place) => {
        setText('');
        setStages(stages + 1)
        footstep.play()
        setSituation(place)
    }

    useEffect(() => {
        const randomSpeakAndDialog = Math.floor(Math.random() * randomScenario.text.length);
        setText(randomScenario.text[randomSpeakAndDialog]);
        setImg(randomScenario.img);
        setCharacterDialog(randomScenario.speak[randomSpeakAndDialog]);

        setPlaying(true);
    }, []);

    useEffect(() => {
        if (characterDialog !== null)
            setSoundReady(true);
    }, [characterDialog])

    return (
        <div id="walking-container">
            <img src={img} alt="img-walking" id="img-walking" />
            <div id="actions-container">
                {soundReady && <ReactHowler
                    src={characterDialog}
                    playing={playing}
                />}
                <button id="action-button" onClick={() => situationHandler('combat')} type="button" className="btn btn-light">
                    <i className="fa-solid fa-arrow-up action-icon"></i>
                </button>
            </div>
        </div>
    )
}

export default Walking;