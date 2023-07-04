import { footstep } from "../constants";
import { useEffect, useState } from "react";
import { Scenarios } from "../HardCodedData";
import ReactHowler from 'react-howler';

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
        <div style={{ width: '35%', position: 'absolute', left: '50%', bottom: 10, transform: 'translate(-50%)', height: '80%' }}>
            <img src={img} alt="img-walking" style={{ width: 700, left: '50%', border: "1px solid white", position: 'absolute', transform: 'translate(-50%)', zIndex: 1 }} />
            <div style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'transparent', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                {soundReady && <ReactHowler
                    src={characterDialog}
                    playing={playing}
                />}
                <button style={{ fontSize: 100, backgroundColor: "transparent", border: "none", zIndex: 10 }} onClick={() => situationHandler('combat')} type="button" className="btn btn-light">
                    <i style={{ color: "white", backgroundColor: "transparent" }} className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export default Walking;