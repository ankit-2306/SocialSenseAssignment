import React from 'react'
import './Demo.css';
import Role from '../components/Role';
import Lead from '../components/Lead';
import Manager from '../components/Manager';
import Hr from '../components/Hr';


const BoxThree = () => {
  return (
    <div className='boxthree '>
      <div className='ml-2'>Role</div>
      <Role />
      <div className='mt-3 ml-2'>Team</div>
      <Lead />
      <Hr />
      <Manager />
    </div>
  )
}

export default BoxThree