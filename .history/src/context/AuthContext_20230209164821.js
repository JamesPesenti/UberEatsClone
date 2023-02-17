import { createContext, useState } from "react"

const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null)
    const [dbUser, setDbUser] = useState(null)



    return (
        <AuthContext.Provider
            value={{ authUser, dbUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

