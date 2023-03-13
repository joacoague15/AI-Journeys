import enemy from "../images/enemy1.jpg";

const Enemy = ({enemyHealth, enemyActualHealth}) => {

    return (
        <>
            <div className="progress" style={{ backgroundColor: "black", width: "20%", margin: "auto", position: "absolute",  left: "50%", transform: 'translate(-50%)', top: '20%' }}>
                <div style={{ width: ((enemyActualHealth * 100)  / enemyHealth) + '%', backgroundColor: "white" }} className="progress-bar progress-bar-striped" role="progressbar"
                     aria-valuenow={enemyActualHealth} aria-valuemin="0" aria-valuemax={enemyHealth}>
                </div>
            </div>
            <img src={enemy} alt="enemy" style={{ maxWidth: '450px', left: '50%', top: '25%', position: 'absolute', transform: 'translate(-50%)', borderRadius: 2, filter: "grayscale(100%)" }} />
        </>
    )
}

export default Enemy;