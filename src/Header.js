import {  NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to = 'settings'>
                Settings
            </NavLink>
            <NavLink to = 'Usage'>
                Usage
            </NavLink>
            <NavLink to = 'users'>
                Users
            </NavLink>
        </div>
    )

}
export default Header;