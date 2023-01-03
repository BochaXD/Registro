import { db } from "../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const userCollectionRef = collection(db, "prueba");
const userCollectionRefUser = collection(db, "usuarios");
class UserServices {
  addBase = (newBase) => {
    return addDoc(userCollectionRef, newBase);
  };
  addUser = (newUser) => {
    return addDoc(userCollectionRefUser, newUser);
  };
  updateUser = (id, updateUser) => {
    const userDoc = doc(db, "usuarios", id);
    return updateDoc(userDoc, updateUser);
  };
  updateBase = (id, updateBase) => {
    const baseDoc = doc(db, "usuarios", id);
    return updateDoc(baseDoc, updateBase);
  };
  deleteUser = (id) => {
    const userDoc = doc(db, "usuarios", id);
    return deleteDoc(userDoc);
  };
  deleteDoc = (id) => {
    const baseDoc = doc(db, "usuarios", id);
    return deleteDoc(baseDoc);
  };
  getAllBase = () => {
    return getDocs(userCollectionRef);
  };
  getAllUser = () => {
    return getDocs(userCollectionRefUser);
  };
  getUser = (id) => {
    const user = doc(userCollectionRefUser, id);
    return getDoc(user);
  };
}
export default new UserServices();
