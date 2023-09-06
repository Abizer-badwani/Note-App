import { createContext, useContext, useState } from "react"


const loadingContext = createContext()

export const LoadingContextProvider = ({children}) => {

    const [loadingState, setLoadingState] = useState(false)

    
return <loadingContext.Provider value={{loadingState, setLoadingState}}>
        {children}
    </loadingContext.Provider>
}


export const LoadingState = () => useContext(loadingContext)
