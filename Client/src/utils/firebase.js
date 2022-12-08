// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"; // doc is getting the document, getDoc for access the data, set the data is setDoc

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBvQiO1p1vg-TGO6SG8r79FvoEL8JT-js",
  authDomain: "findjob-622aa.firebaseapp.com",
  projectId: "findjob-622aa",
  storageBucket: "findjob-622aa.appspot.com",
  messagingSenderId: "531033828405",
  appId: "1:531033828405:web:a24dac81f172540bc1957c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
// facebookProvider.setCustomParameters({
//   prompt: "select_account",
// });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithFacebookPopUp = () =>
  signInWithPopup(auth, facebookProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      
    } catch (err) {
      console.log("Error creating the user", err.message);
    }
  }

  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log(auth);
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = () => signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
export const updateAuthUser = async (update) => {
  console.log(auth.currentUser);
  return await updateProfile(auth.currentUser, {
    ...auth.currentUser,
    update,
  });
};
// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (userAuth) => {
//         unsubscribe();
//         resolve(userAuth);
//         console.log(userAuth);
//       },
//       reject
//     );
//   });
// };