import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";
import FirstBossFight from "./combat_system/FirstBossFight";

const SituationHandler = ({ situation, setSituation, characterStatuses, setCharacterStatuses, experience, setExperience, currentLevel, characterClass, setText, setLastAction, setStages, stages }) => {

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
