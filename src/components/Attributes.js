const Attributes = ({characterAttributes, userClass}) => {
    if (userClass !== '') {
        return (
            <div style={{ margin: 'auto', width: '100%', display: "flex", flexDirection: "column" }}>
                <div style={{ margin: 'auto', paddingTop: 20, width: '100%', display: "flex", flexDirection: "row" }}>
                    <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <div style={{ width: (characterAttributes.constitution * 10) + "%", backgroundColor: "white" }} className="progress-bar progress-bar-striped progress" role="progressbar"
                         aria-valuenow={characterAttributes.constitution} aria-valuemin="0" aria-valuemax="10">
                    </div>
                </div>

                <div style={{ margin: 'auto', paddingTop: 20, width: '100%', display: "flex", flexDirection: "row" }}>
                    <svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                         className="bi bi-magic" viewBox="0 0 16 16">
                        <path
                            d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
                    </svg>
                    <div style={{ width: (characterAttributes.intelligence * 10) + "%", backgroundColor: "white" }} className="progress-bar progress-bar-striped progress" role="progressbar"
                         aria-valuenow={characterAttributes.intelligence} aria-valuemin="0" aria-valuemax="10">
                    </div>
                </div>

                <div style={{ margin: 'auto',  paddingTop: 20, width: '100%', display: "flex", flexDirection: "row" }}>
                    <i style={{ marginRight: 10, fontSize: 16 }} className="fa-solid fa-khanda"></i>
                    <div style={{ width: (characterAttributes.strength * 100) + "%", backgroundColor: "white" }} className="progress-bar progress-bar-striped progress" role="progressbar"
                         aria-valuenow={characterAttributes.strength} aria-valuemin="0" aria-valuemax="10">
                    </div>
                </div>
            </div>
        )
    }
}

export default Attributes;