import { useEffect, useState } from "react";
import {signInWithEmail, signInWithGoogle, signOutUser} from "../controllers/auth";
import {useUser} from "../context/user";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css';

export default function LoginPage(){
    const navigate = useNavigate();
    const user = useUser();
    useEffect(()=>{if(user){
            navigate("/Login")}
    }, [user, navigate]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const handleLogin = async ()=> {
        const user = await signInWithEmail(email, password);
        console.log(user);
    }
    const handleLogingGoogle= async ()=> {
        const user = await signInWithGoogle()
        console.log(user);
    }

    return(
<div className={styles.container}>
    <h1 className={styles.title}>INCIAR SESIÓN</h1>
    <section>
        <h3>Ingrese su correo:</h3>
        <input className={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
        <h3>Ingrese su contraseña:</h3>
        <input className={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
        <p>Al comprobar los datos inicie sesión</p>
        <button className={styles.button} onClick={handleLogin}>Iniciar Sesión</button>
    </section>
    <section>
        <h2>Otras opciones de registro:</h2>
        <button className={styles.button} onClick={handleLogingGoogle}>Iniciar sesión con Google</button>
        <button className={styles.button} onClick={signOutUser}>Volver</button>
    </section>
</div>
    )

}
