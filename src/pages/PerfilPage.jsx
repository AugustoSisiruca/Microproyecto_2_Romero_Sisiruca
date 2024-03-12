import { useEffect, useState } from "react"
import { useUser } from "../context/user"
import { Link } from "react-router-dom"
import { getUserByEmail, changeUserInfoByEmail } from "../controllers/usuario"
import AdminGroup from "../components/AdminGroup"
//import useGames from "../hooks/GamesLoad"
//import CardGame from "../components/CardGame"
import styles from './PerfilPage.module.css';

export default function Profile() {
    const currentUser = useUser()
 //   const games = useGames()
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [game, setGame] = useState("")
    const [mostrarJuegosP, setMostrarJuegosP] = useState(false)
    const [userGroups, setUserGroups] = useState(null)
    
    useEffect(() => {
        if (currentUser) {
            const fetchUserData = async () => {                
                const usuario = await getUserByEmail(currentUser.email)
                setNombre(usuario.Nombre)
                setApellido(usuario.Apellido)
                setGame(usuario.juego)
                setUserGroups(usuario.grupos)
            }
            fetchUserData()
        }
    }, [currentUser])

    const handleMostrarOcultarJuegos = () => {
        setMostrarJuegosP(!mostrarJuegosP)
    }

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Ingresa tu nombre:</h1>
        <input className={styles.input} value={nombre} onChange={e => setNombre(e.target.value)} />
    
        <div>{currentUser ? (<div>{currentUser.email}</div>) : ("..loading")}</div>
    
        <h1 className={styles.title}>Ingresa tu apellido:</h1>
        <input className={styles.input} value={apellido} onChange={e => setApellido(e.target.value)} />
    
        <h1 className={styles.title}>Users Game:</h1>
        <h2>{game}</h2>
    
        <button className={styles.button} onClick={handleMostrarOcultarJuegos}>
            {mostrarJuegosP ? 'Esconder Juegos' : 'Selecciona tu juego favorito'}
        </button>
    
        {/* {mostrarJuegosP && (
            <div className={styles.gamesContainer}>
                {games ? (
                    <div>
                        {games?.map((gameProp) => (
                            <CardGame key={gameProp.id} id={gameProp.id} titulo={gameProp.data.titulo} juego={game} setJuego={setGame} />
                        ))}
                    </div>) : (<h2>Loading...</h2>)}
            </div>
        )} */}
    
        <button className={styles.button} onClick={() => {changeUserInfoByEmail(currentUser.email, nombre, apellido, game)}}>
            Change user information
        </button>
        <Link to={"/HomePage"} className={styles.linkButton}>
            <button className={styles.button}>Volver al HomePage</button>
        </Link>
    
        <div className={styles.groupContainer}>
            {userGroups ? (
                userGroups.map((group) => (
                    <AdminGroup key={group} id={group} grupos={group}></AdminGroup>
                ))
            ) : (
                "Loading"
            )}
        </div>
    </div>
    )  
}
