import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "../utils/Common"
export const LoggedInOutlet = () => {
    console.log("outside",isLoggedIn())
    if (isLoggedIn()){

        console.log("inside logged in outlet",isLoggedIn)
        return <Outlet/>
    }
    else {
        return <Navigate to='/login'/>
    }
    
}