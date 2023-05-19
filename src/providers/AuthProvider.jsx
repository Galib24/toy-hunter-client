/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {


    


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [success, setSuccess] = useState("");
    // // Google function for login
    


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // const updateUserData = (user,name,photo)=>{
    //     updateProfile(user,{
    //         displayName: name,
    //         photoURL: photo
    //     })
    //     .then(()=>{
    //         console.log('user name updated',name,photo);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }


    // onAuthStateCHanged
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log('Successfully Signup');
            })
            .catch(error => {
                console.log('error', error);
            })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        handleGoogleLogIn
        // updateUserData
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;