import { createContext } from "react";

const AuthContext = createContext({
    userId: "",
    setUserId: (newUserId) => {},
});

export default AuthContext;