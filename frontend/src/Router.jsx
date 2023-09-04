import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

const Router = () => {
    return <>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth'>
                <Route path='register' element={<Signup />} />
                <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    </>
}

export default Router