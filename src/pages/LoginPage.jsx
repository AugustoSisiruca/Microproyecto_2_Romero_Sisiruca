import { useEffect, useState } from "react";
import {signInWithEmail, signInWithGoogle, signOutUser} from "../controllers/auth";
import {useUser} from "../context/user";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const navigate = useNavigate();
    const user = useUser();
    useEffect(()=>{
        if(user){
            navigate("../HomePage/HomePage")
        }
    }, [user, navigate]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const handleLogin = async (e)=> {
        const user = await signInWithEmail(email, password);
        console.log(user);
    }

    const handleLogingGoogle= async (e)=> {
        const user = await signInWithGoogle()
        console.log(user)
    }

    return(
        <div>
            <h1>INCIAR SESIÓN</h1>
            <section>
                <h3>Ingrese su correo:</h3>
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <h3>Ingrese su contraseña:</h3>
                <input value={password} onChange={e => setPassword(e.target.value)} />
                <p>Al comprobar los datos inicie sesion</p>
                <button onClick={handleLogin}>Iniciar Sesion</button>
            </section>
            <section>
                <h2>Otras opciones de registro:</h2>
                {/*Inserta imagen*/}
                <button onClick={handleLogingGoogle}>Iniciar sesion con Google</button>
                <button onClick={signOutUser}></button>

            </section>
            
        </div>
    )

}
