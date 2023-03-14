const ExperienceIndicator = ({experience}) => {
    const experienceOfEachLevel = 100;
    const level = Math.ceil(experience / 100);

    const experienceOfPreviousLevels = (level - 1) * experienceOfEachLevel;
    const experienceOfCurrentLevel = experience - experienceOfPreviousLevels;
    const percentageOfCurrentLevel = (experienceOfCurrentLevel / experienceOfEachLevel) * 100;

    return (
        <>
            <span style={{ color: "white", fontSize: 20, margin: "auto" }}>{level}</span>
            <div className="progress" style={{ backgroundColor: "black", width: "100%" }}>
                <div style={{ width: percentageOfCurrentLevel + "%", backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                     aria-valuenow={Math.ceil(experience / level)} aria-valuemin="0" aria-valuemax={experienceOfEachLevel}>
                </div>
            </div>
        </>
    )
}

export default ExperienceIndicator;