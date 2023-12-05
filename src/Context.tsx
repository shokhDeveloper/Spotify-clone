import {createContext, Context as ReactContext, useState, Dispatch, SetStateAction} from "react"
interface ContextProviderProps {
    children: React.ReactNode
}
export interface myContext {
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
    stopTimer: boolean,
    setStopTimer: Dispatch<SetStateAction<boolean>>
}

export const Context: ReactContext<myContext| any> = createContext<myContext | any>(undefined)

export const ContextProvider:React.FC<ContextProviderProps> = ({children}) =>  {
    const [modal, setModal] = useState<boolean>(false)
    const [stopTimer, setStopTimer] = useState<boolean>(false)
    const myContextData : myContext = {
        modal,
        setModal,
        stopTimer,
        setStopTimer
    }
    return(
        <Context.Provider value={myContextData}>
            {children}
        </Context.Provider>    
    )
}
