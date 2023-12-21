import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


export async function Initialize(){
    const fbConfig = {
        apiKey: "AIzaSyA8XdoqkRd8DyVvTsvF3eATLatjE6HzwBE",
        authDomain: "resolve-9f1d9.firebaseapp.com",
        projectId: "resolve-9f1d9",
        storageBucket: "resolve-9f1d9.appspot.com",
        messagingSenderId: "697778986955",
        appId: "1:697778986955:web:f566d4ac0f7c274208e04e",
        measurementId: "G-BNRTWPFRHH"
    };

    const app = initializeApp(fbConfig);
}