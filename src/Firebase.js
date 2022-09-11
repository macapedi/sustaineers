import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSskM7-2pYHHhk1FoGzb_9ZJnvpmBCR1w",
    authDomain: "sustaineers-e7879.firebaseapp.com",
    projectId: "sustaineers-e7879",
    storageBucket: "sustaineers-e7879.appspot.com",
    messagingSenderId: "671183562961",
    appId: "1:671183562961:web:e076c3810a71c5ac62bdf0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};