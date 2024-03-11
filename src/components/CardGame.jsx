export default function GameCard({ title, description, gender, setGame }) {
    const handleClick = (title) => {
    setGame(title);
    };
    return (
    <div style={{ boxShadow: "20px 10px 10px white" }} onClick={(ev) => {handleClick(ev.currentTarget.textContent);}}>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{gender}</h3>
    </div>
    );
}