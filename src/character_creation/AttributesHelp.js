import {useState} from "react";

const AttributesHelp = () => {
    const [modalOpened, setModalOpened] = useState(false);

    if (!modalOpened) return (
        <svg onClick={() => setModalOpened(!modalOpened)} style={{ position: "fixed", bottom: 20, right: 20, width: 70, height: 70, backgroundColor: "black", borderRadius: "50%", boxShadow: "0 2px 5px rgba(0,0,0,0.2)", zIndex: 2, cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-question-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
        </svg>
    )

    return (
        <div>

            <svg onClick={() => setModalOpened(!modalOpened)} style={{ position: "fixed", bottom: 20, right: 20, width: 70, height: 70, backgroundColor: "black", borderRadius: "50%", boxShadow: "0 2px 5px rgba(0,0,0,0.2)", zIndex: 2, cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
                 viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>

            {modalOpened && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, fontSize: 28 }}>
                    <div style={{ width: "50%", height: "50%", backgroundColor: "black", borderRadius: 10, padding: 20, border: "2px solid white" }}>
                        <h1 style={{ textAlign: "center", letterSpacing: 15 }}>Attributes</h1>
                        <p><b>Strength:</b> Your strength determines how much damage you can do with melee weapons.</p>
                        <p><b>Dexterity:</b> Your dexterity determines how much damage you can do with ranged weapons.</p>
                        <p><b>Constitution:</b> Your constitution determines how much health you have.</p>
                        <p><b>Intelligence:</b> Your intelligence determines how much mana you have.</p>
                        <p><b>Wisdom:</b> Your wisdom determines your ability to perceive hidden details, detect danger, and make good judgments </p>
                        <p><b>Charisma:</b> Your charisma determines how you good can persuade others, negotiate effectively, and make a favorable impression on people you meet.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AttributesHelp;