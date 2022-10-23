// Import the functions you need from the SDKs you need
// intialize app initializes the instance from firbase library
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// importing auuthentication mechanism from ayth library of firebase

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//importing firestore components
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC968XR9ySKdGnK3YMpg88gvSY0MoasKEA",
  authDomain: "glamly-clothing-db.firebaseapp.com",
  projectId: "glamly-clothing-db",
  storageBucket: "glamly-clothing-db.appspot.com",
  messagingSenderId: "975464480488",
  appId: "1:975464480488:web:fe944fea4ec1d05152d35d",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// sets the mode of which the ser wold be asked to sign in
// takes in by the way of parameters
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

// db points our database from our firestore directly
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  // checks whether the id which is sent by google for the specific user who has clicked the login by google accont and
  // verifies whether the uid is present in firestore
  console.log(userSnapshot.exists());

  // if user does not exists

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //setdoc method writes the user data in our firestore ifthe data isnot alread ypresent
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(
        "There's an error creating the user, please try after sometime",
        error.message
      );
    }
  }

  // if user exists return the userdocref as it is
  return userDocRef;
};