// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_XhFzcyAu4QS9VQ5kCfhR8sI_4XRAEOY",
  authDomain: "consulta-9f0ec.firebaseapp.com",
  projectId: "consulta-9f0ec",
  storageBucket: "consulta-9f0ec.appspot.com",
  messagingSenderId: "860575162587",
  appId: "1:860575162587:web:f9f17dace7f1e4907fecfe",
};
/* const uploadArray = (array) => {
  array.forEach((item) => {
    firestore.collection("collectionName").addDoc(item);
  });
}; */
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
