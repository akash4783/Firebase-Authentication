import React from "react";
import { Navigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute=({children})=>{
    const{user} = useUserAuth()
    // console.log(user);
    if(!user){
        return <Navigate to="/"/>

    }
    return children
}
export default ProtectedRoute