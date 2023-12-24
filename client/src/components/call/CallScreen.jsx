import React from "react";
import SideNav from "../SideNav";
import LastCallList from "./LastCallList";
import CallMain from "./CallMain";

const CallScreen = () => {
  return (
    <div className="flex flex-row ">
      <SideNav />
      <LastCallList />
      <CallMain />
    </div>
  );
};

export default CallScreen;
