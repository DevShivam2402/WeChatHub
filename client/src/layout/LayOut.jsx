import React from 'react'
import SideNav from './component/SideNav'
import UserChat from "./component/chat/UsersChat";
import UserChatList from './component/chat/UserChatList'

const LayOut = () => {
  return (
    <div className="flex flex-row ">
      <SideNav />
      <UserChatList />
      <UserChat />
    </div>
  );
}

export default LayOut