
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAlZytOFp0W2CHDdqCJ_t6tACYz6KbpRz8",
    authDomain: "netflix-by-hemant.firebaseapp.com",
    projectId: "netflix-by-hemant",
    storageBucket: "netflix-by-hemant.appspot.com",
    messagingSenderId: "299050024831",
    appId: "1:299050024831:web:98e66a2f4e52022100e44a"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth};
  export default db;