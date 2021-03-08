export default function Card(props) {
    const handleClick = () => props.onClick(props.id);

    return <button onClick={handleClick}>{props.id}</button>
}
