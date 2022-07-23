import AuthContext from "./AuthContext";
import { useState } from "react";

export default function AuthProvider(props){
    const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged')||false)
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo'))||{})
    function logIn(user){
        setIsLogged(true)
        setUserInfo(user)
        localStorage.setItem('isLogged', true)
        localStorage.setItem('userInfo', JSON.stringify(user))
    }
    function logOut(){
        setIsLogged(false)
        setUserInfo({})
        localStorage.removeItem('isLogged')
        localStorage.removeItem('userInfo')
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