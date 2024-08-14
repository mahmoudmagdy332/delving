import { useState } from "react";
import CourseDiscrption from "../components/CoursePath/CourseDiscrption"
import ExploreCource from "../components/CoursePath/ExploreCource"
import Path from "../components/CoursePath/Path"
import { motion } from "framer-motion";

  
const CoursePath = () => {
  const [imageIndex, setImageIndex] = useState(0);

const images = [
  'https://via.placeholder.com/400x200.png?text=Image+1',
  'https://via.placeholder.com/400x200.png?text=Image+2',
  'https://via.placeholder.com/400x200.png?text=Image+3'
];
const handleClick = () => {
  setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
};
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto gap-10 flex flex-col md:flex-row">
         <div className="w-2/5 relative">
           <ExploreCource/> 
         </div>
         <div className="w-3/5">
         <Path/>
          <div>
      
      <br />
      <motion.button
      
        onTapStart={handleClick} // Change the image on tap
        onTapCancel={handleClick} // Reset the image if the tap is canceled
        onTap={handleClick} // Reset the image when the tap is completed
      >
        <motion.img
        key={imageIndex} // key helps in transitioning between different images
        src={images[imageIndex]}
        alt="Switchable"
        initial={{ opacity: 0 }} // start of animation
        animate={{ opacity: 1 }} // end of animation
        exit={{ opacity: 0 }} // exit animation
        transition={{ duration: 0.5 }} // animation duration
        onTapStart={()=>setImageIndex(1)} // Change the image on tap
        onTapCancel={()=>setImageIndex(0)} 
      />
      </motion.button>
   
    </div>

         <CourseDiscrption/>
         </div>
    </div>
  )
}

export default CoursePath