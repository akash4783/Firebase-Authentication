import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth"
import {auth} from "../firebase"

const userAuthContext = createContext()

export function UserAuthContextProvider({children}){
    const[user,setUser]=useState("")


    function signUp(email,passowrd){
        return createUserWithEmailAndPassword(auth ,email,passowrd)
    }
    function logIn(email,passowrd){
        return signInWithEmailAndPassword(auth ,email,passowrd)
    }
    function logout(){
        return signOut(auth)
    }
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)

        });
        return ()=>{
            unsubcribe()

        }

    },[])

    return(
        <userAuthContext.Provider value={{user,logIn,signUp,logout,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )

}

export function useUserAuth(){

    return useContext(userAuthContext)
}
