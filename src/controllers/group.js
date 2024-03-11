import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";

// Función para recuperar todos los grupos de clubes.
export async function getClubGroups() {
    const groupsCollection = collection(db, "Clubes");
    const groupsDocs = await getDocs(groupsCollection);
    const clubGroups = groupsDocs.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    }));
    return clubGroups;
}

// Función para recuperar un grupo de clubes por su nombre.
export async function getClubGroupByName(name) {
    const groupsCollection = collection(db, "Clubes");
    const groupQuery = query(groupsCollection, where("nombre", "==", name));
    const clubGroup = await getDoc(groupQuery);
    return clubGroup;
}

// Función para buscar un grupo de clubes por su número.
export async function searchClubGroupByNumber(number) {
    const groupDoc = await getDoc(doc(db, "Clubes", `${number}`));
    const clubGroup = groupDoc.data();
    return clubGroup;
}
