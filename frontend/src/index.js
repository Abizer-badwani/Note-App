import ReactDomClient from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { UserContextProvider } from './context/UserCotext'
import { LoadingContextProvider } from './context/LoadingContext'
import App from './App'

import './index.css'

const root = ReactDomClient.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()

root.render(
    <LoadingContextProvider>
        <UserContextProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
            <Toaster position='bottom-left' />
        </UserContextProvider>
    </LoadingContextProvider>
)
