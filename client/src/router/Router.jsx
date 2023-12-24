import React from 'react'




//path of files-----
import SignIn from '../pages/SignIn.jsx'
import SignUp from '../pages/SignUp.jsx'
import HomeScreen from '../components/chat/HomeScreen.jsx'
import CallScreen from '../components/call/CallScreen.jsx'
import VideoScreen from '../components/video/VideoScreen.jsx'



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


const Router = () => {



  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };




    return (
      <BrowserRouter>
        <Routes path="/">
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />

         

          <Route
            index
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
          <Route index path="/callscreen" element={
            <ProtectedRoute>
           <CallScreen />
              </ProtectedRoute>
        } />
          <Route index path="/videocallscreen" element={
            <ProtectedRoute>
             <VideoScreen />
              </ProtectedRoute>
          } />
          {/* <Route index path="/addfriendscreen" element={
          
            <ProtectedRoute>
             <AddFrndScreen />
              </ProtectedRoute>
          } /> */}
        </Routes>
      </BrowserRouter>
    );
}

export default Router