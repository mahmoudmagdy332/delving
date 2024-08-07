import { Box, Typography } from "@mui/material"

const Categories = () => {
    const listItems=[
        {id:1,name:"HVAC",icon:"/ICONS/1.svg"},
        {id:2,name:"Light Current",icon:"/ICONS/2.svg"},
        {id:3,name:"Fire Fighting",icon:"/ICONS/3.svg"},
        {id:4,name:"Electrical Power",icon:"/ICONS/4.svg"},
        {id:5,name:"Construction",icon:"/ICONS/5.svg"},
        {id:6,name:"Plumbing",icon:"/ICONS/6.svg"},
    ]
  return (
    <Box sx={{bgcolor:"background.paper"}}>
         <div className="w-10/12 mx-auto grid gap-y-10 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 ">
         {listItems.map((item,idx)=>(
            <div className={`flex gap-2 items-center justify-center ${idx!==0&&"lg:border-s"}`}>
                <img src={item.icon}/>
                <Typography sx={{color:"dark.main"}}>{item.name}</Typography>
            </div>
         ))}
         </div>
    </Box>
  )
}

export default Categories