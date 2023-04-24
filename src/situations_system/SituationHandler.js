import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import { useEffect } from "react";
import { cave, sound } from "../constants";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, healPerRoom, muted, setChangeSound }) => {


    useEffect(() => {
        sound.fade(1, 0, 1)
        cave.play()
        cave.mute(muted)
        setChangeSound(true)
    }, [])

    if (situation === 'walking') return <Walking setSituation={setSituation} setCharacterStatuses={setCharacterStatuses} characterStatuses={characterStatuses} healPerRoom={healPerRoom} />

    if (situation === 'combat') return <CombatHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} />
}

export default SituationHandler;