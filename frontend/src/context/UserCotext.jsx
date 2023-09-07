import React, { createContext, useContext, useEffect, useReducer } from 'react'
import toast from 'react-hot-toast'
import { userDetails } from '../utils/UserReq'
import {reducer} from './Reducer'
import { LoadingState } from './LoadingContext'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [userState, userDispatch] = useReducer(reducer, { email: "" })
    const { loadingState, setLoadingState } = LoadingState()
    
    useEffect(() => {
        const getUser = async () => {
            setLoadingState(true)
            try {
                const response = await userDetails()
                console.log(response)
                if (response?.data?.success) {
                    const { email } = response?.data?.user
                    userDispatch({ type: 'LOGIN', payload: email })
                }
                setLoadingState(false)
            } catch (error) {
                setLoadingState(false)
                toast.error(error.message)
            }
        }
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    )
}

const UserState = () => useContext(UserContext)

export { UserContextProvider, UserState }