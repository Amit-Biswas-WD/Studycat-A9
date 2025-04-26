import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createGoogleAccount = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createGithubAccount = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast("Sign-out successful.");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    const unSubscribe = new onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    logOut,
    setUser,
    createUser,
    createGoogleAccount,
    createGithubAccount,
    createEmailPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
