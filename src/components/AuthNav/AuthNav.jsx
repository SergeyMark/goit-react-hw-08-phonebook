import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return(
        <div>
            <NavLink to='/register'>Register</NavLink>
            <NavLink style={{marginLeft: '15px'}} to='/login'>Login</NavLink>
        </div>
    )
}