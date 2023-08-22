import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5n2nssUlLEBEmtOEkSm6TehYKLdjyEhU",
  authDomain: "ecommerce-app-coder.firebaseapp.com",
  projectId: "ecommerce-app-coder",
  storageBucket: "ecommerce-app-coder.appspot.com",
  messagingSenderId: "432801331344",
  appId: "1:432801331344:web:c055f3f19f49d057f74015"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );