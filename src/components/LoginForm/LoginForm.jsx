import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";

export const LoginForm = () => {
    return(
        <form autoComplete="off">
            <label>
                <input type="email" name="email" />
            </label>
            <label>
                <input type="password" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}