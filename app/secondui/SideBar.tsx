import React from "react";
import "./Demo.css";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Image from "next/image";
const SideBar = () => {
  return (
    <div className="sidebarContainer flex-col ">
      <div className="sidebarTop">
        <div className="mt-2 mb-10 p-1 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">HR</div>
        <div className="mt-2"><AppsOutlinedIcon /></div>
        <div className="mt-2"><PeopleAltOutlinedIcon /></div>
        <div className="mt-2"><AirlineSeatIndividualSuiteOutlinedIcon /></div>
        <div className="mt-2"><SettingsOutlinedIcon /></div>
      </div>
      <div className="sidebarBottom">
        <div className="mb-5"><Image 
        className="rounded-full"
        src="/profile.png" 
        width={30} 
        height={30} 
        alt="Picture of the author" 
      /></div>
        <div><LogoutOutlinedIcon /></div>
      </div>
    </div>
  );
};

export default SideBar;
