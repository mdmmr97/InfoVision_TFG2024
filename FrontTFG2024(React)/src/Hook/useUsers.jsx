import { useEffect, useState } from "react";

function useUsersLogin () {  
    const [LoginIn, setLoginIn] = useState(localStorage.getItem('token') !== null);

    useEffect(() => {
        const tokenListener = () => setLoginIn(localStorage.getItem('token') !== null);

        window.addEventListener('storage', tokenListener);

        return () => {
            window.removeEventListener('storage', tokenListener);
        };
    }, []);
    return LoginIn;
}
export default useUsersLogin;