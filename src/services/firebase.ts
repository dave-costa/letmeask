import firebase  from "firebase/app";

// estamos importando o firebase que a gente instalou 
import 'firebase/auth'
import 'firebase/database'
//os 2 serviços que a gente ta usando no firebase

const firebaseConfig = {
    apiKey: "AIzaSyDwcRoW2HxLEf2Z0SJ5Nxdijpk9KTgiR_A",
    authDomain: "letmeask-3970c.firebaseapp.com",
    databaseURL: "https://letmeask-3970c-default-rtdb.firebaseio.com",
    projectId: "letmeask-3970c",
    storageBucket: "letmeask-3970c.appspot.com",
    messagingSenderId: "824852888887",
    appId: "1:824852888887:web:e1db22c02e2cd4a60caeb2"

}
// config padrao 
firebase.initializeApp(firebaseConfig) 
//depois de iniciar
export const auth = firebase.auth()
//a gente ta exportando isso para usar em outros modulos
export const database = firebase.database()