import firebaseInit from "../../components/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

firebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setDisplayname(e.target.value);
  };

  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  const [user, setUser] = useState({});
  const [error, seteError] = useState();
  const location = useHistory();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // setUser(result.user);
      })
      .catch((error) => {
        seteError(error.message);
      });
  };

  const handleUserRegister = (email, password, displayname) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {})
      .catch((error) => seteError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleUserLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        seteError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogOUt = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleLogOUt,
    hanldeEmail,
    hanldePassword,
    handleName,
    handleUserRegister,
    user,
    error,
    handleLogin,
    isLoading,
  };
};

export default useFirebase;
