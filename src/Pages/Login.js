import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../API/users";

const Login = () => {
    const [user, setUser] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate();
    const clickHandler = (e) => {
        login(user)
        .then(()=>{
            navigate('/')
        })
        .catch((e)=>{
            setError("Login failed")
        })
    }
   return(
    <div>
        <div className="login">
            <label className="error">{error}</label>
            <input value={user} placeholder= "username" onChange={(e)=>setUser(e.target.value)}/>
            <input placeholder="password"/>
            <button className="login-button" onClick={clickHandler}>Login</button>
        </div>
    </div>
   ) 
}
export default Login;