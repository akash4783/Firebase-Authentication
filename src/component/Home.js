import React from "react"
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router"
import { useUserAuth } from "../context/UserAuthContext"


const Home =()=>{
    const navigate = useNavigate()
    const {user,logout} = useUserAuth()
    console.log(user);
    const handleLogOut= async ()=>{
        try {
            await logout()
            
        } catch (err) {
            console.log(err);
            
        }
    }
        return(
            <>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome {user.email}
            </div>
            <div className="d-grid gap-2"><Button variant="primary" onClick={handleLogOut}>Log Out</Button></div>
            </>
        )
}

export default Home