import React, { createContext, useContext, useState } from 'react';
import Login from '../services/auth'

const AuthContext = createContext({} );

export const AuthProvider = props => { 

  const [user, setUser] = useState({
    email: '',
    pass:''
  })

  function sigin(){
    Login()

  }
  
  return (

    <AuthContext.Provider value={{...user}}>
      {props.children}
    </AuthContext.Provider>
  );

}

export default AuthContext;
