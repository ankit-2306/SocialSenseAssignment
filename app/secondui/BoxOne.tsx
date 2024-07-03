'use client';
import React from 'react'
import "./Demo.css"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const BoxOne = ({imgstr,namestr}:any) => {
  return (
    <>
    <div className='boxone flex '>
      <div className='flex gap-2 topbar ml-20'>
        <KeyboardBackspaceOutlinedIcon />
        <img src={imgstr || '/profile.png'} alt="S" className='w-10 h-10 rounded-full'/>
        <div className='heading text-xl'>{namestr || 'Russel Sims'}</div>
      </div> 
      <div className='flex topbar mr-20'>
        <div className='text-xs text-slate-500'>Added on 21.04.2022</div>
        <div className='text-red-500 bg-red-100 border-red-100 p-1 m-1 rounded'><DeleteOutlineOutlinedIcon /> Delete</div>
      </div>
    </div>
    <div className=" mr-10 ml-10 lining bg-slate-300"></div>


    </>
  )
}

export default BoxOne