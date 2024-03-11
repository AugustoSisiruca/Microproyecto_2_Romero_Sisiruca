import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useUser} from "../context/user";
import {createUserWithEmail, signInWithEmail, signInWithGoogle, signOutUser} from "../controllers/auth";
import CardGame from "../components/CardGame";
import useGames from "../hooks/GamesLoad";

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


    const handleSignin= async (e)=> {
        const user = await createUserWithEmail(email,password)
        if(user !=null){ 
            await createUser(name,lastName,username,email,password,videoGame)
        }else{
            alert("Debes proporcionr obligatoriamente el correo y la contraseña")
        }

    }


    const handleLogingGoogle= async (e)=> {
        const user = await signInWithGoogle() 
        console.log(user)} 
    useEffect(()=>{if(user){navigate("/AppPage")}},[user,navigate])
    return (<div>
        <section>
        Ingrese su Nombre:
        <input value={name} onChange={e =>  setName(e.target.value) }></input>
        Ingrese su Apellido:
        <input value={lastName} onChange={e =>  setLastName(e.target.value) }></input>
        Ingrese su Email:
        <input value={email} onChange={e =>  setEmail(e.target.value) }></input>
        Ingrese su nombre de usuario:
        <input value={username} onChange={e =>  setUsername(e.target.value) }></input>
        Ingrese su contraseña del usuario:
        <input value={password} onChange={e =>  setPassword(e.target.value) }></input>
        </section>
        {juegos?.map(({ id, titulo}) => (
            <CardGame key={titulo + id} id={id} titulo={titulo} juego = {videoGame} setJuego = {setJuego} />
        ))}
        Confirme:
        <button onClick={ handleSignin}>Confimar</button>
        Otras formas de registrarse: 
        <button onClick={handleLogingGoogle} disabled = {!videoGame || !username}>Registrarse con Google</button>
        </div>
    )
}
