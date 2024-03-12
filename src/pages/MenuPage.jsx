import { useNavigate } from "react-router-dom";
import styles from './MenuPage.module.css';


export default function MenuPage(){

    const navigate=useNavigate()
    const redirectSignIn = ()=>{(navigate("/OpcionRegistrar"))}
    const redirectLognIn = ()=>{(navigate("/login"))}
    return (
        <div className={styles.container}>
            <section>
                <h1 className={styles.title}>BIENVENIDO A METROCLUB VIDEOGAMES</h1> 
                <h2 className={styles.subtitle}>Ingrese una opción:</h2>
                <button className={styles.button} onClick={redirectSignIn}>Registrarse</button>
                <button className={styles.button} onClick={redirectLognIn}>Iniciar Sesión</button>
                <img className={styles.logo} src="../../public/Logo/Logo.jpg" alt="Logo" />
            </section>
        </div>
        
        )
}