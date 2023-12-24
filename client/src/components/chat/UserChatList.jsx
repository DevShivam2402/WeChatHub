import React, {useContext} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../../context/AuthContext";



const UserChatList = () => {
 const { currentUser } = useContext(AuthContext);


  return (
    <div className="bg-gray-100 w-1/3 h-screen">
      <div className="">
        <form className=" ">
          <div className="bg-white flex items-center m-4 p-2 rounded-lg">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search User... "
              className="outline-0 p-1  mx-auto w-11/12  justify-center"
            />
            <IconButton color="black">
              <SortIcon />
            </IconButton>
          </div>
        </form>
      </div>

      {/* // TODO: provide backend */}
      <div className="flex flex-col bg-blue-100 pl-6 py-2 hover:bg-blue-700  ">
        <div className="flex gap-4 item-center ">
          <Avatar
            src={currentUser.photoURL}
            sx={{ bgcolor: "white", height: "50px", width: "50px" }}
          />
          <div
            className="hover:text-white
          
          
           "
          >
            <div className="leading-tight w-full p-1 justify-between">
              <h3 className="font-semibold">Shivam sharma</h3>
              <p>hi where are you?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatList;