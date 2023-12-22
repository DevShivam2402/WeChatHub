import React from "react";
import SideNav from "../../../components/SideNav";
import UserChatList from "../chat/UserChatList";
import AFmain from "./AFmain";

const AddFrndScreen = () => {
  return (
    <div className="flex flex-row ">
      <SideNav />
      <UserChatList />
      <AFmain />
    </div>
  );
};

export default AddFrndScreen;
