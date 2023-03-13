import CombatHandler from "./combat_system/CombatHandler";
import Walking from "./Walking";

const SituationHandler = ({situation, setSituation, characterStatuses, setCharacterStatuses}) => {

    if (situation === 'walking') return <Walking setSituation={setSituation}/>

    if (situation === 'combat') return <CombatHandler characterStatuses={characterStatuses} setCharacterStatuses={setCharacterStatuses} setSituation={setSituation} />
}

export default SituationHandler;