import warriorClassImg from "../assets/images/warrior_class.jpg";
import wizardClassImg from "../assets/images/wizard_class.png";
import paladinClassImg from "../assets/images/paladin_class.jpg";
import {useEffect, useState} from "react";
import {
    wizardPresentingHimself,
    paladinPresentingHimself,
    warriorPresentingHerself, classPresentation
} from "../constants";
import { hover } from "../constants";

const ClassSelection = ({ setUserClass }) => {
    const [isWarriorHovering, setIsWarriorHovering] = useState(false);
    const [isWizardHovering, setIsWizardHovering] = useState(false);
    const [isPaladinHovering, setIsPaladinHovering] = useState(false);

    const [isWarriorSelected, setIsWarriorSelected] = useState(false);
    const [isWizardSelected, setIsWizardSelected] = useState(false);
    const [isPaladinSelected, setIsPaladinSelected] = useState(false);

    useEffect(() => {
        classPresentation.play();
    }, [])


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
        <div className={"animate__animated animate__fadeIn"} style={{ display: "flex", flexDirection: "row", width: "100%", marginTop: 20, justifyContent: "center", alignItems: "center", }}>
            <button onMouseEnter={() => setIsWarriorHovering(true)}
                onMouseLeave={() => setIsWarriorHovering(false)}
                style={{ fontSize: 48, backgroundColor: "black", border: "none", margin: "0 20px" }} onClick={() => selectClass('warrior')} type="button" className="btn btn-light"><img onMouseOver={() => { hover.play() }} style={{ width: 300, border: "2px solid white", filter: isWarriorHovering || isWarriorSelected ? "none" : "grayscale(100%)", transition: "filter 0.3s ease-in-out" }} src={warriorClassImg} alt="warrior-img" /></button>
            <button onMouseEnter={() => setIsWizardHovering(true)}
                onMouseLeave={() => setIsWizardHovering(false)} style={{ fontSize: 48, backgroundColor: "black", border: "none", margin: "0 20px" }} onClick={() => selectClass('wizard')} type="button" className="btn btn-light"><img onMouseOver={() => { hover.play() }} style={{ width: 300, border: "2px solid white", filter: isWizardHovering || isWizardSelected ? "none" : "grayscale(100%)", transition: "filter 0.3s ease-in-out" }} src={wizardClassImg} alt="mage-img" /></button>
            <button onMouseEnter={() => setIsPaladinHovering(true)}
                onMouseLeave={() => setIsPaladinHovering(false)}
                style={{ fontSize: 48, backgroundColor: "black", border: "none", margin: "0 20px" }} onClick={() => selectClass('paladin')} type="button" className="btn btn-light"><img onMouseOver={() => { hover.play() }} style={{ width: 300, border: "2px solid white", filter: isPaladinHovering || isPaladinSelected ? "none" : "grayscale(100%)", transition: "filter 0.3s ease-in-out" }} src={paladinClassImg} alt="paladin-img" /></button>
        </div>
    )
}

export default ClassSelection;