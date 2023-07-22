import './NameSelection.css';

const NameSelection = ({ setUserName }) => {

    const onChange = (e) => {
        if (e.target.value.length < 18)
            setUserName(e.target.value);
    }

    return (
        <div className="animate__animated animate__fadeIn name-selection-container">
            <h2 id="title">Who's typing?</h2>
            <input id="name-input" onChange={e => onChange(e)} />
        </div>
    )
}

export default NameSelection;
