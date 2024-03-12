import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserByEmail } from "../controllers/usuario";
import CardGame from "./CardGame";
import { searchGameByNumber } from "../controllers/videoGame";
import { useUser } from "../context/user";

export default function GroupCard({ id, name, description, videoGames }) {

    const user = useUser();
    const [games, setGames] = useState([]);

    const fetchGames = async () => {
        const results = await Promise.all(videoGames.map(async (element) => {
            const game = await searchGameByNumber(element);
            setGames(prevGames => [...prevGames, game]);
            return game;
        }));

        return results;
    }

    useEffect(() => {
        const fetchAndLoadGames = async () => { await fetchGames();}
        fetchAndLoadGames();});

    return (
        <div >
            <section>
            <div>{id}</div>
            <div>{name}</div>
            <div>{description}</div>
            </section>
            <div>
                {games?.map(({ title, description, gender }) => (
                    <CardGame key={title + name} title={title} description={description} gender={gender}></CardGame>
                ))}
            </div>
            <button onClick={() => { getUserByEmail(user.email, id) }}>Subscribe</button>
            <Link to={"/HomePage"}><button>Volver al Menu</button></Link>
        </div>
    );
}
