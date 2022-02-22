import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

  } from "firebase/auth";

import {auth} from "../firebase";

const userAuthContext = createContext();
export const UserAuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("Auth", currentUser);
          setUser(currentUser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    
  return (
    <userAuthContext.Provider
        value={{ user,signUp,signIn,signOut,logOut }}
    >
        {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}