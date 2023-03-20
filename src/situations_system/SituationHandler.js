import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import Loot from "./Loot"

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel }) => {

    if (situation === 'walking') return <Walking setSituation={setSituation} />

    if (situation === 'loot') return <Loot setSituation={setSituation} />

    if (situation === 'combat') return <CombatHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} experience={experience} setExperience={setExperience} currentLevel={currentLevel} />
}

export default SituationHandler;