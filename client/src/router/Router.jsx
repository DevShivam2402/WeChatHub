import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn.jsx'
import SignUp from '../pages/SignUp.jsx'
import SideNav from '../layout/component/SideNav.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               
                    <Route index path='/' element={<SignIn />} />
                    <Route index path='/nav' element={<SideNav />} />
                    <Route index path='/register' element={<SignUp />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router