import { createContext } from "react";

const AuthContext = createContext({
    user: undefined,
    setUser: (newUser) => {},
});

export default AuthContext;