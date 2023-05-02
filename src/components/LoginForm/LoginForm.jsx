import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import { TextInput, Button, Group, Box } from '@mantine/core';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        
        const form = e.currentTarget;

        dispatch(logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
    
    form.reset();
  };

    return(
        <Box maw={320} mx="auto">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextInput label="Email" placeholder="email" type="email" name="email"/>
                <TextInput mt="15px" label="Password" placeholder="password" type="password" name="password"/>
                <Group position="center" mt="xl">
                    <Button variant="outline" type="submit">
                        Log In
                    </Button>
                </Group>
            </form>
        </Box>
    )
}

