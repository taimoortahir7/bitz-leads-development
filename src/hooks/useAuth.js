import { useState, useEffect, useContext, createContext } from "react";
//  import { auth, db } from "config/firebase";
import axios from "axios";
const authContext = createContext({ user: {} });
const { Provider } = authContext;

const BASE_URL = 'https://blitzleads.ai' + ':3000'

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
        let res;
        console.log(email)
        try {
            let response = await axios.post(`${BASE_URL}/users/check-email-exists`,
                {
                    email
                })

            if (response.data) {
                res = response.data.userExists
            }
        }

        catch (error) {
            res = { error }
        }

        return res
    }
    const getEmailOtp = ({ email, userStatus }) => {
        let res;
        axios.post(`${BASE_URL}/users/get-email-otp`,
            {
                email, userStatus
            }).then(response => {
                res = response.sent
            }).catch(error => res = error)
        return res
    }
    const signUp = async ({ name, email, password }) => {
        console.log(name, password, email)
        const userExists = await verifyEmail({ email });
        if (!userExists) {
            axios.post(`${BASE_URL}/users/`,
                {
                    email,
                    password,
                    name
                }
            ).then(response => {

                return { response }
            }).catch(error => { return { error } })
        }
    };

    const signIn = ({ email, password }) => {
        return axios.post(`${BASE_URL}/users/login`,
            {
                email,
                password,
            }
        ).then(response => {

            setUser(response.data)
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
        // signOut,
        // sendPasswordResetEmail,
    };
};
