import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import Loot from "./Loot"
import { useEffect } from "react";
import { cave, sound } from "../constants";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, healPerRoom }) => {

    useEffect(() => {
        sound.stop()
        cave.play()
    }, [])

    if (situation === 'walking') return <Walking setSituation={setSituation} setCharacterStatuses={setCharacterStatuses} characterStatuses={characterStatuses} healPerRoom={healPerRoom} />

    if (situation === 'loot') return <Loot setSituation={setSituation} />

    if (situation === 'combat') return <CombatHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} />
}

export default SituationHandler;