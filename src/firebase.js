// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBJytuI5tZtJNiSUA2XHaYYrGbKBVAIMXs",
authDomain: "microproyecto-romero-sisiruca.firebaseapp.com",
projectId: "microproyecto-romero-sisiruca",
storageBucket: "microproyecto-romero-sisiruca.appspot.com",
messagingSenderId: "173786956214",
appId: "1:173786956214:web:72f96c090e85c8ceecc117",
measurementId: "G-4S60B7V6RZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);