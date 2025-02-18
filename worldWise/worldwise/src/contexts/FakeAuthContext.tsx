import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};
interface AuthContextType {
    user: {
        name: string,
        email: string,
        password: string,
        avatar: string, 
    } | null,
    isAuthenticated: boolean,
    login: (email: string, password: string) => void,
    logout: () => void,
}

const AuthContext = createContext<AuthContextType>({
    user: FAKE_USER,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

const initialState = {
    user: null,
    isAuthenticated: false,
}

function reducer(state: any, action: any) { 
    switch(action.type) {
        case "login":
            return {...state, user: action.payload, isAuthenticated: true}
        case "logout":
            return {...state, user: null, isAuthenticated: false}
        default: throw new Error("Unknown command");
    }
}

const AuthProvider = ({children}: any) => {
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState)

    function login(email: string, password: string) {
        if(email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({type: "login", payload: FAKE_USER})
        }
    }

    function logout() {
        dispatch({type: "logout"})
    }

    return <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("Context was used outside AuthProvider")
    }
    return context;
}

export {AuthProvider, useAuth};