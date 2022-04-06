
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgsbyMS3FEGcYEUKzrawaQ5WjZDEJLpqw",
  authDomain: "tienda-saliwonczyk.firebaseapp.com",
  projectId: "tienda-saliwonczyk",
  storageBucket: "tienda-saliwonczyk.appspot.com",
  messagingSenderId: "902652674572",
  appId: "1:902652674572:web:51dc98c2b71cec626ba429",
  measurementId: "G-ZT69ZQ50Z1"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);