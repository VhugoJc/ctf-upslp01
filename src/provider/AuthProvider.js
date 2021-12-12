import React, {createContext, useState} from 'react';


export  const AuthContext = createContext();

export default function AuthProvider(props) {
   
    const {children} = props;
    const [id, setId] = useState("");
    return (
        <AuthContext.Provider
            value={{id,setId}}
        > {children}</AuthContext.Provider>
        );
    }
