import React , {useContext} from "react";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { Link } from "react-router-dom";
// import Switch from "@mui/material/Switch";
// import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { auth } from "../firbase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";



// TODO: this Switch will used in future  
// const IOSSwitch = styled((props) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   "& .MuiSwitch-switchBase": {
//     padding: 0,
//     margin: 2,
//     transitionDuration: "300ms",
//     "&.Mui-checked": {
//       transform: "translateX(16px)",
//       color: "#fff",
//       "& + .MuiSwitch-track": {
//         backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
//         opacity: 1,
//         border: 0,
//       },
//       "&.Mui-disabled + .MuiSwitch-track": {
//         opacity: 0.5,
//       },
//     },
//     "&.Mui-focusVisible .MuiSwitch-thumb": {
//       color: "#33cf4d",
//       border: "6px solid #fff",
//     },
//     "&.Mui-disabled .MuiSwitch-thumb": {
//       color:
//         theme.palette.mode === "light"
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     "&.Mui-disabled + .MuiSwitch-track": {
//       opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxSizing: "border-box",
//     width: 22,
//     height: 22,
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
//     opacity: 1,
//     transition: theme.transitions.create(["background-color"], {
//       duration: 500,
//     }),
//   },
// }));

const SideNav = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);
// const toggle = () => {
// setIsDarkTheme((prevTheme) => !prevTheme);
// };


const { currentUser } = useContext(AuthContext);



  return (
    <div className="flex flex-col py-3 pb-3 justify-between gap-2  bg-gray-900 w-18 min-w-fit h-screen text-white">
      <div className="intems-center flex flex-col">
        <div className=" gap-5">
          <Link to="/">
            <IconButton>
              <img
                src={currentUser.photoURL}
                color="primary"
                className=" bg-gray-100 ml-1 mb-5 jitems-center rounded-lg h-10 w-10"
                alt="img"
              />
            </IconButton>
          </Link>
        </div>
        <div className="flex  flex-col gap-2.5 items-center justify-center">
          <div className=" ">
            <Link to="/homescreen">
              <IconButton sx={{ color: "white" }}>
                <ChatIcon sx={{ ":hover": { color: "#FCA311" } }} />
              </IconButton>
            </Link>
          </div>

          <div className=" ">
            <Link to="/callscreen">
              <IconButton sx={{ color: "white" }}>
                <AddIcCallIcon sx={{ ":hover": { color: "#FCA311" } }} />
              </IconButton>
            </Link>
          </div>
          <div className=" ">
            <Link to="/videocallscreen">
              <IconButton sx={{ color: "white" }}>
                <VideoCameraFrontIcon sx={{ ":hover": { color: "#FCA311" } }} />
              </IconButton>
            </Link>
          </div>
          <div className=" ">
            <Link to="/addfriendscreen">
              <IconButton sx={{ color: "white" }}>
                <PersonAddIcon sx={{ ":hover": { color: "#FCA311" } }} />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* <div>
            <IOSSwitch
              sx={{
                m: 1,
                display: "flex",
                justifyItems: "center",
              }}
              defaultChecked={isDarkTheme}
              onChange={toggle}
            />
          </div> */}
        <div className="m-auto h-10 justify-center rounded-lg ">
          <IconButton
            sx={{ color: "white" }}
            aria-label="logout"
            onClick={() => signOut(auth)}
          >
            <LogoutIcon
              sx={{
                display: "flex",
                justifyItems: "center",
                color: "white",
                ":hover": { color: "#FCA311" },
              }}
            />
          </IconButton>
        </div>
        <div className="m-auto h-10 justify-center rounded-lg ">
          <Link to="/settingscreen">
            <IconButton sx={{ color: "white" }}>
              <SettingsIcon
                sx={{
                  display: "flex",
                  justifyItems: "center",
                  color: "white",
                  ":hover": { color: "#FCA311" },
                }}
              />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
