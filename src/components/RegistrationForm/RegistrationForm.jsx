import { useDispatch } from "react-redux";
import { registr } from "redux/auth/auth-operations";
import { TextInput, Button, Box, Group } from "@mantine/core";

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
        <Box maw={320} mx="auto">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextInput label="Username" placeholder="name" type="text" name="name"/>
            <TextInput mt='15px' label="Email" placeholder="email" type="email" name="email"/>
            <TextInput mt='15px' label="Password" placeholder="password" type="password" name="password"/>
            <Group position="center" mt="xl">
              <Button variant="outline" type="submit">
                  Register
              </Button>
            </Group>
          </form>
        </Box>
    )
}


// <form autoComplete="off" onSubmit={handleSubmit}>
      //   <label >
      //     Username
      //     <input type="text" name="name" />
      //   </label>
      //   <label >
      //     Email
      //     <input type="email" name="email" />
      //   </label>
      //   <label >
      //     Password
      //     <input type="password" name="password" />
      //   </label>
      //   <button type="submit">Register</button>
      // </form>