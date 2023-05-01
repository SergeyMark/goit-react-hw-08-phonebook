import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { useAuth } from "hooks";

export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return(
        <div>
            <span>Welcome, {user.name}</span>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    )
}