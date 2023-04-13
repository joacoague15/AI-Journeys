import {useEffect, useState} from "react";

const ExperienceIndicator = ({experience, setPoints, currentLevel, setCurrentLevel}) => {
    const experienceOfEachLevel = 100;
    const level = Math.ceil(experience / 100);
    const [levelUpAnimation, setLevelUpAnimation] = useState(false);

    const experienceOfPreviousLevels = (level - 1) * experienceOfEachLevel;
    const experienceOfCurrentLevel = experience - experienceOfPreviousLevels;
    const percentageOfCurrentLevel = (experienceOfCurrentLevel / experienceOfEachLevel) * 100;

    useEffect(() => {
        if (currentLevel < level) {
            setLevelUpAnimation(true);
            setInterval(() => {
                setLevelUpAnimation(false);
            }, 1000);
            setPoints(points => points + (2 * (level - currentLevel)));
            setCurrentLevel(level);
        }
    }, [currentLevel, level, setPoints])

    return (
        <>
            <span style={{ color: "white", fontSize: 28, margin: "auto" }}>Level {level}</span>
            <div className={`progress animate__animated ${levelUpAnimation ? 'animate__heartBeat' : ''}`} style={{ backgroundColor: "black", width: "100%", marginTop: 10 }}>
                <div style={{ width: percentageOfCurrentLevel + "%", backgroundColor: "white" }} className="progress-bar progress-bar-striped progress" role="progressbar"
                     aria-valuenow={Math.ceil(experience / level)} aria-valuemin="0" aria-valuemax={experienceOfEachLevel}>
                </div>
            </div>
        </>
    )
}

export default ExperienceIndicator;