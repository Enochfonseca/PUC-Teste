import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZOZUueR_tbTAQ4dyHpNYIiZijnZhfhcg",
  authDomain: "puc-react-4819e.firebaseapp.com",
  projectId: "puc-react-4819e",
  storageBucket: "puc-react-4819e.firebasestorage.app",
  messagingSenderId: "597626994147",
  appId: "1:597626994147:web:541c75048f16a0f3e4f4d6"
};

// inicializa o app
const app = initializeApp(firebaseConfig);

// exporta os serviços
export const auth = getAuth(app);
export const db = getFirestore(app);



