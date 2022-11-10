import { useParams,useNavigate, useLocation, NavLink, Routes, Route, Outlet } from "react-router-dom";
import userData from '../data.json'
import { LoggedInOutlet } from "../outlet/LoggedInOutlet";
import Marks from "./Marks";
import Remarks from "./Remarks.js";
//import Sports from "./Sports";
const Details = () => {
    const {id} = useParams();
    const obj = userData.find((item)=>item.id === parseInt(id))
    //console.log(obj)
    //console.log(typeof id)
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location",location)
    return (
        <div>
            <div>
                {obj.name}
            </div>
            <div>
                {obj.address}
            </div>
            <div className="sub-menu">
                <NavLink to="" end><span>Marks</span></NavLink>
                <NavLink to = "sports"><span>Sports</span></NavLink>
                <NavLink to = 'remarks'><span>Remarks</span></NavLink>
            </div>
            <div className="details-body">
                {/* <Routes>
                    <Route path="" element = {<Marks/>}/>
                    <Route path="remarks" element = {<Remarks/>}/>
                    <Route path="sports" element = {<Sports/>}/>
                </Routes> */}
                {/* <Outlet context={obj}/> */}
                <LoggedInOutlet/>
            </div>
            <div>
                <button onClick={()=>navigate('/users')}>BACK</button>
            </div>
        </div>
    )
}
export default Details;