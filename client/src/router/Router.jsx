import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn.jsx'
import SignUp from '../pages/SignUp.jsx'
import SideNav from '../components/SideNav.jsx'
import HomeScreen from '../layout/component/chat/HomeScreen.jsx'
import CallScreen from '../layout/component/call/CallScreen.jsx'
import VideoScreen from '../layout/component/video/VideoScreen.jsx'
import AddFrndScreen from '../layout/component/addFriend/AddFrndScreen.jsx'

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SignIn />} />
          <Route index path="/nav" element={<SideNav />} />
          <Route index path="/homescreen" element={<HomeScreen />} />
          <Route index path="/callscreen" element={<CallScreen />} />
          <Route index path="/videocallscreen" element={<VideoScreen />} />
          <Route index path="/addfriendscreen" element={<AddFrndScreen />} />
          <Route index path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Router