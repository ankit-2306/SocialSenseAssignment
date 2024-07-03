"use-client";
import React from "react";
import { Box } from "@mui/material";
import "./Demo.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = ({bg}:any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        alignItems: "center",
        // bgcolor: "#e1e6eb",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "visible",
        // marginLeft: {xs:1,md:10},
        paddingLeft: 0,

        // paddingY: 1,
        justifyContent: { xs: "space-evenly", md: "space-between" },
      }}
    >
      <div className={bg}>
        <div className="m-1  h-40 rounded-lg relative overflow-visible">
          <img
            src="/bg_img.jpg"
            alt=""
            className="relative left-3 coverImg rounded w-full m-2 h-full  "
          />
          <img
            src="./profile.png"
            alt=""
            className=" profilePic absolute inset-0  object-cover object-top"
          />
        </div>
        <div className="mt-16 ml-8">
        <h2 className="text-3xl font-semibold">Mason Parker</h2>
                <h4 className="text-xl text-gray-500 font-light ">Graphics & UI/UX Designer</h4>
                <div className="flex gap-2 items-center">
                    <h5 className="text-lg text-gray-500 selection:font-light "><LocationOnIcon /> Denver, United States</h5>
                </div>
        </div>

        <div className="textStyle">
          I am a visionary Graphics and UI/UX Designer, seamlessly blending
          artistic flair with technical expertise. With a degree in Graphic
          Design, I consistently deliver visually stunning and user-centric
          solutions, leaving an indelible mark on the digital landscape. As a
          trusted collaborator, I am dedicated to crafting pixel-perfect Uls and
          captivating graphics that elevate user experiences.
        </div>
      </div>
    </Box>
  );
};

export default Profile;
