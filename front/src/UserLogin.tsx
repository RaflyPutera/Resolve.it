import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton=()=>{
    const {loginWithRedirect}=useAuth0();
    return(
        <button onClick={()=>loginWithRedirect()}>Log in</button>
    )
}

export const LogoutButton=()=>{
    const {logout} =useAuth0();
    return(
        <button onClick={()=>logout({
            logoutParams:{returnTo:window.location.origin}
        })}>Log out</button> 
    )
}