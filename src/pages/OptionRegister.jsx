import { useNavigate } from "react-router-dom";
import styles from './OptionRegister.module.css'

const OptionRegister = () => {
    const navigate = useNavigate();
    const redirectSignIn = () => { navigate("/Registrar"); };
    const redirectSignGoogle = () => { navigate("/RegistrarGoogle"); };

    return (
<div className={styles.container}>
    <section>
        <h1 className={styles.title}>Ingrese su opción para Registrarse</h1>
        <button className={styles.button} onClick={redirectSignIn}>Por correo</button>
        <button className={styles.button} onClick={redirectSignGoogle}>Por Google</button>
    </section>
</div>
    );
};

export default OptionRegister;
