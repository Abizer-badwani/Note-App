import { BrowserRouter } from 'react-router-dom'
import ReactDomClient from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from 'react-query'
import { UserContextProvider } from './context/UserCotext'
import App from './App'

import './index.css'

const root = ReactDomClient.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </QueryClientProvider>
        <Toaster position='bottom-left' />
    </BrowserRouter>
)