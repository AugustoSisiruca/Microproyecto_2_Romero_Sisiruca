import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase/config.js";

//  Función para obtener todos los juegos de la base de datos
export async function getGames() {
    const gamesCollection = collection(db, "Games");
    const gamesDocs = await getDocs(gamesCollection);
    const games = gamesDocs.docs.map(doc => ({id: doc.id, data: doc.data()})
    );
    return games;
}

// Función para buscar un juego por su número
export async function searchGameByNumber(number) {
    const gameDoc = await getDoc(doc(db, "Games", `${number}`));
    const game = gameDoc.data();
    return game;
}
