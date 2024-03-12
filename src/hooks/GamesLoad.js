import { useEffect, useState } from "react";
import { getGames } from "../controllers/videoGame";

export default function useGames() {
     // Estado para almacenar la lista de juegos
    const [games, setGames] = useState(null);
    useEffect(() => {
        // Función asíncrona para cargar los juegos
        async function loadGames() {
            const games = await getGames();
            setGames(games);}
        loadGames();
    }, []);
    return games;
}
