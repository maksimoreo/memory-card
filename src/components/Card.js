import '../styles/Card.css';

export default function Card(props) {
    const handleClick = () => props.onClick(props.id);

    return (
        <div className="card-container">
            <button className="card" onClick={handleClick}>
                <div className="card-bg">
                    <span className="card-text">{props.id}</span>
                </div>
            </button>
        </div>
    );
}
