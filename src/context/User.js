 import React , {createContext,useCallback, useState} from "react";

const Context = createContext();

function Provider({children}){
    const [user,setUser] = useState();
    const handleLogin = useCallback((userData)=>{

    },[]);

    return <Context.Provider 
    values={{handleLogin}}
    >
        {{children}}
    </Context.Provider>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Context,
    Provider,
    Consumer: Context.Consumer,
  };