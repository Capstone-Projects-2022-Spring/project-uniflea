import { createContext } from "react";

const AuthContext = createContext({
    user: undefined,
    setUser: (newUser) => {},
    otherUser: undefined,
    setOtherUser: (newOtherUser) => {},
});

export default AuthContext;