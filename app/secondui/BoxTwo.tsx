'use client';
import  {  useState } from "react";
import "./Demo.css";
import TextField from "@mui/material/TextField";
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Image from "next/image";

const BoxTwo = ({imgchange,nameChange}:any) => {
  const [imageFile,setImageFile]=useState("");
  const [imageFileUrl,setImageFileUrl]=useState("");
  const [first,setFirst]=useState('Russel');
  const [last,setLast]=useState('Sims');

  function handleImageChange(e:any){
    const file=e.target.files[0];
    if(file){

      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
      console.log(imageFile,imageFileUrl);
      imgchange(imageFileUrl);
    }
  }
  function handleSave(){
    const fullName=first+" "+last;
    nameChange(fullName)
  }
  return (
    <div className="boxtwo">
      <div className="ml-5 mb-2">Profile Image</div>
      {/* <Image className="profileimg" src={imageFileUrl || '/Profile.png'} alt='Profile picture' height={180} width={180} /> */}
      <img className='profileimg' src={imageFileUrl || "/Profile.png"} alt="Profile pic" />
      <label className=" ml-10 text-blue-800 text-s " htmlFor="img"><AddPhotoAlternateOutlinedIcon/>Choose profile picture</label>
      <input id="img" type="file" accept="Image/*" onChange={handleImageChange}  hidden/>
      {/* <div className="ml-14" onClick={()=>{filePickerRef.current.onClick();}}>Choose Profile Image</div> */}
      <div className="ml-5 mt-4">Employee Details</div>
      <div className="ml-10">
        <TextField className="textfield"
          id="filled-helperText"
          label="First Name"
          defaultValue="Russel"
          variant="filled"
          size="small"
          onChange={(e)=>{setFirst(e.target.value);}}
          />
        <TextField className="textfield"
          id="filled-helperText"
          label="Last Name"
          defaultValue="Sims"
          variant="filled"
          size="small"
          onChange={(e)=>{setLast(e.target.value);}}
        />
        <TextField className="textfield"
          id="filled-helperText"
          label="Email Address"
          defaultValue="russel@mycompany.com"
          variant="filled"
          size="small"
        />
        <TextField className="textfield"
          id="filled-helperText"
          label="Phone Number"
          defaultValue="+1 255 297492"
          variant="filled"
          size="small"
        />
        <TextField className="textfield"
          id="filled-helperText"
          label="Position"
          defaultValue="iOS Developer"
          variant="filled"
          size="small"
        />
      </div>
      <button onClick={handleSave} className="bg-black button text-white rounded-xl p-2 px-10">Save Changes</button>
      <button className="ml-56 button bg-slate-100 rounded-xl p-2 px-20">Cancel</button>
    </div>
  );
};

export default BoxTwo;
