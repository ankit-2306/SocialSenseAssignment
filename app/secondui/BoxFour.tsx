"use client";
import React, { useState } from "react";
import "./Demo.css";
import DatePicker from "../components/DatePicker";
import SwitchComp from "../components/SwitchComp";
import Sliding from '../components/Sliding';

interface MyObject {
  id: number;
  text: string;
  chk: boolean;
  perc:number;                        
}

const myarr: MyObject[] = [
  { id: 0, text: "Office Tour     " , chk: true ,perc: 100},
  { id: 1, text: "Management Introductory ", chk: true ,perc:200 },
  { id: 2, text: "Work Tools      " , chk: true ,perc: 20},
  { id: 3, text: "Meet Your Colleagues     " , chk: true ,perc: 0},
  { id: 4, text: "Duties Journal    " , chk: true ,perc: 0},
  { id: 5, text: "Requests Handling    " , chk: true ,perc: 0},
  { id: 6, text: "Activity Tracking    " , chk: true ,perc: 0},
];

const BoxFour = () => {
  const [arr, setArr] = useState(myarr);



  return (
    <div className="boxfour">
      <div>Onboarding</div>
      <DatePicker label="" placeholder=" 21 / 05 / 2024 " />
      <div className="mt-10 h">
        <SwitchComp txt={"Onboarding required"} chek={true} per={200}/>
      </div>
      <div>
        <Sliding />
      </div>
      <div className="text-sm mt-5 mb-5">onboarding scripts</div>
      <div className="mt-1 switchclasses" >
       {arr.map((obj:MyObject)=><SwitchComp txt={obj.text} chek={obj.chk} per={obj.perc}/>)}
      </div>
    </div>
  );
};

export default BoxFour;
