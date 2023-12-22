import React from "react";
import SideNav from "../../../components/SideNav";
import UserChatList from "../chat/UserChatList";
import VideoMain from "./VideoMain";

const VideoScreen = () => {
  return (
    <div className="flex flex-row ">
      <SideNav />
      <UserChatList />
      <VideoMain />
    </div>
  );
};

export default VideoScreen;
