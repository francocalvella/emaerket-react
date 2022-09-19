import AuthContext from "./AuthContext";
import { useState } from "react";

export default function AuthProvider(props){
    const [isLogged, setIsLogged] = useState(sessionStorage.getItem('isLogged')||false)
    const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('userInfo'))||{})
    function logIn(user){
        setIsLogged(true)
        setUserInfo(user)
        sessionStorage.setItem('isLogged', true)
        sessionStorage.setItem('userInfo', JSON.stringify(user))
    }
    function logOut(){
        setIsLogged(false)
        setUserInfo({})
        sessionStorage.removeItem('isLogged')
        sessionStorage.removeItem('userInfo')
    }

    return (
    <AuthContext.Provider
    value={{
        isLogged,
        userInfo,
        logIn,
        logOut
    }}
    >
        {props.children}
    </AuthContext.Provider>
    )
}