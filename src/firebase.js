
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDxYnRDDK_5Ie9gO5TaEAmLiAmVmATSgCA",
    authDomain: "memes-b9bcb.firebaseapp.com",
    projectId: "memes-b9bcb",
    storageBucket: "memes-b9bcb.appspot.com",
    messagingSenderId: "787604677900",
    appId: "1:787604677900:web:99e9a43246017126569529"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);