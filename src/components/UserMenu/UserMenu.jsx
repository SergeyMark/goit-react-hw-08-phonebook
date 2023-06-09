import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { useAuth } from "../../hooks/useAuth";
import { Avatar, Button, Text, Indicator } from "@mantine/core";



export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return(
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Indicator inline size={10} offset={4} position="bottom-end" color="green" withBorder>
                    <Avatar variant="filled" radius="xl" color="red" src="https://www.gamespot.com/a/uploads/scale_medium/1573/15735876/3201896-starwars-main2.jpg"/> 
                </Indicator>
                <Text tt='uppercase' c='blue'>{user.email}</Text>
            </div>
            <Button variant="outline" size="xs" uppercase onClick={handleLogOut} type="button">
                Logout
            </Button>
        </div>
    )
}