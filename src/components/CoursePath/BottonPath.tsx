import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typography } from "@mui/material";
const BottonPath = ({ title, top, left }:{ title:string, top:number, left :number}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const images = [
      '/images/default on.svg',
      '',
      '/images/pressed on.svg'
    ];
    const handleClick = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <Link to="/Courses/dasdsa/adsasd">
         <div style={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            textAlign: 'center',
        }} >
          <motion.button
      onTapStart={handleClick} // Change the image on tap
      onTapCancel={handleClick} // Reset the image if the tap is canceled
      onTap={handleClick} // Reset the image when the tap is completed
    >
      <motion.img
      className="absolute w-24 right-3  z-9"
      style={{bottom:'60px'}}
      key={imageIndex} // key helps in transitioning between different images
      src={images[imageIndex]}
      alt="Switchable"
      initial={{ opacity: 0 }} // start of animation
      animate={{ opacity: 1 }} // end of animation
      exit={{ opacity: 0 }} // exit animation
      transition={{ duration: 0 }} // animation duration
      onTapStart={()=>setImageIndex(1)} // Change the image on tap
      onTapCancel={()=>setImageIndex(0)} 
    />
             </motion.button>
         
            <Typography sx={{mt:"100px",color:"primary.light"}} className="w-24">{title}</Typography>
            
        </div>
        </Link>
       
    );
}

export default BottonPath