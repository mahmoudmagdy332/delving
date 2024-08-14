import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../../Theme';
import { useTheme } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import Popup from '../../auth/Popup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { changePopup } from '../../../app/slices/UserSlice';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{name:'Home',link:"/"},
  {name:'Courses',link:"courses"},
  {name:'About Us',link:"/about"},
  {name:'Pricing',link:"/pricing"},
  {name:'Careers',link:"/careers"}];

export default function Index(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const dispatch = useDispatch<AppDispatch>();
  const handleClickOpen = () => {
    dispatch(changePopup(true));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box  sx={{ my: 2,width:'90%',mx:"auto" }}>
        <img src="/Logo.svg" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item,idx) => (
          <ListItem key={idx} disablePadding>
            <NavLink to="/courses" >
             
              <ListItemText primary={item.name} />

            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ display: 'flex', }}>
      <Popup/>
      <AppBar component="nav" sx={{ bgcolor: 'background.default',py:'10px' }}>
        <Toolbar>
         
          <div className='w-11/12  mx-auto flex justify-between items-center'>
           <div className='w-56'>
           {theme.palette.mode === 'dark' ?   <img src="/images/LOGO/icon black 1.png"/>:<img src="/images/LOGO/Logo (2) 1.png"/>}
           </div>
           <Box sx={{display: { xs: 'none', lg: 'flex' },gap:"5px",justifyContent:'center',alignItems:'center'}}>
            {navItems.map((item)=>(
              <NavLink to={item.link}>
             <Typography  sx={{
                color:'text.primary',
                fontWeight:500,
                px:'15px',py:"10px",
                borderRadius:"5px",
            '&:hover': {
              bgcolor:'background.paper',     
           },
           
          }} >
            {item.name}
          </Typography>
             </NavLink>
            ))}
           </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' },gap:'20px' ,alignItems:'center' }}>
          <Link to="/welcome">
          <Button
          sx={{bgcolor:'transparent',color:'primary.main', 
            '&:hover': {
          backgroundColor:'transparent', 
          color:'primary.main' ,
          py:'10px'
       },
          }}
          > Sign up</Button></Link>
              <Button sx={{bgcolor:'primary.main',color:'white',py:'10px',px:'20px' ,borderRadius:'7px',
                '&:hover': {
              backgroundColor:'yellow.main', 
                             
           },
              }} onClick={handleClickOpen}>login</Button>
              <Typography onClick={colorMode.toggleColorMode} sx={{
                color:'text.primary',
            '&:hover': {
              color:'text.primary',
              cursor:'pointer',          
           },
           
          }} >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{  display: { lg: 'none' }, color:"text.primary",ml:'10px' }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          
          </div>
          
        
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: 'block', xl: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
   
    </Box>
  );
}