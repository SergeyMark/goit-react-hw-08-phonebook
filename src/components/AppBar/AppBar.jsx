import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";

const style = {
    header: {
        borderBottom: '2px solid black',
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export const AppBar = () => {
    const { isLoggedIn } = useAuth()

    return (
        <header style={style.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}