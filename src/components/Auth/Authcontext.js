import React, { useState } from "react"

//import { useHistory } from "react-router-dom"




let AuthContext=React.createContext({

    token:"",

    isLoggedIn:true,

    login:(token)=>{},

    logout:()=>{




    }})

    export const Authcontextprovider=(props)=>{

      // const history=useHistory()

        const inittoken=localStorage.getItem('token')

       const[token,settoken]= useState(inittoken)




       const userloggedin=!!token;

       const loginhandler=(token)=>{               

          settoken(token)

          localStorage.setItem('token',token)

       }

       const logoutHandler=()=>{

           settoken(null)

           localStorage.removeItem('token')







       }




       const contextvalue={

        token:token,

        isLoggedIn:userloggedin,

        login:loginhandler,

        logout:logoutHandler

       }

        return(

        <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>)

    }

    export default AuthContext;