import { initializeApp } from "firebase/app";
import firebaseConfig from './config';

const firebaseInitialization = ()=>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialization