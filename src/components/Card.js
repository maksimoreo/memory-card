import '../styles/Card.css';

function decodeNumber(number, maxNumber) {
    const binDigits = maxNumber.toString(2).length;
    return number.toString(2).padStart(binDigits, '0').split('');
}

function distributeToRows(elements) {
    const rowSize = Math.sqrt(elements.length);
    const rowsNumber = elements.length / rowSize;
    const result = [];

    for (let i = 0; i < rowsNumber; i++) {
        result.push(elements.slice(i * rowsNumber, (i + 1) * rowsNumber));
    }

    return result;
}

export default function Card(props) {
    const handleClick = () => props.onClick(props.id);

    const squareElements = decodeNumber(props.id, props.maxId).map((code, index) => (
        <div
            key={index}
            className={'card-smol-square ' + (code === '1' ? 'card-smol-square-filled' : '')}
        />
    ));

    const squareRows = distributeToRows(squareElements).map((squares, index) => (
        <div key={index} className="card-square-row">
            {squares}
        </div>
    ));

    return (
        <div className="card-container">
            <button className="card" onClick={handleClick}>
                <div className="card-bg">{squareRows}</div>
            </button>
        </div>
    );
}
