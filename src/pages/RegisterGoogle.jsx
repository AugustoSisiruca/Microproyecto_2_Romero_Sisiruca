import useGames from "../hooks/GamesLoad";
import { useUser } from "../context/user";
import { useEffect, useState } from "react";
import { signInWithGoogle } from "../controllers/auth";
import CardGame from "../components/CardGame";
import { createUser } from "../controllers/usuario";
import { useNavigate } from "react-router-dom";

const RegisterGoogle = () => {
    const navigate = useNavigate();
    const games = useGames();
    const user = useUser();
    const [selectedGame, setSelectedGame] = useState("");
    const [username, setUsername] = useState("");

function separateNameSurname(fullName) {
    const parts = fullName.split(' ');
    const name = parts[0];
    const surname = parts.slice(1).join(' ');
    return { name, surname };
}

const handleGoogleLogin = async () => {const user = await signInWithGoogle();}
useEffect(() => {
    if (user) {
    const { name, surname } = separateNameSurname(user.displayName);
    const game = selectedGame;
    const createUserAndNavigate = async () => {
        await createUser(name, surname, username, user.email, "password", game);
        navigate("/HomePage"); }; 
        createUserAndNavigate();}
    }, [user, navigate, selectedGame, username]);

return (
    <section>
        Ingrese su nombre de usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <div>
        {games ? (
        <div>
            {games?.map((prop) => (
            <CardGame key={prop.id} id={prop.id} titulo={prop.data.titulo} juego={selectedGame} setJuego={setSelectedGame} />
            ))}
        </div>
        ) : (
        "..Procesando"
        )}
        </div>
        <button onClick={handleGoogleLogin} disabled={!selectedGame || !username}>
        Registarse con Google
        </button>
    </section>
    );
};

export default RegisterGoogle;
