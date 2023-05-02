import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import { useEffect } from "react";
import {cave, entrance, sound} from "../constants";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, healPerRoom, muted, setChangeSound, characterClass, setText }) => {


    useEffect(() => {
        sound.fade(1, 0, 1)
        cave.play()
        cave.mute(muted)
        setChangeSound(true)
        entrance.play()
    }, [])

    if (situation === 'walking') return <Walking setSituation={setSituation} healPerRoom={healPerRoom} setText={setText} />

    if (situation === 'combat') return <CombatHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} characterClass={characterClass} />
}

export default SituationHandler;