'use-client';
import React,{useState} from 'react'
import { Box } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';


interface MyObject {
    id: number;
    clr: string;
    chk: boolean;
}

interface Grad {
  id: number;
  clr: string;
  chk: boolean;
}

const coloredArr: MyObject[] = [
  {id:0, clr:'bg-orange-500',chk:false },
  {id:1, clr:'bg-amber-500',chk:false },
  {id:2, clr:'bg-white',chk:false },
  {id:3, clr:'bg-pink-500',chk:false },
  {id:4, clr:'bg-yellow-500',chk:false },
  {id:5, clr:'bg-red-500',chk:false },
  {id:6, clr:'bg-rose-500',chk:false },
  {id:7, clr:'bg-lime-500',chk:false },
  {id:8, clr:'bg-teal-500',chk:false },
  {id:9, clr:'bg-purple-500',chk:false },
 
  // ... other objects
];
const gradientArr: Grad[] = [
  {id:10, clr:'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...', chk:false},
  {id:11, clr:'bg-gradient-to-r from-blue-500 via-red-500 to-green-500 ...', chk:false},
  {id:12, clr:'bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 ...', chk:false},
  {id:13, clr:'bg-gradient-to-r from-orange-500 via-pink-500 to-grey-500 ...', chk:false},
  {id:14, clr:'bg-gradient-to-r from-indigo-500 via-red-500 to-brown-500 ...', chk:false},
  {id:15, clr:'bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 ...', chk:false},
  {id:16, clr:'bg-gradient-to-r from-teal-500 via-purple-500 to-rose-500 ...', chk:false},
  {id:17, clr:'bg-gradient-to-r from-indigo-500 via-green-500 to-teal-500 ...', chk:false},
  {id:18, clr:'bg-gradient-to-r from-orange-500 via-emerald-500 to-pink-500 ...', chk:false},
  {id:19, clr:'bg-gradient-to-r from-yellow-500 via-purple-500 to-cyan-500 ...', chk:false},
  {id:20, clr:'bg-gradient-to-r from-stone-500 via-rose-500 to-pink-500 ...', chk:false},
  {id:21, clr:'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 ...', chk:false},
  {id:22, clr:'bg-gradient-to-r from-rose-500 via-purple-500 to-lime-500 ...', chk:false},
  {id:23, clr:'bg-gradient-to-r from-indigo-500 via-lime-500 to-green-500 ...', chk:false},
]
const radialArr: Grad[] = [
  {id:24, clr:'bg-gradient-radial from-indigo-500 via-purple-500 to-pink-500 ...', chk:false},
  {id:25, clr:'bg-gradient-radial from-blue-500 via-red-500 to-green-500 ...', chk:false},
  {id:26, clr:'bg-gradient-radial from-pink-500 via-yellow-500 to-red-500 ...', chk:false},
  {id:27, clr:'bg-gradient-radial from-orange-500 via-pink-500 to-grey-500 ...', chk:false},
  {id:28, clr:'bg-gradient-radial from-indigo-500 via-red-500 to-brown-500 ...', chk:false},
  {id:29, clr:'bg-gradient-radial from-yellow-500 via-orange-500 to-pink-500 ...', chk:false},
  {id:30, clr:'bg-gradient-radial from-teal-500 via-purple-500 to-rose-500 ...', chk:false},
  {id:31, clr:'bg-gradient-radial from-indigo-500 via-green-500 to-teal-500 ...', chk:false},
  {id:32, clr:'bg-gradient-radial from-orange-500 via-emerald-500 to-pink-500 ...', chk:false},
  {id:33, clr:'bg-gradient-radial from-yellow-500 via-purple-500 to-cyan-500 ...', chk:false},
  {id:34, clr:'bg-gradient-radial from-stone-500 via-rose-500 to-pink-500 ...', chk:false},
  {id:35, clr:'bg-gradient-radial from-amber-500 via-yellow-500 to-orange-500 ...', chk:false},
  {id:36, clr:'bg-gradient-radial from-rose-500 via-purple-500 to-lime-500 ...', chk:false},
  {id:37, clr:'bg-gradient-radial from-indigo-500 via-lime-500 to-green-500 ...', chk:false},
]


const Colors = ({chng}:any) => {
  const [colorArr,setColorArr]=useState(coloredArr);
  const [gradArr,setGradArr]=useState(gradientArr);
  const [radArr,setRadArr]=useState(radialArr);
  const [prevChk,setPrevChk]=useState(2);

  // useEffect(()=>{
  //   coloredArr[prevChk].chk=true;
  //   setColorArr(coloredArr);
  // },[])
  
  

  function handleClick(e:any){
    const {target}=e;
    const index=target.getAttribute('data-index');
    if(index===null){
      return;
    }
    console.log(index);
    const p=prevChk;

    if(p<10 ){
      coloredArr[prevChk].chk=false;
      setColorArr(coloredArr);
    }
    if(p>9 && p<24 ){
        gradientArr[p-10].chk=false;
        setGradArr(gradientArr);
      }
    if(p>23){
        radialArr[p-24].chk=false;
        setRadArr(radArr);
      }
        
    if(index<10){
        setPrevChk(index);
        coloredArr[index].chk=true;
        setColorArr(coloredArr);
        chng(coloredArr[index].clr)
    }
    if(index>9 && index<24){
      setPrevChk(index);
      gradientArr[index-10].chk=true;
      setGradArr(gradientArr);
      chng(gradientArr[index-10].clr);
    }
    if(index>23){
      setPrevChk(index);
      radialArr[index-24].chk=true;
      setRadArr(radialArr);
      chng(radialArr[index-24].clr);
    }
    

  }

  return (
    <div onClick={handleClick} >

    <div className=' text-lg'>Solids</div>
    
    <Box
          sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap:'wrap',
              borderRadius: 2,
              overflow: 'clip',
              gap:1,
              }}
        >
            {colorArr.map((obj:MyObject)=>{
                const colo:any=obj.clr;
                console.log(colo,typeof(colo));
                return (
                  <>
                    <div 
                      key={obj.id} 
                      className={obj.clr}
                      style={{
                        // backgroundColor: colo,
                        fontSize: '16px',
                        padding: '10px',
                        height: '45px',
                        width: '45px'
                      }}
                      data-index={obj.id}
                    >
                      {obj.chk && <DoneIcon />}
                    </div>
                  </>
                )
            }
                )
            }      
    </Box>

    <div className='my-3 text-lg'> Liner Gradient</div>

    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      flexWrap:'wrap',
      overflow: 'clip',
      gap:1,
      }}
    >
      {gradArr.map((obj:Grad)=>{
                
                return (
                  <>
                    <div key={obj.id} 
                      className={obj.clr}
                      style={{
                      fontSize: '16px',
                      padding: '10px',
                      height: '45px',
                      width: '45px'
                      }}
                      data-index={obj.id}
                    >
                      {obj.chk && <DoneIcon />}
                    </div>
                  </>
                )
            }
                )
            }
    </Box>

    <div className='my-3 text-lg'> Radial Gradient</div>

    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      flexWrap:'wrap',
      overflow: 'clip',
      gap:1,
      }}
    >
      {radArr.map((obj:Grad)=>{
                
                return (
                  <>
                    <div key={obj.id} 
                      className={obj.clr}
                      style={{
                      fontSize: '16px',
                      padding: '10px',
                      height: '45px',
                      width: '45px'
                      }}
                      data-index={obj.id}
                    >
                      {obj.chk && <DoneIcon />}
                    </div>
                  </>
                )
            }
                )
            }
    </Box>
  </div>

)
}
export default Colors