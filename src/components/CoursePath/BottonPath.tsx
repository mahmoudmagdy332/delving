import { motion } from "framer-motion"
const BottonPath = () => {
  return (
    <motion.div
    className="box"
    style={ { width: '200px',
        height:' 200px',
        backgroundColor:'red'}}
        whileTap={{ scale: 0.9 }}
    
        transition={{ type: "spring", stiffness: 400, damping: 17 }}

  />
        
  )
}

export default BottonPath