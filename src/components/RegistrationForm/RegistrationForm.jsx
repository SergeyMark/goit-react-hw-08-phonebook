import { useDispatch } from "react-redux";
import { registr } from "redux/auth/auth-operations";


export const RegistrationForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.currentTarget;
        
        dispatch(registr({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        }))
        form.reset();
    }


    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
        <label >
          Username
          <input type="text" name="name" />
        </label>
        <label >
          Email
          <input type="email" name="email" />
        </label>
        <label >
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    )
}