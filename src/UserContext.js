import {createContext ,useState} from "react";


export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const newLocal = useState({});
    const [userInfo,setUserInfo] = newLocal;
    return (
        <UserContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}