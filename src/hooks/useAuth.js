import { useState, useEffect, useContext, createContext } from "react";
//  import { auth, db } from "config/firebase";
import axios from "axios";
const authContext = createContext({ user: {} });
const { Provider } = authContext;

const SERVER_PORT = ':3000'
const BASE_URL = `https://blitzleads.ai${SERVER_PORT}`

export function AuthProvider({ children }) {
    const auth = useAuthProvider();
    return <Provider value={auth}>{children}</Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

export const useAuthProvider = () => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     if (user?.uid) {
    //         // Subscribe to user document on mount
    //         // const unsubscribe = db
    //         //     .collection("users")
    //         //     .doc(user.uid)
    //         //     .onSnapshot((doc) => setUser(doc.data()));
    //         // return () => unsubscribe();
    //     }
    // }, [user?.uid]);

    // const handleAuthStateChanged = (user) => {
    //     setUser(user);
    //     if (user) {
    //         getUserAdditionalData(user);
    //     }
    // };
    // useEffect(() => {
    //     const unsub = auth.onAuthStateChanged(handleAuthStateChanged);
    //     return () => unsub();
    // }, []);
    // const createUser = (user) => {
    //     return db
    //         .collection("users")
    //         .doc(user.uid)
    //         .set(user)
    //         .then(() => {
    //             setUser(user);
    //             return user;
    //         })
    //         .catch((err) => {
    //             return { err };
    //         });
    // };

    // const getUserAdditionalData = (user) => {
    //     return db
    //         .collection("users")
    //         .doc(user.uid)
    //         .get()
    //         .then((userData) => {
    //             if (userData.data()) {
    //                 setUser(userData.data());
    //             }
    //         });
    // };

    const verifyEmail = async ({ email }) => {
        let res = { error: false, response: '' }

        try {
            let response = await axios.post(`${BASE_URL}/users/check-email-exists`,
                {
                    email
                })

            if (response.data) res = { error: false, response: response.data.userExists }
        }

        catch (error) {
            res = { error: true, response: error }
        }

        return res
    }

    const getEmailOtp = ({ email, userStatus }) => {
        let res;
        axios.post(`${BASE_URL}/users/get-email-otp`,
            {
                email, userStatus
            }).then(response => {
                res = response.data.status
            }).catch(error => res = error)
        return res
    }

    const verifyEmailOTP = ({ email, otp }) => {
        let res = { error: false, message: '' }
        axios.post(`${BASE_URL}/users/verify-email-otp`,
            {
                email, otp
            }).then(response => {
                if (response.error) res = { error: true, message: response.error }
                if (response.status) res = { error: false, message: response.status }
            }).catch(error => res = error)
        return res
    }
    
    const signUp = async ({ name, email, password, otp, userType, accountType }) => {
        console.log(name, password, email, otp, userType, accountType)
        axios.post(`${BASE_URL}/users`,
            {
                email,
                password,
                name, 
                otp, 
                userType, 
                accountType
            }
        ).then(response => {

            return { response }
        }).catch(error => { return { error } })
    };

    const signIn = ({ email, password }) => {
        return axios.post(`${BASE_URL}/users/login`,
            {
                email,
                password,
            }
        ).then(response => {

            setUser(response.data)
            return { response }
        }).catch(error => { return { error } })

    };
    // const signOut = () => {
    //     return auth.signOut().then(() => setUser(false));
    // };

    // const sendPasswordResetEmail = (email) => {
    //     return auth.sendPasswordResetEmail(email).then((response) => {
    //         return response;
    //     });
    // };

    return {
        // user,
        signUp,
        signIn,
        verifyEmail,
        getEmailOtp,
        verifyEmailOTP,
        // signOut,
        // sendPasswordResetEmail,
    };
};
