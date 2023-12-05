import {createContext, useState} from "react"
export const Context = createContext()
export const ContextProvider = ({children}) => {
    const [modal , setModal] = useState()
    return(
        <Context.Provider value={{modal, setModal}}>
            {children}
        </Context.Provider>
    )
}