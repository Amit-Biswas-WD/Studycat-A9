import { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createGoogleAccount = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createGithubAccount = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    user,
    setUser,
    createGoogleAccount,
    createGithubAccount,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
