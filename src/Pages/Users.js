import axios from "axios";
import userData from '../data.json';
import { useState,useEffect } from "react";
import { Link,useSearchParams,useNavigate } from "react-router-dom";
const Users = () => {
    const [dataa,setData] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    console.log("serachparams",searchParams.get('class'))
    useEffect(()=>{
        setData(userData);


    },[])
    console.log('data',dataa)
    const handleChange = (e) => {
        setSearchParams({
            class:e.target.value,
            hello :"me"
        })
    }
    
    return (
        <div className="page">
            <select onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            {
                dataa.map((item)=>{
                    return(
                        <div onClick={()=>{
                            navigate(`/details/${item.id}`,{
                                state:{
                                    item
                                }
                            })
                        }}>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.address}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users;