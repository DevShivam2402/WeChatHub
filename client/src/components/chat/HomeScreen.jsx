import React from 'react'
import SideNav from "../SideNav";
import UserChatList from './UserChatList'
import UsersChat from './UsersChat'

const HomeScreen = () => {
  return (
    <div className="flex flex-row ">
      <SideNav />
      <UserChatList />
      <UsersChat />
    </div>
  );
}

export default HomeScreen