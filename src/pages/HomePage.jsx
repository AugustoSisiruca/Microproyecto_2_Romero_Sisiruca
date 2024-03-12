import {useUser} from "../context/user";
import {signOut} from 'firebase/auth';
import {Link} from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
    const user = useUser();
    return (
<div className={styles.container}>
    <button className={styles.button} onClick={signOut}>Cerrar Sesión</button>
    <button className={styles.button} onClick={() => {console.log(user);}}>Console.log Usuario</button>
    <Link to="/login" className={styles.link}>Iniciar Sesión</Link>
    <Link to="/Usuario" className={styles.link}>Ver Perfil</Link>
    <Link to="/Registrar" className={styles.link}>Registrarse</Link>
</div>
    );
}
