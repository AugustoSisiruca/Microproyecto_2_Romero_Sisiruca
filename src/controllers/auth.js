import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/config.js";

// Función para crear un usuario con correo electrónico y contraseña
export const createUserWithEmail = async (email, password) => {
    try {
        console.log(email, password);
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Función para iniciar sesión con correo electrónico y contraseña
export const signInWithEmail = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Función para iniciar sesión con Google
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        //console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Función para cerrar sesión
export const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log("Se ha cerrado la sesión exitosamente");
    } catch (error) {
        console.error("Error! No se pudo cerrar sesión:", error);
    }
};
