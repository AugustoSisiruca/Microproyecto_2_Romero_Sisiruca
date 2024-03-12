import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useUser} from "../context/user";
import { createUser } from "../controllers/usuario";
import {createUserWithEmail, signInWithGoogle} from "../controllers/auth";
import CardGame from "../components/CardGame";
import useGames from "../hooks/GamesLoad";
import styles from './RegisterPage.module.css'

export default function RegisterPage(){
    const navigate= useNavigate()
    const user= useUser()
    const juegos = useGames()
    

    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [videoGame,setJuego] = useState("")


    const handleSignin= async ()=> {
        const user = await createUserWithEmail(email,password)
        if(user !=null){ 
            await createUser(name,lastName,username,email,password,videoGame)
        }else{
            alert("¡Ingrese su correo y contraseña!")
        }

    }


    const handleLogingGoogle= async ()=> {
        const user = await signInWithGoogle() 
        console.log(user)} 
    useEffect(()=>{if(user){navigate("/HomePage")}},[user,navigate])
    return (
    <div className={styles.container}>
        <section>
            <h1 className={styles.title}>Ingrese su Nombre:</h1>
            <input className={styles.input} value={name} onChange={e => setName(e.target.value)} />
    
            <h1 className={styles.title}>Ingrese su Apellido:</h1>
            <input className={styles.input} value={lastName} onChange={e => setLastName(e.target.value)} />
    
            <h1 className={styles.title}>Ingrese su Email:</h1>
            <input className={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
    
            <h1 className={styles.title}>Ingrese su nombre de usuario:</h1>
            <input className={styles.input} value={username} onChange={e => setUsername(e.target.value)} />
    
            <h1 className={styles.title}>Ingrese su contraseña del usuario:</h1>
            <input className={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
        </section>
    
        {juegos?.map(({ id, titulo }) => (
            <CardGame key={titulo + id} id={id} titulo={titulo} juego={videoGame} setJuego={setJuego} />
        ))}
    
        <h1 className={styles.title}>Confirme:</h1>
        <button className={styles.button} onClick={handleSignin}>Confirmar</button>
    
        <h1 className={styles.title}>Otras formas de registrarse:</h1>
        <button className={styles.button} onClick={handleLogingGoogle} disabled={!videoGame || !username}>
            Registrarse con Google
        </button>
    </div>
    )
}
