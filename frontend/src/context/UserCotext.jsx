import React, { createContext, useContext, useEffect, useReducer } from 'react'
import toast from 'react-hot-toast'
import { userDetails } from '../utils/UserReq'
import reducer from './Reducer'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {email: "" })

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await userDetails()
                if (response?.data?.success) {
                    const { email } = response?.data?.user
                    dispatch({type: 'LOGIN', payload: email})
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

const UserState = () => useContext(UserContext)

export { UserContextProvider, UserState }