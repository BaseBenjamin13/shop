import React, { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        knoxToken: localStorage.getItem('knox_token'),
        cart: null,
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
} 
