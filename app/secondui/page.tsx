"use client";
import React, { useState } from "react";
import "./Demo.css";
import BoxOne from "./BoxOne";
import SideBar from "./SideBar";
import BoxTwo from "./BoxTwo";
import BoxThree from "./BoxThree";
import BoxFour from "./BoxFour";

const SecondInterface = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  function handleNameChange(str: string) {
    setName(str);
  }
  function handleImageChange(str: string) {
    setImageUrl(str);
  }
  return (
    <div className="flex">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainBox">
        <BoxOne imgstr={imageUrl} namestr={name}/>
        <div className="twothreefourContainer">
          <BoxTwo imgchange={handleImageChange} nameChange={handleNameChange} />
          <BoxThree />
          <BoxFour />
        </div>
      </div>
    </div>
  );
};

export default SecondInterface;
