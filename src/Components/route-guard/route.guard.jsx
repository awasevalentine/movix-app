import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const RoutGuard = ({children}) => {
    const {isLoggedIn } = useSelector((state)=> state.auth)

    const [status, setStatus ] = useState()
    // console.log("Here is status: ", isLoggedIn)

    if(isLoggedIn){
        setStatus(isLoggedIn)
    }

    // useEffect(()=>{

    // }, [isLoggedIn])

    return status ? children : <Navigate to="/sign-in" />


}
 
export default RoutGuard;