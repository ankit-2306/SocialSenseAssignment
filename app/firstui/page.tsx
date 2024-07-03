'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import  Typography  from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Colors from './Colors';
import {useState} from 'react';
import Profile from './Profile';
import "./Demo.css";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';

const drawerWidth = 240;

function ResponsiveDrawer(props:any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [clr,setClr]=useState("bg-white")

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className='flex justify-center mt-2 mb-3'>Logo Here</div>
      <div className='text-xs'>Menu</div>
      <List>
        {['Home','Schedule','Recommendation','Analytics','Profile','Inbox'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> : <></>}
                {index === 1 ? <CalendarMonthOutlinedIcon /> : <></>}
                {index === 2 ? <AssistantOutlinedIcon /> : <></>}
                {index === 3 ? <AutoGraphOutlinedIcon /> : <></>}
                {index === 4 ? <AccountBoxOutlinedIcon /> : <></>}
                {index === 5 ? <MailIcon /> : <></>}
                {index === 6 ? <ContrastOutlinedIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className=' mb-4 bg-gray-400 p-3 pl-4'>
        <ContrastOutlinedIcon /> 
        <span className='ml-7'>
        Themes
        </span>
        </div>
      <Divider />
      <div className='text-xs'>Account</div>
      <List>
        {['Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  function handleThemeChange(bgClr:any){
    // console.log(bgClr);
    setClr(bgClr);
  }

  return (
    
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
         
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <div className='ml-32'> */}
          FirstUI
          {/* </div> */}
        </Toolbar>
         
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            bgcolor: 'background.default',
            overflow: 'clip',
            justifyContent:{ xs: 'space-evenly', md: 'space-between' },
            marginX:{xs:1,md:4}

          }}
        >
          <span><b>Themes</b></span>
          <span className='px-2 bg-slate-100 border-2 rounded-lg'>Kushagra Singh <CircleIcon sx={{color:'grey'}}/></span>
        </Box> 
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: '#e1e6eb',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'clip',
            margin:3,
            paddingX:3,
            paddingY:1,
            justifyContent:{ xs: 'space-evenly', md: 'space-between' },
          }}
        >
          <span className='m-2  text-black'>Apply a skin to your profile</span>
          {/* <span>custon===m</span> */}
          <span className='missingButtons'>
            <button className='border-gray-600 rounded-lg m-2 px-2 py-1 border-2 text-sm'>+ Custom</button>
            <button className='bg-black border-2 border-black text-white m-2 rounded-lg px-4 py-1 text-xs'>Save</button>
          </span>
        </Box>
        <Box
          className='colorParent'
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            overflow: 'clip',
            margin:3,
            marginTop:0,
            paddingX:3,
            paddingY:1,
            justifyContent:{ xs: 'space-evenly', md: 'space-between' },
          }}
        >
          <Box
            className="colorsParent"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap:'wrap',
              alignItems: 'center',
              overflow: 'clip',             
            }}
          >
            <Colors chng={handleThemeChange} />

          </Box>
          <Box  className='parent'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              // bgcolor: '#e1e6eb',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'visible',
              // marginLeft: {xs:1,md:15},
              // paddingX:3,
              paddingLeft:5,
              paddingY:1,
              justifyContent:{ xs: 'space-evenly', md: 'space-between' },
            }}
          >
            <Profile bg={clr}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
