import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { types } from "../types/types";
import { google } from "../firebase/firebase";


export const loginEmailPassword = (email,password) => {
    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{

            dispatch(loginSincrono(user.uid,user.displayName))
            console.log('bienevenido señor usuario')
            
        })
        .catch(e => {
            // console.log(e)
            console.log('el usuario no existe')
        })
    }
}




export const loginGoogle =()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)// popup para iniciar la sesion en google
        .then(({user})=>{ 
            dispatch(loginSincrono(user.uid, user.displayName))
        }).catch(error=>console.log(error))
    }
}

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload:{
            id,
            displayname
        }
    }
}

export const logout = () => {
    return (dispatch)=>{
        const auth =getAuth();
        signOut(auth)
        .then(user =>{
            dispatch(logoutSincrono())
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
    return {
       type: types.logout,
    }
}




