import { Box, Typography } from "@mui/material"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
const Footer = () => {
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);

  const pages=[{name:'Home',link:"/"},
    {name:'Courses',link:"courses"},
    {name:'Pricing',link:"/pricing"},
    {name:'Testimonials',link:"/testimonials"},
  ];
    const pages2=[
      
      {name:'About Us',link:"/about"},
      {name:'Careers',link:"/careers"},
      {name:'FAQs',link:"/faq"},
      {name:'Terms and condition',link:"/terms"},
      {name:'Privacy policy',link:"/privacy"},
    ];

  const sosials=[<FaFacebookF/>,<FaXTwitter />,<FaInstagram />, <FaLinkedinIn />]
  return (
    <Box sx={{backgroundColor:"#010203"}}>
      <div className="w-11/12 lg:w-10/12 mx-auto pt-16">
            <Box className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 ">
              <Box className="col-span-2 flex flex-col gap-8 justify-center items-start lg:justify-start">
              {/* {theme.palette.mode === 'dark' ?   <img src="/images/LOGO/Logo (2) 1.png" className="w-56"/>:<img src="/images/LOGO/icon black 1.png" className="w-56"/>} */}
              <img src={setting?.footer_logo} className="w-56"/>
              
              <Typography sx={{color:"#fcfcfd"}}>
              {setting?.footer_description}
              </Typography>
              </Box>
            <div className="flex flex-col gap-3 items-center">
              {pages.map((page)=>(
               <Link to={page.link}>
                  <Typography sx={{color:"#fcfcfd",'&:hover':{color:"#ffe266"}}}>
                  {page.name}
                </Typography>
               </Link>
              ))}
               
            </div> 
            <div className="flex flex-col gap-3 items-center">
              {pages2.map((page)=>(
                <Link to={page.link}>
                  <Typography sx={{color:"#fcfcfd",'&:hover':{color:"#ffe266"}}}>
                  {page.name}
                </Typography>
                 </Link>
              ))}
               
            </div>  
            <div className="flex gap-4 col-span-2 lg:col-span-1  justify-center lg:justify-end ">
              {sosials.map((sosial)=>(
                <Box sx={{color:"#fcfcfd",'&:hover':{color:"#ffe266"},fontSize:"18px"}} >
                  {sosial}
              </Box>
              ))}
            
           
          </div>  
            </Box> 
            <Box className="mt-5 flex flex-col lg:flex-row gap-4 justify-between py-5 border-t">
               <div className="flex gap-4">
               <Typography sx={{color:"gray.light"}}>Terms of Services</Typography>
               <Typography sx={{color:"gray.light"}}>Privacy policy </Typography>           
               </div>
               <div className="flex">
               <Typography sx={{color:"gray.light"}}>© 2024 Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo are trademarks of Brilliant Worldwide, Inc.</Typography>
               </div>
            </Box> 
      </div>
    </Box>
  )
}

export default Footer