import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import { useEffect } from "react";
import {cave, sound} from "../constants";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, healPerRoom, muted, setChangeSound, characterClass, setText, setLastAction }) => {


    useEffect(() => {
        sound.fade(1, 0, 1)
        cave.play()
        cave.mute(muted)
        setChangeSound(true)
    }, [])

    if (situation === 'walking') return <Walking setSituation={setSituation} healPerRoom={healPerRoom} setText={setText} />

    if (situation === 'combat') return <CombatHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} characterClass={characterClass} setLastAction={setLastAction} />
}

export default SituationHandler;