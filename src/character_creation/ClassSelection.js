import warriorClassImg from "../assets/images/warrior_class.jpg";
import wizardClassImg from "../assets/images/wizard_class.png";
// import paladinClassImg from "../assets/images/paladin_class.jpg";
import { useState } from "react";
import {
    wizardPresentingHimself,
    paladinPresentingHimself,
    warriorPresentingHerself
} from "../constants";
import { hover } from "../constants";
import './ClassSelection.css';

const ClassSelection = ({ setUserClass }) => {
    const [isWarriorHovering, setIsWarriorHovering] = useState(false);
    const [isWizardHovering, setIsWizardHovering] = useState(false);
    // const [isPaladinHovering, setIsPaladinHovering] = useState(false);

    const [isWarriorSelected, setIsWarriorSelected] = useState(false);
    const [isWizardSelected, setIsWizardSelected] = useState(false);
    const [isPaladinSelected, setIsPaladinSelected] = useState(false);

    const selectClass = (classSelection) => {
        if (classSelection === 'warrior') {
            !isWarriorSelected && warriorPresentingHerself.play()
            setIsWarriorSelected(true);
            setIsWizardSelected(false);
            setIsPaladinSelected(false);
            setUserClass(classSelection)
        }

        if (classSelection === 'wizard') {
            !isWizardSelected && wizardPresentingHimself.play()
            setIsWizardSelected(true);
            setIsWarriorSelected(false);
            setIsPaladinSelected(false);
            setUserClass(classSelection);
        }

        if (classSelection === 'paladin') {
            !isPaladinSelected && paladinPresentingHimself.play()
            setIsPaladinSelected(true);
            setIsWarriorSelected(false);
            setIsWizardSelected(false);
            setUserClass(classSelection);
        }
    }

    return (
        <div className={"animate__animated animate__fadeIn class-container"}>
            <button onMouseEnter={() => setIsWarriorHovering(true)}
                onMouseLeave={() => setIsWarriorHovering(false)}
                onClick={() => selectClass('warrior')} type="button" className="btn btn-light class-selection-button">
                <img onMouseOver={() => { hover.play() }} className={isWarriorHovering || isWarriorSelected ? 'hover-class-img' : 'default-class-img'}
                    src={warriorClassImg} alt="warrior-img" />
            </button>
            <button onMouseEnter={() => setIsWizardHovering(true)}
                onMouseLeave={() => setIsWizardHovering(false)}
                onClick={() => selectClass('wizard')} type="button" className="btn btn-light class-selection-button">
                <img onMouseOver={() => { hover.play() }}
                     className={isWizardHovering || isWizardSelected ? 'hover-class-img' : 'default-class-img'}
                    src={wizardClassImg} alt="mage-img" />
            </button>
            {/*<button disabled={true} onMouseEnter={() => setIsPaladinHovering(true)}*/}
            {/*    onMouseLeave={() => setIsPaladinHovering(false)}*/}
            {/*    onClick={() => selectClass('paladin')} type="button" className="btn btn-light class-selection-button">*/}
            {/*    <img onMouseOver={() => { hover.play() }} className={isPaladinHovering || isPaladinSelected ? 'hover-class-img' : 'default-class-img'} src={paladinClassImg} alt="paladin-img" />*/}
            {/*</button>*/}
        </div>
    )
}

export default ClassSelection;
