import { LoginForm } from "components/LoginForm/LoginForm";

export default function Login(){
    return(
        <div style={{marginTop: '150px'}}>
            <h2 style={{textAlign:'center', textTransform: 'uppercase'}}>Login</h2>
            <LoginForm />
        </div>
    )
}