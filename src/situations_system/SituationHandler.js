import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import { useEffect } from "react";
import { cave, sound } from "../constants";
import FirstBossFight from "./combat_system/FirstBossFight";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, muted, setChangeSound, characterClass, setText, setLastAction, setStages, stages }) => {

    useEffect(() => {
        sound.fade(1, 0, 1)
        cave.play()
        cave.mute(muted)
        setChangeSound(true)
    }, [])

    if (stages > 49) {
        return <FirstBossFight stages={stages} setStages={setStages} experience={experience} setExperience={setExperience} setLastAction={setLastAction} setSituation={setSituation} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} characterClass={characterClass} />
    }
    else if (situation === 'walking') {
        return <Walking stages={stages} setStages={setStages} setSituation={setSituation} setText={setText} setCharacterStatuses={setCharacterStatuses} characterStatuses={characterStatuses}/>
    } else if (situation === 'combat') {
        return <CombatHandler stages={stages} setStages={setStages} characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} characterClass={characterClass} setLastAction={setLastAction}  />
    }
}

export default SituationHandler;
