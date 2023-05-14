import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import { useEffect } from "react";
import { cave, sound } from "../constants";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, healPerRoom, muted, setChangeSound, characterClass, setText, setLastAction, setStages, stages }) => {

    useEffect(() => {
        sound.fade(1, 0, 1)
        cave.play()
        cave.mute(muted)
        setChangeSound(true)
    }, [])

    if (situation === 'walking') return <Walking stages={stages} setStages={setStages} setSituation={setSituation} healPerRoom={healPerRoom} setText={setText} />

    if (situation === 'combat') return <CombatHandler stages={stages} setStages={setStages} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} characterClass={characterClass} setLastAction={setLastAction} />
}

export default SituationHandler;