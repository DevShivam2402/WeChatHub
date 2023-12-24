import React, {useContext} from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";



import { AuthContext } from "../../context/AuthContext";








const UsersChat = () => {
  const { currentUser } = useContext(AuthContext);



  return (
    <div className="bg-gray-200 w-full block">
      <div className="flex flex-row items-center py-5 bg-gray-900 justify-between">
        <div className="flex items-center gap-6 text-white px-5 ">
          <div>
            <IconButton sx={{ color: "white" }}>
              <KeyboardBackspaceIcon sx={{ ":hover": { color: "#FCA311" } }} />
            </IconButton>
          </div>
          <div className="flex gap-4 item-center">
            <Avatar
              src={currentUser.photoURL}
              sx={{ bgcolor: "white", height: "50px", width: "50px" }}
            />
            <div>
              <div className="leading-tight w-full p-1 justify-between">
                <h3 className="font-semibold">Shivam sharma</h3>
                <p>Online..</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 pr-5 text-white">
          <IconButton sx={{ color: "white" }}>
            <CallIcon sx={{ ":hover": { color: "green" } }} />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <VideocamIcon sx={{ ":hover": { color: "green" } }} />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <MoreVertIcon sx={{ ":hover": { color: "#FCA311" } }} />
          </IconButton>
        </div>
      </div>

      <div>chats</div>

      <div className="w-full fixed bottom-0 ">
        <form className="flex items-center  w-full">
          <div className="bg-white flex items-center m-3 p-3 rounded-lg w-8/12">
            <IconButton sx={{ color: "white" }}>
              <SentimentSatisfiedAltIcon
                sx={{ color: "black", ":hover": { color: "green" } }}
              />
            </IconButton>
            <input
              type="text"
              placeholder="Message..."
              className="outline-0 p-1 w-full m-1"
            />
            <IconButton sx={{ color: "white" }}>
              <AttachFileIcon
                sx={{ color: "black", ":hover": { color: "green" } }}
              />
            </IconButton>
          </div>
          <IconButton sx={{ color: "white" }}>
            <SendIcon
              sx={{
                height: "40px",
                width: "40px",
                ":hover": {
                  color: "#00447c",
                },
              }}
              className="text-gray-900"
            />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default UsersChat;
