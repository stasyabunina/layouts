import "../App.css";

function IconSwitch({ icon, onSwitch }) {
    return (
        <div className="icon-wrapper">
            <button className="icon-btn" type="button" onClick={() => onSwitch(icon)}>
                <i class="material-icons">{icon}</i>
            </button>
        </div>
    )
}

export default IconSwitch;