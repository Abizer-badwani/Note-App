import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './utils/ProtectedRoute'
import NotFound from './components/NotFound'

const Router = () => {

    return <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/' element={<ProtectedRoute />} >
                <Route path='auth/register' element={<Signup />} />
                <Route path='auth/login' element={<Login />} />
            </Route>
            <Route path='/not-found' element={<NotFound /> } />
            <Route path='*' element={<NotFound /> } />
        </Routes>
}

export default Router