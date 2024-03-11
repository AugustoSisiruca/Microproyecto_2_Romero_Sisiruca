import { collection, doc, getDocs, query, where, setDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";

// Crear usuario, buscar usuario.

export async function createUser(firstName, lastName, username, email, password, game) {
    const userDoc = doc(collection(db, "Users"), email);
    const userData = { firstName, lastName, username, email, password, groups: [], game };
    await setDoc(userDoc, userData);
}

// Función para actualizar el usuario actual

export async function updateCurrentUser() {
    const userCollection = collection(db, "Users");
    return userCollection;
}

// Función para buscar un usuario por correo electrónico

export async function searchUserByEmail(email, groupName) {
    const usersCollection = collection(db, "Users");
    const userQuery = query(usersCollection, where("email", "==", email));
    const user = await getDocs(userQuery);
    const userData = user.docs[0].data();
    const { firstName, lastName, username, groups } = userData;
    groups.push(groupName);
    const updatedData = { firstName, lastName, username, email, groups };
    const userRef = doc(usersCollection, email);
    await setDoc(userRef, updatedData);
}

// Función para obtener un usuario por correo electrónico

export async function getUserByEmail(email) {
    const usersCollection = collection(db, "Users");
    const userQuery = query(usersCollection, where("email", "==", email));
    const user = await getDocs(userQuery);
    const userData = user.docs[0].data();
    const { firstName, lastName, groups } = userData;
    const userDataFormatted = { firstName, lastName, groups };
    return userDataFormatted;
}

// Función para cambiar la información del usuario por correo electrónico

export async function changeUserInfoByEmail(email, newFirstName, newLastName) {
    const usersCollection = collection(db, "Users");
    const userQuery = query(usersCollection, where("email", "==", email));
    const user = await getDocs(userQuery);
    const userData = user.docs[0].data();
    const { username, password, groups } = userData;
    const updatedData = { firstName: newFirstName, lastName: newLastName, username, email, groups, password };
    const userRef = doc(usersCollection, email);
    await setDoc(userRef, updatedData);
}

// Función para cambiar el grupo de usuario por correo electrónico

export async function changeUserGroupByEmail(email, group) {
    const usersCollection = collection(db, "Users");
    const userQuery = query(usersCollection, where("email", "==", email));
    const user = await getDocs(userQuery);
    const userData = user.docs[0].data();
    const { firstName, lastName, username, password } = userData;
    const updatedData = { firstName, lastName, username, email, groups: group, password };
    const userRef = doc(usersCollection, email);
    await setDoc(userRef, updatedData);
}


